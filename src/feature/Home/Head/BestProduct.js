export default function BestProduct() {
  return (
    <>
      <div className="flex cursor-pointer gap-5 px-2 sm:gap-10 sm:px-0 sm:transition sm:hover:scale-[107%]">
        <div className="relative h-40 w-40 shrink-0 sm:h-60 sm:w-60">
          <div className="absolute bottom-0 right-0 aspect-square h-[85%] rounded-full bg-red" />
          <img className="absolute left-0 top-0 h-[85%] object-contain" src={require(`assets/images/daruma.png`)} alt="logo" />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <p className="fz_dtgame text-4xl font-semibold capitalize underline decoration-red decoration-4 underline-offset-8 sm:text-5xl">best product</p>
          <p className="font-semibold uppercase">daruma</p>
          <p className="line-clamp-2 text-black/50 sm:line-clamp-3">Búp bê Daruma là tên gọi dùng để chỉ một biểu tượng cho sự may mắn. Người Nhật thường dùng loại búp bê này làm quà tặng cho nhau trong các dịp đặc biệt.</p>
        </div>
      </div>
    </>
  )
}
