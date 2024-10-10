/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const HomeAbout = () => {
  return (
    <div className=''>
        {/* <section className="bg-gray-100">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="">
        <h2 className="text-3xl font-extrabold text-primary-main sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros
          at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis
          elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
          Donec sagittis velit et magna euismod, vel aliquet nulla malesuada.
          Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
        </p>
        <div className="mt-8">
        <button
              type="button"
              className="inline-block rounded bg-primary-main  font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-primary-main w-fit p-2"
            >
             View More
            </button>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
          alt="About Us Image"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section> */}
<div className="relative">
        <div className="md:h-[18.5vw] w-full bg-primary-main/50 absolute top-36 -z-10" />
        <div className="max-w-7xl mx-auto xl:p-0 p-6">
            <div className="flex flex-col-reverse lg:flex-row justify-between md:gap-8 sm:gap-6 gap-4 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:p-6 p-4 md:my-14 sm:my-6 my-4 rounded-md bg-white">
                <div className="w-full  flex flex-col justify-center">
                {/* <Headcomp name={'About Us'} /> */}
                <h1 className="md:text-xl text-lg lg:text-3xl font-bold leading-9 text-gray-800 dark:text-heading-main md:pb-4 pb-2">
                 <span className="text-black">About Us</span>
                </h1>
                <p className={`font-normal md:text-base text-sm leading-6 text-secondary-main dark:text-secondary-main`}>
                {` Our in-house team of experts is dedicated to transforming your hotel business. With a strong background in Marketing and Advertising, and experience with international clients from the USA & UAE, we're ready to deliver exactly what Indian Hotels need to dominate the market. Unlike others, we customize packages and deals tailored to your property, ensuring it reaches new heights. Our committed support team handles bookings and calls seamlessly, while our talented design team creates stunning visuals and videos to showcase your property in the best light.`}
                </p>
              <button
                  type="button"
                  className="inline-block rounded text-primary-main  font-medium leading-normal bg-white border-primary-main border-2 hover:shadow-md hover:bg-primary-main hover:text-white w-fit px-10 mt-6 p-2"
                >
                  View More
                </button>
                </div>
                <div className="md:w-[80%] relative md:h-[22vw] h-[50vw]">
                <Image src="/assets/images/about-images/about-main.avif" alt="A group of People" fill className="object-cover rounded-md" />
                </div>
            </div>
            {/* <div className="max-md:mt-10">
                <Headcomp name={'Meet Our Team'} />
                <TeamSection />
            </div> */}
        </div>

    </div>

    </div>
  )
}

export default HomeAbout