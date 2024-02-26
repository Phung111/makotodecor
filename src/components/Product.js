import { Link } from 'react-router-dom'

export default function Product({ type }) {
  let noClass = ''
  let mobile = 'text-[20px] sm:text-[40px] sm:leading-6 leading-3'
  let computer = 'sm:text-[54px] sm:leading-6 leading-4'
  type == 'trending' ? (noClass = mobile) : (noClass = computer)

  return (
    <>
      <Link to="/detail">
        <div className="relative flex h-full w-full flex-col items-center justify-end sm:transition sm:hover:scale-[108%] sm:hover:shadow-md">
          <div className="absolute top-0 z-10 w-[60%]">
            <img className="h-full w-full object-contain" src={require(`assets/images/1.png`)} alt="logo" />
          </div>
          <div className="absolute left-0 top-0 z-20 flex h-2/5 w-1/5 justify-center pb-[5%] pt-[20%]">
            <div className="absolute top-0 h-full w-full">
              <img className="h-full w-full object-contain" src={require(`assets/images/no.png`)} alt="no" />
            </div>
            <div className="fz_dtgame z-20 flex  flex-col items-center justify-between">
              <p className={noClass}>0</p>
              <p className={noClass}>9</p>
              <p className={noClass}>8</p>
            </div>
          </div>
          <div className="aspect-square w-full bg-[linear-gradient(to_top,#fef3f1_50%,transparent_50%)] px-2">
            <div className="aspect-square w-full rounded-full bg-color2" />
          </div>
          <div className="w-full bg-color3 sm:h-2" />
          <div className="relative h-12 bg-color1 px-2 py-3 sm:h-20 -sm:text-xs">
            <p className="line-clamp-2 -sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="absolute left-0 top-0 line-clamp-1 flex h-5 w-[95%] -translate-x-[10%] -translate-y-1/2 items-center bg-black p-1 uppercase text-white sm:h-8 -sm:text-[10px]">name product</p>
          </div>
        </div>
      </Link>
    </>
  )
}
