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
        <p className="text-primary-main text-[36px]">{name}</p>
      </div>
    </div>
  </div>
  

  )
}

export default PackageHero