import BestProduct from 'feature/Home/Head/BestProduct'
import Trending from 'feature/Home/Head/Trending'

export default function Head() {
  return (
    <>
      <div className="relative flex h-[700px] w-full justify-end">
        <img className="absolute w-full object-contain" src={require(`assets/images/bg.png`)} alt="logo" />
        <div className="relative z-50 flex h-full w-[700px] flex-col gap-10 pt-20">
          <BestProduct />
          <Trending />
        </div>
      </div>
    </>
  )
}
