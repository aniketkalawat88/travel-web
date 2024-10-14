/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PackageHero = ({name}) => {
  return (
    <div className="relative md:h-[30vw] sm:h-[60vw] h-[80vw] text-white overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/images/about-images/morskie-oko-tatry.jpg"
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      {/* <div className="absolute inset-0 bg-primary-main/40" /> */}
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-md:px-4">
      <div className="font-medium text-center ">
        <p className="text-white md:text-6xl max-md:text-3xl">{name}</p>
        <p className=" sm:text-sm max-md:text-[12px] md:mb-6 max-w-2xl mx-auto md:mt-8 max-md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum dolores dicta, eaque id expedita totam ex provident molestiae cupiditate hic reprehenderit, non vel quaerat mollitia odio iusto sunt quisquam.</p>
        
      </div>
    </div>
  </div>
  

  )
}

export default PackageHero