import Product from 'components/Product'

export default function Body() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <h2 className="text-xl font-semibold capitalize">product</h2>
          </div>
          <div className="px-2 pt-40 sm:px-0">
            <div className="grid grid-cols-2 gap-x-4 gap-y-36 sm:grid-cols-5 sm:gap-x-16 sm:gap-y-52">
              {Array.from({ length: 12 }, (_, index) => (
                <div className="flex justify-center" key={index}>
                  <div className="-sm:w-[150px] w-full shrink-0">
                    <Product />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
