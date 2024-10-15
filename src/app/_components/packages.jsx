"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modelSlice/modelSlice';

const Packages = () => {
    const dispatch = useDispatch();
    const handleOpen = () => (
        dispatch(openModal())
    )
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
        <div className='max-w-6xl mx-auto md:space-y-16 max-md:space-y-4 md:my-10 max-md:my-8'>
            {
                pack.map((ele, i) => (

                    <div key={i} className="md:h-[440px] overflow-hidden lg:max-w-none lg:flex shadow-teal bg-white rounded-lg shadow-lg max-md:py-4">
                        <div className="md:w-[50%] max-md:w-[100%] flex max-md:flex-col items-center justify-center py-3">
                        <img className="md:w-[90%] max-md:w-[80%] h-full object-cover rounded-lg" src={ele.img} alt="" />
                        </div>
                        <div className="bg-white md:w-[60%] md:px-6 lg:flex-shrink-1 max-md:px-8">
                        <div className="flex items-center text-primary-main my-2">
                    <FaLocationDot className="mr-2 md:text-[20px] max-md:text-[10px]"></FaLocationDot>
                    <span className="md:text-[16px] max-md:text-[12px]"> Pachmarhi</span>
                    </div>
                            <h3 className="md:text-xl max-md:text-md text-left leading-8 font-bold text-black sm:text-2xl sm:leading-9 max-md:leading-5 dark:text-black">
                                Couple Friendly Budget package By  Suhana Tours and Travels
                                For 2 pax
                            </h3>
                            <div className="md:mt-4 max-md:mt-2">
                                
                                <ul className="pl-0 lg:grid lg:gap-y-4 max-md:gap-y-2 md:space-y-5 lg:space-y-0 max-md:space-y-2">
                                    <li className="flex items-start lg:col-span-1">
                            
                                        <p className="md:text-lg max-md:text-sm leading-5 text-black font-ttnorms text-left ">
                                        Pick Up from Pipariya to pachmarhi
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                     
                                        <p className="md:text-lg max-md:text-sm leading-5 text-black font-ttnorms text-left ">
                                        Drop from pachmarhi to pipariya
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                                 
                                        <p className="md:text-lg max-md:text-sm leading-5 text-black font-ttnorms text-left">
                                        3N/2D stay in Budget Non Ac room
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1">
                           
                                        <p className="md:text-lg max-md:text-sm leading-5 text-black font-ttnorms text-left">
                                        Sightseeing-non entry/forest entry 
                                        </p>
                                    </li>
                                    <li className="flex items-start lg:col-span-1 md:pt-5 max-md:pt-1">
                                        <p className="mt-4 md:text-lg max-md:text-lg leading-5 text-primary-main font-ttnorms text-left ">
                                        <span className="md:text-[30px] max-md:text-[20px] font-700">{ele.price} /</span> Total package cost
                                        </p>
                                    </li>
                                    
                                </ul>
                                <div className="lg:mt-2 max-md:mt-2 grid grid-cols-2 w-full gap-4">
                                        <button onClick={handleOpen}
                                            className="flex items-center justify-center md:px-5 max-md:px-3 md:py-3 max-md:py-2  leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white text-primary-main  md:text-lg max-md:text-sm relative dark:bg-primary-main dark:text-white "
                                        >
                                            Book Packages
                                        </button>
                                    <div className="rounded-md shadow">
                                        <Link
                                            href="tel:+919456583256"
                                            className="flex items-center justify-center md:px-5 max-md:px-3 md:py-3 max-md:py-2  leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white text-primary-main  md:text-lg max-md:text-sm relative dark:text-primary-main"
                                        >
                                            Call Now
                                        </Link>
                                    </div>
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
