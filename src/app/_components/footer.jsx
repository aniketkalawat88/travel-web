import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/*Grid*/}
    <div className="md:py-16 sm:py-8 py-4 flex justify-between items-center flex-col gap-8 lg:flex-row">
      <Link href="#" className="flex justify-center text-white text-3xl">
       Logo
      </Link>
      <ul className="lg:text-lg md:text-base text-sm text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
     
        <li className="sm:my-0 my-2">
          <Link href="/" className="text-white hover:text-primary-main">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white hover:text-primary-main">
            Packages
          </Link>
        </li>
        <li className="sm:my-0 my-2">
          <Link href="/" className="text-white hover:text-primary-main">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white hover:text-primary-main">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="flex  space-x-4 sm:justify-center  ">
        <Link
          href=""
          className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-primary-main"
        >
          <FaInstagram className='text-white text-xl' />
        </Link>
        <Link
          href=""
          className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-primary-main"
        >
         <CiFacebook className='text-white text-xl' />
        </Link>
        <Link
          href=""
          className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-primary-main"
        >
         <FaYoutube className='text-white text-xl' />
        </Link>
      </div>
    </div>
    {/*Grid*/}
    <div className="py-7 border-t border-gray-700">
      <div className="flex items-center justify-center">
        <span className="text-gray-400 ">
          ©2024, All rights reserved.
        </span>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer