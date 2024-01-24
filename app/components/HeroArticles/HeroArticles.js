"use client";
import React from 'react'
import Image from 'next/image';
import slider from '@/app/assets/banner/slider.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function HeroArticles() {
  
  return (
    <div className='mt-4'>
      <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-[450px]"
    >
      <SwiperSlide className='w-full'>
        <Image src={slider} className='w-full object-cover' alt='Slider 1' />
      </SwiperSlide>
      <SwiperSlide className='w-full'>
        <Image src={slider} className='w-full object-cover' alt='Slider 2' />
      </SwiperSlide>
      <SwiperSlide className='w-full'>
        <Image src={slider} className='w-full object-cover' alt='Slider 3' />
      </SwiperSlide>
      
    </Swiper>

    <style jsx global>
        {`
          .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            background-color: #fff;
            opacity: .7;
            margin: 0 5px;
            transition: background-color 0.3s ease;
            border-radius: 0;
          }

          .swiper-pagination-bullet-active {
            background-color: #000;
            opacity: 1; 
          }
        `}
      </style>

    </div>
  )
}
