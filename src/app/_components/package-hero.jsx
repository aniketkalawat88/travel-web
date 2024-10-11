/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PackageHero = ({name}) => {
  return (
    <div className="relative md:h-[30vw] sm:h-[60vw] h-[80vw] text-white overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/images/about-images/about-main.avif"
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <div className="font-medium text-center ">
        <p className="text-primary-main text-6xl ">{name}</p>
        <p className="text-xs sm:text-sm md:mb-6 max-w-2xl mx-auto mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum dolores dicta, eaque id expedita totam ex provident molestiae cupiditate hic reprehenderit, non vel quaerat mollitia odio iusto sunt quisquam.</p>
      </div>
    </div>
  </div>
  

  )
}

export default PackageHero