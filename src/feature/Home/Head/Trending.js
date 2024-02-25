import Product from 'components/Product'

export default function Trending() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white/30">
          <p className="relative -top-1/2 flex justify-center text-xl font-semibold capitalize">trending</p>
        </div>
        <div className="flex h-[400px] items-center justify-center bg-white/30 px-2 py-10">
          <div className="grid grid-cols-3 gap-16">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="w-[170px]">
                <Product key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
