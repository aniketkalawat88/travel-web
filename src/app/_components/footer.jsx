/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { CiFacebook } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-main/20 border-t-2 border-primary-main">
      <div className="sm:px-6 md:px-8 w-[90%] mx-auto ">
        <div className="grid md:grid-cols-12 md:justify-items-center md:gap-x-5 md:gap-y-8">
          <div className="col-span-full lg:col-span-4 relative text-gray-800  md:gap-6 max-md:gap-3 md:p-6 lg:w-72 md:h-72 max-md:py-6 flex flex-col justify-center ">
          <Link
              href="/"
              className="flex items-center justify-center space-x-3 rtl:space-x-reverse md:pr-32"
            >
              <img
                src="/assets/images/about-images/logo.png"
                className="h-10 scale-[3]"
                alt="Flowbite Logo"
              />
            
            </Link>
            <p className="text-left text-gray-600 md:text-[20px] font-medium max-md:text-center">
              Discover the magic of Pachmarhi
            </p>
            <div className="flex space-x-4 max-md:justify-evenly max-md:px-10">
              <Link
                href="https://www.instagram.com"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.youtube.com"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.facebook.com"
                target='_blank'  
                className="w-9 h-9 rounded-full hover:text-white bg-white hover:bg-primary-main text-primary-main flex justify-center items-center hover:shadow-md"
              >
                <CiFacebook />
              </Link>
            </div>
          </div>
          <div className='flex justify-between md:gap-20 lg:col-span-4'>
            <div className="block lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3">
              <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3 text-center lg:text-left">
                Quick Links
              </h4>
              <div className="flex md:gap-6 max-md:gap-2 lg:gap-12 max-lg:justify-center">
                <ul className="text-gray-600 transition-all max-md:text-[14px] duration-500 grid md:gap-4 max-md:gap-2 text-base font-medium">
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/">Home</Link>
                  </li>
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link className='hover:text-primary-main transition-transform' href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3">
              <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3 text-left lg:text-left">
                Packages
              </h4>
              <div className="flex md:gap-6 max-md:gap-2 lg:gap-12 max-lg:justify-center">
                <ul className="text-gray-600 max-md:text-[14px] transition-all duration-500 grid md:gap-4 max-md:gap-2 text-base font-medium max-md:text-left">
                  <Link className='hover:text-primary-main transition-transform' href={'/packages#couple'}>
                    Couple friendly
                  </Link>
                  <Link className='hover:text-primary-main transition-transform' href={'/packages#couplestandard'}>
                    Couple friendly  standard
                  </Link>
                  <Link className='hover:text-primary-main transition-transform' href={'/packages#family'}>
                    Family packages
                  </Link>
                  <Link className='hover:text-primary-main transition-transform' href={'/packages#familystandard'}>
                    Family packages standard
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="block text-center lg:text-left lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3 lg:pl-5 max-md:mt-3 md:ml-4 max-md:mb-4 ">
            <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3">Get In Touch</h4>
            <ul className="text-gray-600 transition-all duration-500 grid md:gap-6 max-md:gap-3 text-base font-medium">
              <Link href={"mailto:suhantoursandtravelspachmarhi@gmail.com"} className='hover:text-primary-main transition-transform'>suhantoursandtravelspachmarhi@gmail.com</Link>
              <li><Link href={'tel:+919425639221'} className='hover:text-primary-main transition-transform' >+91 942 563 9221</Link> / <Link href={'tel:+919456583256'} className='hover:text-primary-main transition-transform' >+91 945 658 3256</Link></li>
              <li>Patel road ward no 02, Beside Khalsa Hotel, Pachmarhi, Madhya Pradesh</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 bg-primary-main">
        <div className="flex items-center justify-center">
          <span className="text-sm text-white ">
            Copyright@2024 All Right Reserved by{" "}
            <a href="/">IgrowMyBiz</a> 
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer