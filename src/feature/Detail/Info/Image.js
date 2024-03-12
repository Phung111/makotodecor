import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentImage } from 'service/baseSlice'
import { Img } from 'react-image'

export default function Image() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.baseSlice.data.product)
  const currentImage = useSelector((state) => state.baseSlice.data.currentImage)

  const colors = product.colors

  const handleSlideClick = (image) => {
    dispatch(setCurrentImage(image))
  }

  return (
    <>
      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-[550px]">
        {colors && <img src={require(`assets/images/sp/${currentImage}.png`)} className="aspect-square h-full w-full bg-gray object-contain" />}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          slidesPerView={5}
          spaceBetween={12}
          className="h-full w-full"
        >
          {colors &&
            colors.map((item, index) => (
              <SwiperSlide key={index} onClick={() => handleSlideClick(item.img)}>
                <Img src={require(`assets/images/sp/${item.img}.png`)} className="aspect-square w-[94px] cursor-pointer bg-gray object-contain hover:bg-black/20" lazy />
              </SwiperSlide>
            ))}
          <button className="swiper-button-prev" />
          <button className="swiper-button-next" />
        </Swiper>
      </div>
    </>
  )
}
