import Product from 'components/Product'

export default function Trending() {
  return (
    <>
      <div className="flex flex-col gap-5 bg-white/40 px-2 pb-5 sm:px-10">
        <p className="flex h-7 -translate-y-1/2 justify-center text-xl font-semibold capitalize">trending</p>
        <div className="flex h-[180px] w-full items-end justify-center sm:h-[300px]">
          <div className="grid grid-cols-3 gap-7 sm:gap-16">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="w-[110px] sm:w-[180px]">
                <Product key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
