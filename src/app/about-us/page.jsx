/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import TestinomalSlider from '../_components/testinomal-slider'
import HomeAbout from '../_components/home-about'
import PackageHero from '../_components/package-hero'

const AboutUs = () => {
  return (
    <>
      <PackageHero name={"About Us"} />
      <HomeAbout />
      <div className="flex items-center justify-evenly md:py-4 text-primary-main">
        <div className="experience flex flex-col items-center">
          <h1 className="md:text-[40px] md:text-2xl max-md:text-lg font-[600]">10+</h1>
          <p className="md:text-[32px] sm:text-2xl md:text-xl max-md:text-sm font-[400]">Years Experience</p>
        </div>
        <div className="guide flex flex-col items-center">
          <h1 className="md:text-[40px] md:text-2xl max-md:text-lg font-[600]">100+</h1>
          <p className="md:text-[32px] sm:text-2xl md:text-xl max-md:text-sm font-[400]">Tour Guide</p>
        </div>
        <div className="connect flex flex-col items-center">
          <h1 className="md:text-[40px] md:text-2xl max-md:text-lg font-[600]">500+</h1>
          <p className="md:text-[32px] sm:text-2xl md:text-xl max-md:text-sm font-[400]">Traveler Connect</p>
        </div>
      </div>
      <div className="gallery md:h-[620px] h-96 py-6">
        <div className="line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          <div className="photo1 h-full w-[22%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1669689974082-f2b3c9f36abc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[30%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1507513319174-e556268bb244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[23%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </div>
        <div className="line2 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          <div className="photo1 h-full w-[28%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1697217512519-88ab7504aa1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[20%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[28%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1535961652354-923cb08225a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </div>
        <div className="line3 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          <div className="photo1 h-full w-[20%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[35%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[30%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>
        

      </div>


    </>
  )
}

export default AboutUs