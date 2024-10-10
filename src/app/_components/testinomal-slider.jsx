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
      img:'01.png',
      data:'Love how easy it is to update our menu! Customers in Mumbai are loving the digital experience. Thanks, Smart Digital QR Menu!'
    },
    {
      name:' Anjali, Restaurant Manager.',
      img:'03.png',
      data:'Switched to Smart Digital QR Menu in Pune and it’s been a game-changer! No more reprinting menus. Customers are impressed!'
    },
    {
      name:'Ravi, Bistro Owner.',
      img:'04.png',
      data:'We went digital in Bangalore with Smart Digital QR Menu. The real-time updates are fantastic. Our customers can’t stop talking about it!'
    },
    {
      name:'Pooja, Cafe Manager.',
      img:'06.png',
      data:'Smart Digital QR Menu made life so much easier in our Delhi cafe. Quick updates and zero hassle. Highly recommend!'
    },
    {
      name:'Sandeep, Restaurant Owner',
      img:'11.png',
      data:'Hyderabad customers are loving the interactive digital menu. Smart Digital QR Menu is super efficient and easy to use. Great decision!'
    },
  ]
  return (
    <div className="max-w-7xl mx-auto my-12">
     {/* <h1 className="md:text-4xl font-[700] text-black">What our clients say</h1>
     <p className="md:text-xl font-[400] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
     <div id="review" className="relative w-full h-full max-w-7xl mx-auto md:py-10 py-6  xl:px-10 px-6 bg-[#FEFCFB]">
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div>
        <div>
            <h1 className={`xl:text-5xl md:text-3xl text-2xl font-bold max-md:text-center`}>What people say<span className="text-primary-main"><br /> about us. </span></h1>
            <p className="text-[#666666] max-w-sm mt-6">Our Clients send us bunch of smilies with our services and we love them.</p>
            <div>
              <button className='HomeSlidePrev text-primaryMain absolute bottom-2 max-md:left-1/3 -translate-y-1/2 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowLeft /></button>
              <button className='HomeSlideNext text-primaryMain absolute bottom-2 max-md:left-1/2 -translate-y-1/2 md:left-28 left-20 z-10 hover:bg-primary-main hover:text-white text-xl p-2 rounded-full border border-primary-main text-primary-main'><FaArrowRight /></button> 
            </div>
          </div>
        </div>
      <Swiper
        // pagination={{
        //     clickable: true,
        //   }}   
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
            <Image src={`/Home-Images/logo/${ele.img}`} alt="No Preview" fill className="object-cover rounded-full" />
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
      {/* <Swiper
        spaceBetween={30}
        loop={true}
        autoplay
        navigation={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {arr.map((ele, i) => (
          <SwiperSlide key={i}>
            <div className="box1 h-[300px] w-full bg-secondary-main px-4 py-4 rounded-md">
              <h1 className="text-2xl text-white">John Doe</h1>
              <p className="text-sm text-[#e9e9e98a]">Bhopal, MP</p>
              <p className="text-lg mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt maiores repellat eos quia aperiam soluta distinctio
                minima suscipit ipsum architecto?
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

// import React from 'react'

// export default function TestinomalSlider() {
//   return (
//     <div className="reviews max-w-7xl mx-auto">
//         <h1 className="md:text-4xl font-[700] text-primary-main">What our clients say about us</h1>
//         <p className="md:text-xl font-[400] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <div className="grid grid-cols-3 gap-8 my-6 ">
//   <div className="box1 h-[300px] w-full bg-secondary-main px-4 py-4 rounded-md">
//     <h1 className="text-2xl text-white">John Doe</h1>
//     <p className="text-sm text-[#e9e9e98a]">Bhopal, MP</p>
//     <p className="text-lg mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maiores repellat eos quia aperiam soluta distinctio minima suscipit ipsum architecto?</p>
//   </div>
//           <div className="box1 h-[300px] w-full bg-secondary-main px-4 py-4 rounded-md">
//             <h1 className="text-2xl text-white">John Doe</h1>
//             <p className="text-sm text-[#e9e9e98a]">Mumbai, MH</p>
//             <p className="text-lg mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maiores repellat eos quia aperiam soluta distinctio minima suscipit ipsum architecto?</p>
//           </div>
//           <div className="box1 h-[300px] w-full bg-secondary-main px-4 py-4 rounded-md">
//             <h1 className="text-2xl text-white">John Doe</h1>
//             <p className="text-sm text-[#e9e9e98a]">Surat, Gujarat</p>
//             <p className="text-lg mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maiores repellat eos quia aperiam soluta distinctio minima suscipit ipsum architecto?</p>
//           </div>

//         </div>
//       </div>
//   )
// }
