/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";


const HomePackage = () => {
    const arr = [
      {
        img:'/assets/images/about-images/04.jpg',
        location:'',
        name:'',
        day:'5',
        price:'6.705.000'
      },
      {
        img:'/assets/images/about-images/05.jpg',
        location:'',
        name:'',
        day:'7',
        price:'5000'
      },
      {
        img:'/assets/images/about-images/06.jpg',
        location:'',
        name:'',
        day:'4',
        price:'2280'
      },
    ]
  return (
    <div className="max-w-7xl mx-auto xl:p-0 p-6">
      <div className="mt-10 flex justify-between items-center">
        <h2 className="md:text-3xl sm:text-2xl text-base font-bold tracking-tight text-gray-900 dark:text-black">
          Our Popular Tour Packages
        </h2>       
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  my-4">
            {
                arr.map((ele,i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <img
                    alt="trees and mountains"
                    src={ele.img}
                    className="rounded-lg w-full md:h-48 sm:h-36 h-28"
                />
                <div className="">
                    <div className="flex items-center text-primary-main my-2">
                      <FaLocationDot className="mr-2"></FaLocationDot>
                      <span className="text-xs font-medium"> Pachmarhi</span>
                    </div>
                    <h2 className="md:text-lg sm:text-base text-sm font-bold mb-2">
                    Couple Friendly Budget package By  Suhana Tours and Travels For 2 pax
                    </h2>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm "> 3N/2D stay in Budget Non Ac Room</p>
                    <p className="text-primary-main md:text-lg sm:text-base text-sm font-semibold mb-4">
                    Total package cost =  {ele.price}  
                    {/* <span className="text-gray-500 text-sm"> /</span> */}
                    </p>
                    <button className="bg-primary-main text-white md:py-2 py-1 md:px-4 md:rounded-lg rounded-sm w-full md:text-base sm:text-sm text-xs">
                    Book Now
                    </button>
                </div>
                </div>

                ))
            }
      </div>
      <div className="flex justify-center">
       <Link
        href={'/packages'}
          className="inline-block rounded text-primary-main md:text-base sm:text-sm text-xs font-medium md:leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit md:px-10 md:mt-6 p-2"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default HomePackage;
