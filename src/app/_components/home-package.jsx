/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLocationDot } from "react-icons/fa6";


const HomePackage = () => {
    const arr = ["","",""]
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-black">
          Our Popular Tour Packages
        </h2>
        {/* <p className="mb-5 font-light text-secondary-main sm:text-xl dark:text-gray-400">
                Here at Landwind we focus on markets where technology, innovation, and
                capital can unlock long-term value and drive economic growth.
            </p> */}
       
      </div>
      <div className="grid grid-cols-3 my-4">
        {/* <div className="p-2 w-full">
            <div className="h-full p-6 rounded-lg border-2 bg-white flex flex-col relative overflow-hidden">
                <span className="text-sm tracking-widest title-font mb-1 font-medium">
                BUSINESS
                </span>
                <span className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$14.99</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/Year</span>
                </span>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Access to Free &amp; Paid snippets
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Unlimited Snippets download
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Online Editor
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Unlimted Fork Snippets
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Ads Free
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                All Tools
                </p>
                <a
                className="flex items-center mt-auto text-white bg-primary-main border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary-main rounded"
                href="#"
                >
                Upgrade Now
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </a>
            </div>
            </div>
            <div className="p-2 w-full">
                <div className="h-full p-6 rounded-lg border-2 bg-white border-primary-main flex flex-col relative overflow-hidden">
                    <span className="bg-primary-main text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                    </span>
                    <span className="text-sm tracking-widest title-font mb-1 font-medium">
                    PRO
                    </span>
                    <span className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$99</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">
                        / Lifetime
                    </span>
                    </span>
                    <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </span>
                    Access to Free &amp; Paid snippets
                    </p>
                    <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </span>
                    Unlimited Snippets download
                    </p>
                    <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </span>
                    Online Editor
                    </p>
                    <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </span>
                    Unlimted Fork Snippets
                    </p>
                    <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </span>
                    Ads Free
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </span>
                    All Tools
                    </p>
                    <a
                    className="flex items-center mt-auto text-white bg-primary-main border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary-main rounded"
                    href="#"
                    >
                    Upgrade Now
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    </a>
                </div>
            </div>
            <div className="p-2 w-full">
            <div className="h-full p-6 rounded-lg border-2 bg-white flex flex-col relative overflow-hidden">
                <span className="text-sm tracking-widest title-font mb-1 font-medium">
                BUSINESS
                </span>
                <span className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$14.99</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/Year</span>
                </span>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Access to Free &amp; Paid snippets
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Unlimited Snippets download
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Online Editor
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Unlimted Fork Snippets
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                Ads Free
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 6L9 17l-5-5" />
                    </svg>
                </span>
                All Tools
                </p>
                <a
                className="flex items-center mt-auto text-white bg-primary-main border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary-main rounded"
                href="#"
                >
                Upgrade Now
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </a>
            </div>
            </div> */}
            {
                arr.map((ele,i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <img
                    alt="A scenic view of traditional huts in a lush green valley surrounded by trees and mountains"
                    src="https://storage.googleapis.com/a1aa/image/sEex209yYJQWHSU3HnAyCXLWYP0DxvQeXhNYKD7ufHhMeZVOB.jpg"
                    className="rounded-lg w-full h-48"
                />
                <div className="">
                    <div className="flex items-center text-[#8F8F8F;] my-2">
                    <FaLocationDot className="mr-2"></FaLocationDot>
                    <span className="text-xs"> Pachmarhi</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2">
                    Flores Road Trip 3D2N
                    </h2>
                    <p className="text-gray-500 mb-4">3 Days</p>
                    <p className="text-primary-main text-lg font-semibold mb-4">
                    Rs 6.705.000
                    <span className="text-gray-500 text-sm">/orang</span>
                    </p>
                    <button className="bg-primary-main text-white py-2 px-4 rounded-lg w-full">
                    Book Now
                    </button>
                </div>
                </div>

                ))
            }
      </div>
      <div className="flex justify-center">
       <button
          type="button"
          className="inline-block rounded text-primary-main  font-medium leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit px-10 mt-6 p-2"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default HomePackage;
