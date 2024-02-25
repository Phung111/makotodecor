import Product from 'components/Product'

export default function Body() {
  return (
    <>
      <div className="container pt-40">
        <div className="grid grid-cols-5 gap-x-16 gap-y-52">
          {Array.from({ length: 12 }, (_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
