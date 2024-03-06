import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Image() {
  const product = useSelector((state) => state.baseSlice.data.product)
  const imgs = product.imgs

  const [currentImage, setCurrentImage] = useState(imgs[0])

  const handleSlideClick = (image) => {
    setCurrentImage(image)
  }

  return (
    <>
      <div className="flex w-full flex-col gap-3 sm:w-[820px]">
        {imgs && <img src={require(`assets/images/sp/${currentImage}.png`)} className="aspect-square w-full bg-gray object-contain" />}
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
          {imgs &&
            imgs.map((item, index) => (
              <SwiperSlide key={index} onClick={() => handleSlideClick(item)}>
                <img src={require(`assets/images/sp/${item}.png`)} className="aspect-square w-[94px] cursor-pointer bg-gray object-contain hover:bg-black/20" />
              </SwiperSlide>
            ))}
          <button className="swiper-button-prev" />
          <button className="swiper-button-next" />
        </Swiper>
      </div>
    </>
  )
}
