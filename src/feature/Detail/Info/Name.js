import Button from 'components/Button'

export default function Name() {
  return (
    <>
      <div className="flex w-full flex-col gap-4 ">
        <h1 className="text-3xl font-bold capitalize">cờ mèo trang trí nhật bản</h1>
        <div className="flex items-center gap-1">
          <p className="text-base font-semibold">719</p>
          <p className="text-black/70">Sold</p>
        </div>
        <div className="bg-gray flex h-[66px] items-center gap-2 px-5">
          <p className="text-base text-black/50 line-through">₫1.000.000</p>
          <p className="text-[30px] text-primary">₫500.000</p>
          <p className="bg-primary px-1 py-0.5 text-xs font-bold uppercase text-white">50% off</p>
        </div>
        <p>Loại: Cờ</p>
        <div className="h-[48px] w-[180px]">
          <Button type={'solid'}>liên hệ</Button>
        </div>
      </div>
    </>
  )
}
