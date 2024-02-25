import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-full cursor-pointer flex-col transition hover:scale-[108%] hover:shadow-md">
          <div className="relative flex aspect-square w-full flex-col justify-center bg-color3">
            <div className="relative -top-1/2 flex justify-center px-[5%]">
              <div className="flex aspect-square w-full justify-center rounded-full bg-color2">
                <img className="absolute -top-1/3 object-contain px-3" src={require(`assets/images/1.png`)} alt="logo" />
              </div>
            </div>
            <div className="absolute bottom-0 w-full bg-color1 px-2 py-2">
              <p className="line-clamp-2 pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="absolute -left-5 -top-3 line-clamp-1 flex h-6 w-[150px] items-center bg-black px-2 uppercase text-white">name product</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
