import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { useState, useEffect } from 'react'

import Product from 'components/Product'

export default function Products({}) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '320px',
    width: '216px',
  }

  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const sNavBG = `origin-center -translate-x-1/2 transform !rounded-full font-bold border-2 border-white text-white shadow-md transition hover:scale-150 `
  const sNavW = `flex aspect-square w-10 cursor-pointer items-center justify-center text-lg`
  useEffect(() => {
    // Lấy tất cả các bullets
    const bullets = document.querySelectorAll('.swiper-pagination-bullet')

    // Áp dụng kiểu dáng cho từng bullet
    bullets.forEach((bullet, index) => {
      // Tùy chỉnh kiểu dáng cho từng bullet tại đây
      // Ví dụ:
      bullet.style.backgroundColor = '#999999'
    })
  }, [])

  return (
    <>
      <div className="relative h-full w-full">
        <Swiper
          onSlideChange={(swiper) => {
            setCanPrevious(swiper.activeIndex !== 0)
            setCanNext(swiper.isEnd ? false : true)
          }}
          modules={[Grid, Navigation, Pagination, Autoplay]}
          slidesPerView={5}
          grid={{
            fill: 'row',
            rows: 2,
          }}
          spaceBetween={30}
          slidesPerGroup={5}
          pagination={{
            el: `.swiper-custom-pagination`,
            dynamicBullets: true,
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>'
            },
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
        >
          {Array.from({ length: 50 }, (_, index) => (
            <SwiperSlide style={style} key={index}>
              <Product />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="men_men flex h-10 w-full items-center justify-center ">
          <div className="swiper-custom-pagination flex !w-full !translate-x-0 justify-center"></div>
        </div>
        <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center">
          <button className={`swiper-button-prev-custom ${sNavBG} ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
            <div className={`${sNavW}`}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </button>
        </div>
        <div className="absolute right-0 top-0 z-10 flex h-full w-0 items-center">
          <button className={`swiper-button-next-custom ${sNavBG} ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
            <div className={`${sNavW}`}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
