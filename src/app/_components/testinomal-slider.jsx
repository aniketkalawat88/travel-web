"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { londrinasketch } from "../font";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function HeroSection() {
  const rev = [
    {
      name:'Rajesh, Cafe Owner.',
      img:'01.jpg',
      data:'Love how easy it is to update our menu! Customers in Mumbai are loving the digital experience. Thanks, Smart Digital QR Menu!'
    },
    {
      name:' Anjali, Restaurant Manager.',
      img:'03.jpg',
      data:'Switched to Smart Digital QR Menu in Pune and it’s been a game-changer! No more reprinting menus. Customers are impressed!'
    },
    {
      name:'Ravi, Bistro Owner.',
      img:'04.jpg',
      data:'We went digital in Bangalore with Smart Digital QR Menu. The real-time updates are fantastic. Our customers can’t stop talking about it!'
    },
    {
      name:'Pooja, Cafe Manager.',
      img:'06.jpg',
      data:'Smart Digital QR Menu made life so much easier in our Delhi cafe. Quick updates and zero hassle. Highly recommend!'
    },
    {
      name:'Sandeep, Restaurant Owner',
      img:'11.jpg',
      data:'Hyderabad customers are loving the interactive digital menu. Smart Digital QR Menu is super efficient and easy to use. Great decision!'
    },
  ]
  return (
     <div id="review" className="relative w-full h-full max-w-7xl mx-auto md:py-10 py-6  xl:px-10 px-6 bg-[#FEFCFB]">
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div>
        <div>
            <h1 className={`xl:text-5xl md:text-3xl text-2xl font-bold max-md:text-center`}>Testimonial<span className="text-primary-main pt-2 text-4xl"><br />  </span></h1>
            <p className="text-[#666666] max-w-sm mt-6">Our Clients send us bunch of smilies with our services and we love them.</p>
            <div>
              <button className='HomeSlidePrev text-primaryMain absolute bottom-12 max-md:left-1/3 -translate-y-1/2 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowLeft /></button>
              <button className='HomeSlideNext text-primaryMain absolute bottom-12 max-md:left-1/2 -translate-y-1/2 md:left-28 left-20 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowRight /></button> 
            </div>
          </div>
        </div>
      <Swiper  
        AutoPlay={true}
        loop={true} 
        spaceBetween={40}  
        navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full shadow-[0px_8px_16px_2px_rgba(0,0,0,0.07)] h-64 rounded-xl"
      >
        {
          rev?.map((ele, i )=> (
        <SwiperSlide key={i} className="p-6  grid items-center h-full w-full">
          <div className="md:h-16 md:w-16 h-12 w-12 relative">
            <Image src={`/assets/images/about-images/${ele.img}`} alt="No Preview" fill className="object-cover rounded-full" />
          </div>
          <p className="text-[#666] md:text-base text-sm mt-4">“ {ele.data} ”</p>
          <p className="md:text-lg text-base font-medium md:mt-4 mt-2">{ele.name}</p>
          <p className="text-sm font-medium text-[#666666]"></p>
        </SwiperSlide>

          ))
        }
      </Swiper>

    </div>
    </div>
  );
}
