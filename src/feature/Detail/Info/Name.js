import Button from 'components/Button'
import Part from 'feature/Detail/Info/Part/Part'
import Size from 'feature/Detail/Info/Part/Size'
import Color from 'feature/Detail/Info/Part/Color'
import Description from 'feature/Detail/Info/Part/Description'

export default function Name() {
  const a1 = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  const a2 = ['RED', 'BLUE', 'YELLOW', 'ORANGE', 'GREEN', 'BLACK', 'WHITE']

  return (
    <>
      <div className="flex w-full flex-col gap-4 -sm:items-center">
        <h1 className="text-2xl font-bold capitalize sm:text-3xl">cờ mèo trang trí nhật bản</h1>
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold sm:text-base">719</p>
          <p className="text-black/70">Sold</p>
        </div>
        <div className="flex h-[66px] items-center gap-2 bg-gray px-5">
          <p className="text-2xl text-primary sm:text-[30px]">₫500.000</p>
          <p className="text-sm text-black/50 line-through sm:text-base">₫1.000.000</p>
          <p className="pu-[1px] bg-primary px-1 text-[8px] font-bold uppercase text-white sm:py-0.5 sm:text-xs">50% off</p>
        </div>
        <Part title={'loại'}>cờ</Part>
        <Size array={a1} />
        <Color array={a2} />
        <Description>“Maneki” có nghĩa là mời gọi, “Neko” là con mèo. Đây được xem là biểu tượng may mắn phổ biến nhất được trưng bày hay làm quà tặng. Mèo may mắn Maneki Neko thường được làm bằng gốm sứ, nhựa hay kim loại. Chúng thường được đặt ở lối ra vào cửa tiệm, nhà hàng, tiệm bánh ở Nhật hay các nước Châu Á khác. Maneki Neko có nhiều màu sắc khác nhau như vàng, đỏ, trắng hoặc đen, mỗi màu sắc hay tư thế lại có ý nghĩa riêng. Ví dụ, màu vàng được xem là mang lại sự thịnh vượng và sự giàu có, trong khi đó màu đen thì được tin rằng sẽ xua đuổi ma quỷ và bảo vệ an toàn. Biểu tượng mèo Maneki Neko Maneki Neko có thể vẫy chân trái hoặc chân phải của nó. Vẫy chân phải có ý nghĩa mời gọi tiền tài và kinh doanh, vẫy chân trái thì nghĩa là mời khách hàng. Tuy nhiên, theo truyền thống chú mèo sẽ vẫy chân trái. Do đó, mèo vẫy chân trái được trưng bày phổ biến ở nhà geisha và các nhà hàng tiệc đêm.</Description>
        <a href="https://www.facebook.com/Makoto.decor" target="_blank" className="h-[48px] w-[180px] shrink-0">
          <Button type={'solid'}>liên hệ</Button>
        </a>
      </div>
    </>
  )
}
