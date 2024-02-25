import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <>
      <Link to="/detail">
        <div className="flex shrink-0 items-center justify-end sm:justify-center">
          <div className="flex w-full cursor-pointer flex-col transition hover:scale-[108%] hover:shadow-md">
            <div className="-sm:pb-4 relative flex aspect-square w-full flex-col justify-center bg-color3">
              <div className="relative -top-1/2 flex justify-center px-[5%]">
                <div className="flex aspect-square w-full justify-center rounded-full bg-color2">
                  <img className="absolute -top-1/3 object-contain px-3" src={require(`assets/images/1.png`)} alt="logo" />
                </div>
              </div>
              <div className="-sm:text-[9px] absolute bottom-0 w-full bg-color1 px-2 py-2">
                <p className="line-clamp-2 pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="absolute left-0 top-0 line-clamp-1 flex h-4 w-[90%] -translate-x-[15%] -translate-y-1/2 items-center bg-black px-2 uppercase text-white sm:h-6 sm:-translate-x-[15%]">name product</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
