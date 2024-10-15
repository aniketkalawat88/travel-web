/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import TestinomalSlider from '../_components/testinomal-slider'
import HomeAbout from '../_components/home-about'
import PackageHero from '../_components/package-hero'

const AboutUs = () => {
  return (
    <>
      <PackageHero name={"About Us"} img={"/assets/images/about-images/12.jpg"}/>
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
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/12.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/13.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[30%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/14.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[23%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/15.jpg" alt="" />
          </div>
        </div>
        <div className="line2 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          <div className="photo1 h-full w-[28%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/07.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/17.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[20%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/18.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[28%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/19.jpg" alt="" />
          </div>
        </div>
        <div className="line3 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          <div className="photo1 h-full w-[20%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/20.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[35%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/21.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/05.jpg" alt="" />
          </div>
          <div className="photo1 h-full w-[30%]">
            <img className="object-cover object-center w-full h-full" src="assets/images/about-images/06.jpg" alt="" />
          </div>
        </div>
        

      </div>


    </>
  )
}

export default AboutUs