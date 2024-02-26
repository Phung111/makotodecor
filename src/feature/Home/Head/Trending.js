import Product from 'components/Product'

export default function Trending() {
  return (
    <>
      <div className="flex flex-col gap-5 bg-white/40 px-2 pb-5 sm:px-10">
        <p className="fz_dtgame flex h-7 -translate-y-1/2 justify-center text-4xl font-semibold capitalize sm:text-5xl">trending</p>
        <div className="flex h-[150px] w-full items-end justify-center sm:h-[300px]">
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="h-[150px] w-[105px] sm:h-[300px] sm:w-[180px]">
                <Product key={index} type={'trending'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
