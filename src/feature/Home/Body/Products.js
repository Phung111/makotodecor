import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import Product from 'components/Product'

export default function Products({}) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '320px',
    width: '216px',
  }

  const styleMobile = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '280px',
    width: '140px',
  }

  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const sNavBG = `origin-center -translate-x-1/2 transform !rounded-full font-bold border-2 border-white text-white shadow-md sm:transition sm:hover:scale-150 `
  const sNavW = `flex aspect-square w-10 cursor-pointer items-center justify-center text-lg`
  useEffect(() => {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet')

    bullets.forEach((bullet, index) => {
      bullet.style.backgroundColor = '#999999'
    })
  }, [])

  const isSM = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <>
      {!isSM && (
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
      )}
      {isSM && (
        <div className="relative h-full w-full">
          <Swiper
            onSlideChange={(swiper) => {
              setCanPrevious(swiper.activeIndex !== 0)
              setCanNext(swiper.isEnd ? false : true)
            }}
            modules={[Grid, Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            grid={{
              fill: 'row',
              rows: 2,
            }}
            spaceBetween={10}
            slidesPerGroup={2}
            pagination={{
              el: '.swiper-custom-pagination-mobile',
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                return current + '/' + total
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom-mobile',
              nextEl: '.swiper-button-next-custom-mobile',
            }}
          >
            {Array.from({ length: 50 }, (_, index) => (
              <SwiperSlide style={styleMobile} key={index}>
                <div className="h-[250px] w-[180px]">
                  <Product />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="men_men flex h-10 w-full items-center justify-center">
            <div className="swiper-custom-pagination-mobile flex h-5 !w-full !translate-x-0 justify-center"></div>
          </div>
          <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center">
            <button className={`swiper-button-prev-custom-mobile ${sNavBG} ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
              <div className={`${sNavW}`}>
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            </button>
          </div>
          <div className="absolute right-0 top-0 z-10 flex h-full w-0 items-center">
            <button className={`swiper-button-next-custom-mobile ${sNavBG} ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
              <div className={`${sNavW}`}>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </button>
          </div>
        </div>
      )}
      {/* <div className="relative hidden h-full w-full sm:block">
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
              return '<span className="' + className + '">' + (index + 1) + '</span>'
            },
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
        >
          {Array.from({ length: 50 }, (_, index) => (
            <SwiperSlide style={style} key={index}>
              <div className="h-[320px] w-[180px]">
                <Product />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex h-10 w-full items-center justify-center ">
          <div className="swiper-custom-pagination men_men flex h-full !w-full !translate-x-0 justify-center"></div>
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
      </div> */}
    </>
  )
}
