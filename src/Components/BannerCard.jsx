import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import "./BannerCard.css"
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.jpg"
import book3 from "../assets/book3.jpeg"
import book4 from "../assets/book4.jpg"
import book5 from "../assets/book5.jpg"
import book6 from "../assets/book6.jpg"
import book7 from "../assets/book7.jpg"
import book8 from "../assets/book8.jpg"
import book9 from "../assets/book9.jpg"



export default function BannerCard() {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={book1} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book2} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book3} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book4} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book5} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book6} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book7} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book8} className='image'/></SwiperSlide>
        <SwiperSlide><img src={book9} className='image'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

