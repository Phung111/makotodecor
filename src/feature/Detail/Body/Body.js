import { useSelector } from 'react-redux'

export default function Body() {
  const product = useSelector((state) => state.baseSlice.data.product)
  const colors = product.colors

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col gap-10">
          <div className="flex h-14 items-center bg-gray px-4">
            <h2 className="text-xl font-medium uppercase">chi tiết sản phẩm</h2>
          </div>
          <div className="flex flex-col gap-2 p-4">{colors && colors.map((item, index) => <img src={require(`assets/images/sp/${item.img}.png`)} className="aspect-square w-full object-contain" />)}</div>
        </div>
      </div>
    </>
  )
}
