import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function SwiperHead({}) {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: '.next_logo',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src={require(`assets/images/logo1.png`)} alt="logo1" className="object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require(`assets/images/logo2.png`)} alt="logo2" className="object-contain" />
        </SwiperSlide>
        <button className={`next_logo absolute bottom-3 left-1/2 z-10 flex aspect-square w-8 -translate-x-1/2 sm:w-16`}>
          <img src={require(`assets/images/next_logo.png`)} alt="next_logo" className="object-contain" />
        </button>
      </Swiper>
    </>
  )
}
