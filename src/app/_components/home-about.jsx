/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeAbout = () => {
  return (
    <div className=''>
<div className="relative">
        <div className="md:h-[18.5vw] md:w-full bg-primary-main/50 absolute top-36 -z-10" />
        <div className="max-w-6xl mx-auto xl:p-0 md:p-6  max-md:px-6">
            <div className="flex flex-col-reverse lg:flex-row justify-between md:gap-8 sm:gap-6 gap-4 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:p-6 p-4 md:my-14 sm:my-6 my-4 rounded-md bg-white">
                <div className="w-full flex flex-col justify-center">
                <h1 className="md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900 dark:text-black leading-9 dark:text-heading-main md:pb-4 max-md:pb-2 max-md:text-center">
                 <span className="text-black">About Us</span>
                </h1>
                <p className={`font-normal md:text-base max-md:text-[14px] md:leading-6 text-secondary-main dark:text-[#666666] max-md:text-justify`}>
                {`At Suhana Tours and Travels, we specialize in personalized tours that showcase the natural beauty and hidden treasures of Pachmarhi. As locals with deep knowledge of the area, we are passionate about promoting sustainable travel. Our tours are designed to immerse visitors in the rich culture, stunning landscapes, and unique experiences that Pachmarhi has to offer. Whether it’s exploring serene waterfalls, ancient caves, or breathtaking viewpoints, we ensure that every traveler enjoys an authentic and unforgettable journey. Discover Pachmarhi’s charm with us and create lasting memories in this beautiful hill station.`}
                </p>
              {/* <Link
                  href={'/about-us'}
                  className=" rounded text-primary-main  font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-44 flex justify-center px-10 mt-6 md:p-2 p-1 md:text-base sm:text-sm text-xs max-md:mx-auto"
                >
                  View More
                </Link> */}
                </div>
                <div className="md:w-[80%] relative md:h-[22vw] h-[50vw]">
                <Image src="/assets/images/about-images/21.jpg" alt="A group of People" fill className="object-cover rounded-md" />
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default HomeAbout