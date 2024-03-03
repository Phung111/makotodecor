import { Link } from 'react-scroll'

export default function Foot() {
  return (
    <>
      <div id="foot">
        <div className="relative flex justify-center">
          <img className="absolute -bottom-5 w-full sm:-bottom-10" src={require(`assets/images/nuocden.png`)} alt="nuocden" />
          <div className="absolute h-full w-full">
            <img className="" src={require(`assets/images/b3.png`)} alt="bgfoot" />
            <div className="relative h-10 w-full -translate-y-full sm:h-20">
              <div className="border-red2 flex h-1/2 items-center justify-end border-b-2 pr-2 sm:pr-20">
                <div className="flex h-7 gap-5 sm:gap-10">
                  <a href="https://www.facebook.com/Makoto.decor" className="text-red2 flex items-center hover:text-red sm:text-3xl sm:text-3xl">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/makotodecor" className="text-red2 flex items-center hover:text-red sm:text-3xl">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                  <a href="" className="text-red2 flex items-center hover:text-red sm:text-3xl">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="" className="text-red2 flex items-center hover:text-red sm:text-3xl">
                    <i class="fa-brands fa-square-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="flex h-full w-full -translate-y-[100%] justify-center sm:-translate-y-[200%]">
                <Link to="head" className="h-[25px] w-[20px] cursor-pointer sm:h-[100px] sm:w-[80px] sm:hover:animate-bounce">
                  <img className="" src={require(`assets/images/totop.png`)} alt="totop" />
                </Link>
              </div>
            </div>
          </div>
          <img className="absolute w-[600px]" src={require(`assets/images/chufoot.png`)} alt="chufoot" />
        </div>
      </div>
    </>
  )
}
