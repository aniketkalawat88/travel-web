"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import PhoneNavbarDrawer from './phone-navbar';

const Navbar = () => {
  const path = usePathname();
  const arr = [
    {
      name:'Home',
      link:'/'
    },
    {
      name:'Packages',
      link:'/packages'
    },
    {
      name:'About Us',
      link:'/about-us'
    },
    {
      name:'Contact Us',
      link:'/contact-us'
    },
  ]
  return (
    <nav className="bg-white max-md:h-[50px] absolute z-20 w-full">
  <div className="md:w-[85%]  flex flex-wrap items-center justify-between mx-auto md:p-4 max-md:py-1 max-md:px-4">
    <Link
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="/assets/images/about-images/logo.png"
        className="h-10 md:scale-[3] scale-150"
        alt="Flowbite Logo"
      />
    
    </Link>
     <PhoneNavbarDrawer />
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      {
        arr.map((ele,i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-main md:p-0 md:text-[18px] md:dark:hover:text-primary-main dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${path === ele.link ? "text-primary-main" : "dark:text-primary-main/50"}`}
          >
            {ele.name}
          </Link>
        </li>

        ))
      }
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar   