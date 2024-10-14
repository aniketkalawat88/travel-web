import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { CiFacebook } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-main/5">
  <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
    <div className="py-2 grid grid-cols-7 gap-x-5 gap-y-8 ">
      <div className="col-span-full lg:col-span-3 relative text-gray-800 rounded-2xl gap-12 p-6 lg:w-72 h-96 flex flex-col justify-center items-center">
        <Link
          href="/"
          className="flex justify-center lg:justify-start text-gray-900 text-2xl"
        >
          logo
        </Link>
        <p className="text-center text-gray-600 font-medium">
          Trusted in more than 100 countries &amp; 5 million customers. Have any
          query? contact us we are here for you.
        </p>
        <div className="flex  space-x-4 sm:justify-center">
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
      <div className="block lg:py-16 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-2">
        <h4 className="text-lg text-gray-900 font-bold mb-9 text-center lg:text-left">
          Quick Links
        </h4>
        <div className="flex gap-6 lg:gap-12 max-lg:justify-center">
          <ul className="text-gray-600 transition-all duration-500 grid gap-6 text-lg font-medium">
            <li>
              <a href="javascript:;">Home</a>
            </li>
            <li>
              <a href="javascript:;">Packages</a>
            </li>
            <li>
              <a href="javascript:;">About Us</a>
            </li>
            <li>
              <a href="javascript:;">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="block text-center lg:text-left lg:py-16 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-2 lg:pl-5">
        <h4 className="text-lg text-gray-900 font-bold mb-9">Get In Touch</h4>
        <ul className="text-gray-600 transition-all duration-500 grid gap-6  text-lg font-medium">
          <li>suhantoursandtravelspachmarhi@gmail.com</li>
          <li>+91 945 658 3256</li>
          <li>61-A, Elm street, Gujarat, India.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="py-4 bg-indigo-50">
    <div className="flex items-center justify-center">
      <span className="text-sm text-gray-800 ">
        Copyright@2024 All Right Reserved by{" "}
        <a href="/">IgrowMyBiz</a>
      </span>
    </div>
  </div>
</footer>


  )
}

export default Footer