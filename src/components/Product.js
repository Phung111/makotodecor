import { Link } from 'react-router-dom'

export default function Product({ type }) {
  let noClass = ''
  let textName = ''
  let textPrice = 'text-[20px] sm:text-[40px] font-bold'

  if (type == 'trending') {
    textName = 'text-[9px] sm:text-[20px] leading-4 sm:leading-8'
    textPrice = 'text-[18px] sm:text-[28px]'
  } else {
    textName = 'text-[10px] sm:text-[18px]'
    textPrice = 'text-[20px] sm:text-[28px]'
  }

  return (
    <>
      <Link to="/detail" className="h-full w-full">
        <div className="flex h-full w-full flex-col sm:transition sm:hover:scale-[110%]">
          <div className="relative h-full bg-color3">
            <div className="absolute top-0 flex h-full w-full items-center justify-center p-3">
              <div className="aspect-square w-full rounded-full bg-color2" />
            </div>
            <div className="absolute z-10 h-full w-full p-2 sm:p-5">
              <img className="h-full w-full object-contain" src={require(`assets/images/1.png`)} alt="logo" />
            </div>
          </div>
          <div className="flex h-[15%] justify-center bg-black">
            <p className={`${textName} !line-clamp-1 font-bold capitalize text-white`}>rèm noren mèo</p>
          </div>
          <div className="flex h-1/5 justify-center bg-color1">
            <p className={`${textPrice} flex items-center justify-center font-bold text-white`}>500.000</p>
          </div>
          <div className="flex h-1/5 justify-center">
            <p className={`${textPrice} flex items-center justify-center font-bold line-through`}>500.000</p>
          </div>
        </div>
      </Link>
    </>
  )
}
