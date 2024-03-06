import Button from 'components/Button'
import Part from 'feature/Detail/Info/Part/Part'
import Size from 'feature/Detail/Info/Part/Size'
import Color from 'feature/Detail/Info/Part/Color'
import Description from 'feature/Detail/Info/Part/Description'
import { useSelector } from 'react-redux'

export default function Name() {
  const product = useSelector((state) => state.baseSlice.data.product)

  return (
    <>
      {product && (
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-2xl font-bold capitalize sm:text-3xl">{product.name}</h1>
          <div className="flex items-center gap-1">
            <p className="text-sm font-semibold sm:text-base">719</p>
            <p className="text-black/70">Sold</p>
          </div>
          <div className="flex h-[66px] items-center gap-2 bg-gray px-5">
            <p className="text-2xl text-primary sm:text-[30px]">₫{product.price}</p>
            <p className="text-sm text-black/50 line-through sm:text-base">₫{product.priceFirst}</p>
            <p className="pu-[1px] bg-primary px-1 text-[8px] font-bold uppercase text-white sm:py-0.5 sm:text-xs">50% off</p>
          </div>
          <Part title={'loại'}>cờ</Part>
          <Size array={product.sizes} />
          <Color array={product.colors} />
          <Description>{product.des}</Description>
          <div className="flex items-center -sm:justify-center">
            <a href="https://www.facebook.com/Makoto.decor" target="_blank" className="h-[48px] w-[180px] shrink-0">
              <Button type={'solid'}>liên hệ</Button>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
