import confetti from "canvas-confetti";

(async function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  const disableButton = document.querySelector(".disableBtn");
  const display = document.querySelector(".display");

  // Thẻ audio từ HTML
  const spinSound = document.getElementById("spinSound");
  const finishSound = document.getElementById("finishSound");

  // Tắt button cho đến khi audio load xong
  startButton.style.pointerEvents = "none";
  startButton.style.opacity = 0.5;

  const isSpun = localStorage.getItem("isSpun");
  startButton.hidden = isSpun === "true";
  disableButton.hidden = isSpun !== "true";

  // Promise chờ audio canplaythrough
  const waitForLoad = (audioEl) =>
    new Promise((resolve, reject) => {
      const clean = () => {
        audioEl.removeEventListener("canplaythrough", onCan);
        audioEl.removeEventListener("error", onErr);
      };
      const onCan = () => {
        clean();
        resolve();
      };
      const onErr = (e) => {
        clean();
        reject(e);
      };
      audioEl.addEventListener("canplaythrough", onCan);
      audioEl.addEventListener("error", onErr);
      audioEl.load();
    });

  try {
    // Chờ cả 2 âm thanh preload xong
    await Promise.all([waitForLoad(spinSound), waitForLoad(finishSound)]);
    console.log("All audio loaded");
  } catch (e) {
    console.error("Audio load failed", e);
  }

  // “Prime” cả 2 audio cho iOS/Chrome
  await Promise.all([
    spinSound
      .play()
      .then(() => spinSound.pause())
      .catch(() => {}),
    finishSound
      .play()
      .then(() => finishSound.pause())
      .catch(() => {}),
  ]);

  // Kích hoạt lại nút quay
  startButton.style.pointerEvents = "auto";
  startButton.style.opacity = 1;

  // Các biến game
  let deg = 0;
  const zoneSize = 60;
  const symbolSegments = {
    1: "Shimenawa",
    2: "Gối Nhật Bản",
    3: "Cờ gỗ",
    4: "Rèm Noren",
    5: "Ema Daruma",
    6: "Ema ngẫu nhiên",
  };

  // Load prize cũ
  const yourPrize = localStorage.getItem("yourPrize");
  if (yourPrize) display.innerHTML = yourPrize;

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil((actualDeg % 360) / zoneSize);
    const prize = symbolSegments[winningSymbolNr];
    display.innerHTML = prize;
    localStorage.setItem("yourPrize", prize);
  };

  // Click quay
  startButton.addEventListener("click", async () => {
    localStorage.setItem("isSpun", "true");
    display.innerHTML = "";

    // Play spin ngay
    spinSound.currentTime = 0;
    await spinSound.play();

    // Quay bánh ngay lập tức
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = "all 5s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;
    startButton.style.pointerEvents = "none";
  });

  // Khi bánh quay xong
  wheel.addEventListener("transitionend", async () => {
    // Dừng spin
    spinSound.pause();
    spinSound.currentTime = 0;

    // Play finish
    finishSound.currentTime = 0;
    await finishSound.play();

    // Xử lý hiển thị giải
    const actualDeg = deg % 360;
    wheel.style.transition = "none";
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    handleWin(actualDeg);

    // Confetti
    confetti({
      particleCount: 500,
      spread: 150,
      startVelocity: 70,
      origin: { y: 1, x: 0 },
    });
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
    setTimeout(() => {
      confetti({
        particleCount: 500,
        spread: 150,
        startVelocity: 70,
        origin: { y: 1, x: 1 },
      });
    }, 600);
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }

    startButton.hidden = true;
    disableButton.hidden = false;
  });
})();
