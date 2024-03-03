import Product from 'components/Product'

export default function Body() {
  return (
    <>
      <div className="py-5">
        <div className="flex justify-center">
          <h2 className="svn_shikimaru text-2xl">From The Land of the Rising Sun to Your Home</h2>
        </div>
        <div className="relative flex h-[1000px] justify-center">
          <img className="absolute hidden sm:block" src={require(`assets/images/tori.png`)} alt="tori" />
          <img className="absolute sm:hidden" src={require(`assets/images/torimobi.png`)} alt="torimobi" />
        </div>
        <div className="z-10 w-full "></div>
      </div>

      {/* {Array.from({ length: 12 }, (_, index) => (
              <div className="flex justify-center" key={index}>
                <div className="h-[210px] w-[140px] shrink-0 sm:h-[450px] sm:w-[250px]">
                  <Product />
                </div>
              </div>
            ))} */}
    </>
  )
}
