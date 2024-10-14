import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { CiFacebook } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-main/20 border-t-2 border-primary-main">
  <div className=" px-4 sm:px-6 lg:px-8 w-[90%] mx-auto ">
    <div className="grid md:grid-cols-12 gap-x-5 gap-y-8 ">
      <div className="col-span-full lg:col-span-3 relative text-gray-800 rounded-2xl gap-6 p-6 lg:w-72 h-72 flex flex-col justify-center it ">
        <Link
          href="/"
          className="flex lg:justify-start text-gray-900 text-2xl"
        >
          Logo
        </Link>
        <p className="text-left text-gray-600 text-base font-medium">
          Trusted in more than 100 countries &amp; 5 million customers. Have a
        </p>
        <div className="flex space-x-4 ">
          <Link
            href=""
            className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
          >
          <FaInstagram />
          </Link>
          <Link
            href=""
            className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
          >
          <FaYoutube />
          </Link>
          <Link
            href=""
            className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
          >
            <CiFacebook />
          </Link>
        </div>
      </div>
      <div className="block lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3">
        <h4 className="text-lg text-primary-main font-bold mb-9 text-center lg:text-left">
          Quick Links
        </h4>
        <div className="flex gap-6 lg:gap-12 max-lg:justify-center">
          <ul className="text-gray-600 transition-all duration-500 grid gap-4 text-base font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/packages">Packages</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="block lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3">
        <h4 className="text-lg text-primary-main font-bold mb-9 text-center lg:text-left">
         Packages
        </h4>
        <div className="flex gap-6 lg:gap-12 max-lg:justify-center">
          <ul className="text-gray-600 transition-all duration-500 grid gap-4 text-base font-medium">
            <li>
              couple friendly for 2 pax
            </li>
            <li>
              couple friendly standard for 2 pax
            </li>
            <li>
            Family packages for 4 pax
            </li>
            <li>
            Family packages standard for 4 pax
            </li>
          </ul>
        </div>
      </div>
      <div className="block text-center lg:text-left lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3 lg:pl-5">
        <h4 className="text-lg text-primary-main font-bold mb-9">Get In Touch</h4>
        <ul className="text-gray-600 transition-all duration-500 grid gap-6  text-base font-medium">
          <li>suhantoursandtravelspachmarhi@gmail.com</li>
          <li>+91 945 658 3256</li>
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