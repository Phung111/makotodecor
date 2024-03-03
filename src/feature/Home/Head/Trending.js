import Product from 'components/Product'

export default function Trending() {
  return (
    <>
      <div className="flex w-full items-end justify-center">
        <div className="grid grid-cols-3 gap-5 sm:gap-10">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="h-[210px] w-[120px] sm:h-[320px] sm:w-[180px]" key={index}>
              <Product type={'trending'} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
