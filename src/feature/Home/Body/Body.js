import Product from 'components/Product'

export default function Body() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <h2 className="fz_dtgame text-4xl font-semibold capitalize sm:text-5xl">product</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-16">
            {Array.from({ length: 12 }, (_, index) => (
              <div className="flex justify-center" key={index}>
                <div className="h-[210px] w-[150px] shrink-0 sm:h-[360px] sm:w-[240px]">
                  <Product />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
