/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
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
    <nav className="bg-white border-gray-200 dark:bg-secondary-main">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      {/* <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      /> */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary-main">
        Logo
      </span>
    </Link>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
     <IoMenuSharp />
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-secondary-main dark:border-gray-700">
      {
        arr.map((ele,i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-main md:p-0 dark:text-white md:dark:hover:text-primary-main dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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