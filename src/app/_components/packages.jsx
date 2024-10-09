import React from 'react'

const Packages = () => {
    const pack = [
        "",
        "",
        ""
    ]
  return (
    <div className='max-w-7xl mx-auto space-y-6 my-6'>
        {
            pack.map((ele,i) => (
            <div key={i} className="rounded-lg overflow-hidden lg:max-w-none lg:flex  shadow-teal border-4 border-primary-main">
                <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12 dark:bg-gray-900">
                <h3 className="text-2xl text-left leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100">
                    Packages
                </h3>
                <p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg dark:text-gray-400">
                    {`The Team Packages grants your entire As a subscriber to our website,
                    you'll have access to a wide range of exclusive benefits and perks.`}
                </p>
                <div className="mt-8">
                    <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-teal-600 dark:text-primary-main/90 dark:bg-transparent">
                        {`What's included`}
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-700" />
                    </div>
                    <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <svg
                            className="h-5 w-5 text-primary-main dark:text-primary-main/90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                        Access to premium content and exclusive articles
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <svg
                            className="h-5 w-5 text-primary-main dark:text-primary-main/90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                        Free Shipping on select products
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <svg
                            className="h-5 w-5 text-primary-main dark:text-primary-main/90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                        Early access to upcoming events and promotions
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                        <svg
                            className="h-5 w-5 text-primary-main dark:text-primary-main/90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                        Dedicated customer support
                        </p>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 dark:bg-gray-900">
                <p className="text-xl leading-6 font-medium text-gray-900 lg:max-w-xs lg:mx-auto mb-0 lg:mb-6 dark:text-gray-100">
                    A single payment for your entire team
                </p>
                <div className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-gray-100">
                    <span className="font-brown">$19</span>
                    <span className="text-xl leading-7 font-medium text-gray-500 font-ttnorms">
                    /month
                    </span>
                </div>
                <div className="lg:mt-6">
                    <div className="rounded-md shadow">
                    <a
                        href="#"
                        className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white hover:bg-primary-main hover:shadow-teal-hover text-primary-main hover:text-white text-lg relative z-20 dark:bg-primary-main dark:text-white dark:hover:bg-teal-500 dark:hover:text-white"
                    >
                        Book Packages
                    </a>
                    </div>
                </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Packages