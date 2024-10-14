import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Packages = () => {
    const pack = [
        {
            img:'/assets/images/about-images/04.jpg',
            name:'',
            price:'10,000',
            data:[
                "",
                "",
            ]
        },
        {
            img:'/assets/images/about-images/05.jpg',
            name:'',
            price:'13,000',
            data:[
                "",
                "",
            ]
        },
        {
            img:'/assets/images/about-images/06.jpg',
            name:'',
            price:'26,500',
            data:[
                "",
                "",
            ]
        },
        {
            img:'/assets/images/about-images/07.jpg',
            name:'',
            price:'46200',
            data:[
                "",
                "",
            ]
        },
    ]
    return (
        <div className='max-w-6xl mx-auto space-y-16 my-10'>
            {
                pack.map((ele, i) => (

                    <div key={i} className="h-[440px] overflow-hidden lg:max-w-none lg:flex  shadow-teal  bg-white rounded-lg shadow-lg">
                        <div className="w-[50%] flex items-center justify-center py-3">
                        <img className="w-[90%] h-full object-cover rounded-lg" src={ele.img} alt="" />
                        </div>
                        <div className="bg-white w-[60%] px-6 lg:flex-shrink-1">
                        <div className="flex items-center text-primary-main my-2">
                    <FaLocationDot className="mr-2 text-[20px]"></FaLocationDot>
                    <span className="text-[16px]"> Pachmarhi</span>
                    </div>
                            <h3 className="text-xl text-left leading-8 font-bold text-black sm:text-2xl sm:leading-9 dark:text-black">
                                Couple Friendly Budget package By  Suhana Tours and Travels
                                For 2 pax
                            </h3>
                            <div className="mt-4">
                                
                                <ul className="pl-0 lg:grid lg:gap-y-4 space-y-5 lg:space-y-0">
                                    <li className="flex items-start lg:col-span-1">
                                        {/* <div className="flex-shrink-0">
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
                                        </div> */}
                                        <p className="text-lg leading-5 text-black font-ttnorms text-left ">
                                        Pick Up from Pipariya to pachmarhi
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                        {/* <div className="flex-shrink-0">
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
                                        </div> */}
                                        <p className="text-lg leading-5 text-black font-ttnorms text-left ">
                                        Drop from pachmarhi to pipariya
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                        {/* <div className="flex-shrink-0">
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
                                        </div> */}
                                        <p className="text-lg leading-5 text-black font-ttnorms text-left">
                                        3N/2D stay in Budget Non Ac room
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                        {/* <div className="flex-shrink-0">
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
                                        </div> */}
                                        <p className="text-lg leading-5 text-black font-ttnorms text-left">
                                        Sightseeing-non entry/forest entry 
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1 pt-5">
                                        <p className="mt-4 text-lg leading-5 text-primary-main font-ttnorms text-left ">
                                        <span className="text-[30px] font-700">{ele.price} /</span> Total package cost
                                        </p>
                                    </li>
                                    
                                </ul>
                                <div className="lg:mt-2">
                                <div className="rounded-md shadow w-[40%]">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white text-primary-main  text-lg relative z-20 dark:bg-primary-main dark:text-white "
                                    >
                                        Book Packages
                                    </a>
                                </div>
                                <li className="flex items-start lg:col-span-1">
                                       <p className="mt-2 text-sm leading-5 text-black font-ttnorms text-left">
                                       Price may vary according to festivals public holidays seasons weekends . 
                                       </p>
                                   </li>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
  );
};

export default Packages;
