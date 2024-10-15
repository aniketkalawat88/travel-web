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
              className="flex md:justify-start text-gray-900 text-2xl max-md:justify-center"
            >
              Logo
            </Link>
            <p className="text-left text-gray-600 text-base font-medium max-md:text-center">
              Trusted in more than 100 countries &amp; 5 million customers. Have a
            </p>
            <div className="flex space-x-4 max-md:justify-evenly max-md:px-10">
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
          <div className='flex justify-between md:gap-10  lg:col-span-4'>
            <div className="block lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3">
              <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3 text-center lg:text-left">
                Quick Links
              </h4>
              <div className="flex md:gap-6 max-md:gap-2 lg:gap-12 max-lg:justify-center">
                <ul className="text-gray-600 transition-all max-md:text-[14px] duration-500 grid md:gap-4 max-md:gap-2 text-base font-medium">
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
              <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3 text-left lg:text-left">
                Packages
              </h4>
              <div className="flex md:gap-6 max-md:gap-2 lg:gap-12 max-lg:justify-center">
                <ul className="text-gray-600 max-md:text-[14px] transition-all duration-500 grid md:gap-4 max-md:gap-2 text-base font-medium max-md:text-left">
                  <li>
                    Couple friendly
                  </li>
                  <li>
                    Couple friendly standard
                  </li>
                  <li>
                    Family packages
                  </li>
                  <li>
                    Family packages standard
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block text-center lg:text-left lg:py-12 col-span-full min-[500px]:col-span-6 md:col-span-2 lg:col-span-3 lg:pl-5 max-md:mt-3 max-md:mb-4 ">
            <h4 className="text-lg text-primary-main font-bold md:mb-9 max-md:mb-3">Get In Touch</h4>
            <ul className="text-gray-600 transition-all duration-500 grid md:gap-6 max-md:gap-3 text-base font-medium">
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