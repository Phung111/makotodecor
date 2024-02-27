import BestProduct from 'feature/Home/Head/BestProduct'
import Trending from 'feature/Home/Head/Trending'

export default function Head() {
  return (
    <>
      <div className="flex w-full flex-col gap-5 sm:relative sm:h-screen">
        <div className="flex h-full w-2/3 items-center">
          <img className="w-[90%] object-contain -sm:w-full" src={require(`assets/images/bg.png`)} alt="logo" />
        </div>
        <div className="right-0 z-50 flex flex-col gap-10 sm:absolute sm:w-[800px] sm:pt-20">
          <BestProduct />
          <Trending />
        </div>
      </div>
    </>
  )
}
