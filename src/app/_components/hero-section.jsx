import React from 'react'
import { londrinasketch, montserrat } from '../font'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div
  className="bg-cover bg-center md:h-[35vw] sm:h-[45vw]" 
  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520684450297-e4ee30a0cea8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
>
  <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
    <div className="text-center text-white max-w-3xl mx-auto ">
      <p className={`text-xs sm:text-base tracking-widest montserrat.className`}>
        COME TO EXPERIENCE IN TURIO
      </p>
      <h1 className="xl:text-[5rem] lg:text-5xl sm:text-3xl text-2xl font-bold text-primary-main uppercase">Grand Canyon</h1>
      <h2 className={`xl:text-[5rem] lg:text-5xl sm:text-3xl text-2xl font-bold mb-4 uppercase ${londrinasketch.className}`}>
        {`Go explore`}
      </h2>
      <p className="text-sm sm:text-sm mb-6 max-w-2xl mx-auto ">
        Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis.
        feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna
        aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo
        quis.
      </p>
      <Link
        href="#"
        className="bg-primary-main text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm text-sm hover:bg-primary-main transition duration-300 font-medium"
      >
        Explore Now
      </Link>
    </div>
  </div>
</div>

  )
}

export default HeroSection