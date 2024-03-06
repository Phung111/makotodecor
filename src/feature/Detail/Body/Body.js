import { useSelector } from 'react-redux'

export default function Body() {
  const product = useSelector((state) => state.baseSlice.data.product)
  const imgs = product.imgs

  return (
    <>
      <div className="flex flex-col gap-2 p-4">{imgs && imgs.map((item, index) => <img src={require(`assets/images/sp/${item}.png`)} className="aspect-square w-full object-contain" />)}</div>
    </>
  )
}
