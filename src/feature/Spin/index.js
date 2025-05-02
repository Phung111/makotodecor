import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './styles.css';

const Spin = () => {
  // Sử dụng useRef để tham chiếu đến các phần tử DOM
  const wheelRef = useRef(null);
  const spinSoundRef = useRef(null);
  const finishSoundRef = useRef(null);
  const displayRef = useRef(null);

  useEffect(() => {
    // Code sẽ chạy sau khi component được render và DOM đã sẵn sàng
    const wheel = wheelRef.current;
    const spinSound = spinSoundRef.current;
    const finishSound = finishSoundRef.current;
    const display = displayRef.current;
    const startButton = document.querySelector(".button");
    const disableButton = document.querySelector(".disableBtn");

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
    if (yourPrize && display) display.innerHTML = yourPrize;

    const handleWin = (actualDeg) => {
      const winningSymbolNr = Math.ceil((actualDeg % 360) / zoneSize);
      const prize = symbolSegments[winningSymbolNr];
      if (display) display.innerHTML = prize;
      localStorage.setItem("yourPrize", prize);
    };

    // Xử lý khi bánh quay xong
    const handleTransitionEnd = async () => {
      // Dừng spin
      spinSound.pause();
      spinSound.currentTime = 0;

      // Play finish
      finishSound.currentTime = 0;
      await finishSound.play().catch(err => console.error("Error playing finish sound", err));

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
    };

    // Click quay
    const handleClick = async () => {
      localStorage.setItem("isSpun", "true");
      if (display) display.innerHTML = "";
    
      // Play spin sound
      spinSound.currentTime = 0;
      await spinSound.play().catch(err => console.error("Error playing spin sound", err));
    
      // Bước 1: Lùi nhẹ
      wheel.style.transition = "transform 0.3s ease-out";
      wheel.style.transform = "rotate(-15deg)";
    
      // Vô hiệu hóa nút bấm ngay sau khi click
      startButton.style.pointerEvents = "none";
      startButton.style.opacity = 0.5;
    
      // Bước 2: Chờ 300ms rồi quay chính
      setTimeout(() => {
        deg = Math.floor(5000 + Math.random() * 5000);
        wheel.style.transition = "all 5s ease-out";
        wheel.style.transform = `rotate(${deg}deg)`;
      }, 300);
    };    

    // Khởi tạo các event listeners
    const initializeEventListeners = () => {
      startButton.addEventListener("click", handleClick);
      wheel.addEventListener("transitionend", handleTransitionEnd);
    };

    // Định nghĩa hàm khởi tạo
    const initialize = async () => {
      try {
        // Chờ cả 2 âm thanh preload xong
        await Promise.all([waitForLoad(spinSound), waitForLoad(finishSound)]);
        console.log("All audio loaded");
      } catch (e) {
        console.error("Audio load failed", e);
      }

      // "Prime" cả 2 audio cho iOS/Chrome
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
      
      initializeEventListeners();
    };

    // Gọi hàm khởi tạo
    initialize();

    // Cleanup khi component unmount
    return () => {
      startButton.removeEventListener("click", handleClick);
      wheel.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="app">
      <link
        rel="preload"
        href={require("assets/fonts/000IMAGINARYFRIENDTEDDYBEAR.otf")}
        as="font"
        type="font/otf"
        crossOrigin=""
      />
      <audio 
        id="spinSound" 
        src={require("assets/sounds/spin.wav")} 
        preload="auto"
        ref={spinSoundRef}
      ></audio>
      <audio 
        id="finishSound" 
        src={require("assets/sounds/finish.mp3")} 
        preload="auto"
        ref={finishSoundRef}
      ></audio>
  
      <div className="wheel-wrap">
        <img 
          src={require("assets/images/spin/wheel2.png")} 
          alt="wheel" 
          className="wheel max-w-none" 
          ref={wheelRef}
        />
        <img 
          src={require("assets/images/spin/marker.png")} 
          alt="marker" 
          className="marker" 
        />
        <img 
          src={require("assets/images/spin/fllower.png")} 
          alt="flower" 
          className="flower" 
        />
      </div>
  
      <div className="button-wrap">
        <img 
          src={require("assets/images/spin/button.png")} 
          alt="button" 
          className="button" 
        />
        <img
          src={require("assets/images/spin/disable.png")}
          alt="disableButton"
          className="disableBtn"
          hidden
        />
      </div>
  
      <div className="display-wrap">
        <img 
            src={require("assets/images/spin/border.png")} 
            alt="border"
          />
        <div className="display teddy_bear" ref={displayRef}></div>
      </div>
    </div>
  );
  
};

export default Spin;
