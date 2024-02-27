import BestProduct from 'feature/Home/Head/BestProduct'
import Trending from 'feature/Home/Head/Trending'
import Rem from 'components/Rem'

export default function Head() {
  return (
    <>
      <div className="flex w-full flex-col items-end gap-5 sm:relative">
        <Rem />
        <div className="left-0 -z-10 flex h-full items-center sm:absolute sm:w-2/3">
          <img className="w-full object-contain sm:w-[90%]" src={require(`assets/images/bg.png`)} alt="logo" />
        </div>
        <div className="flex flex-col gap-10 sm:w-[800px]">
          <BestProduct />
          <Trending />
        </div>
      </div>
    </>
  )
}
