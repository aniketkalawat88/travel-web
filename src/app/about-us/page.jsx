import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="relative md:h-[40vw] sm:h-[60vw] h-[80vw] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/about-images/about-main.avif"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <div className="font-medium text-center ">
            <p className="text-primary-main text-[36px]">About Us</p>
          </div>
        </div>
      </div>
      <div className="w-full flex py-24 px-20">
        <div className="left md:w-[50%] flex flex-col items-center justify-center gap-2">
          <div className="top h-[48%]  bg-black">
            <img src="/assets/images/about-images/green.avif"
              alt="Background Image"
              className="object-cover object-center w-full h-full" />
          </div>
          <div className="down h-[48%] flex gap-2 items-center justify-center">
            <img src="/assets/images/about-images/green.avif"
              alt="Background Image"
              className="object-cover object-center w-[40%] h-full" />
            <img src="/assets/images/about-images/green.avif"
              alt="Background Image"
              className="object-cover object-center w-[40%] h-full" />
          </div>
        </div>
        <div className="right md:w-[50%] flex flex-col gap-4 items-start justify-center px-4">
          <h1 className="md:text-4xl font-[700]">What We Are Offering</h1>
          <p className="md:text-xl font-[400]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quas tempore reiciendis sint dolorem enim maxime dicta ipsa dignissimos ratione, dolores natus tenetur modi porro quaerat vero optio laudantium odit neque nulla? Iste veniam ea, et explicabo natus voluptatem facilis vel minima quisquam libero eligendi sed sint, ullam error suscipit. Ratione placeat provident minima sequi corporis ex delectus quae autem!</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-4 bg-[#e9e9e9d8]">
        <div className="experience flex flex-col items-center">
          <h1 className="text-[40px] font-[600]">10+</h1>
          <p className="text-[32px] font-[400]">Years Experience</p>
        </div>
        <div className="guide flex flex-col items-center">
          <h1 className="text-[40px] font-[600]">100+</h1>
          <p className="text-[32px] font-[400]">Tour Guide</p>
        </div>
        <div className="connect flex flex-col items-center">
          <h1 className="text-[40px] font-[600]">500+</h1>
          <p className="text-[32px] font-[400]">Traveler Connect</p>
        </div>
      </div>
      <div className="gallery h-[620px] py-3">
        <div className="line1 h-[32%] flex gap-2 py-1">
          <div className="photo1 h-full w-[22%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1669689974082-f2b3c9f36abc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[30%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1507513319174-e556268bb244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[23%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </div>
        <div className="line2 h-[32%] flex gap-2 py-1">
          <div className="photo1 h-full w-[28%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="https://plus.unsplash.com/premium_photo-1697217512519-88ab7504aa1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[20%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[28%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1535961652354-923cb08225a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </div>
        <div className="line3 h-[32%] flex gap-2 py-1">
          <div className="photo1 h-full w-[20%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[35%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[25%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="photo1 h-full w-[30%]">
            <img className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>
        

      </div>

      <div className="reviews">
        <h1 className="md:text-4xl font-[700] ml-20">What our clients say about us</h1>
        <p className="md:text-xl font-[400] ml-20 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex gap-2 items-center justify-center my-8">
          <div className="box1 h-[300px] w-[400px] bg-black px-4 py-4">
            <h1 className="text-2xl text-white">John Doe</h1>
            <p className="text-sm text-[#e9e9e98a]">Bhopal, MP</p>
            <p className="text-lg mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maiores repellat eos quia aperiam soluta distinctio minima suscipit ipsum architecto?</p>
          </div>
          <div className="box1 h-[300px] w-[400px] bg-black px-4 py-4">
            <h1 className="text-2xl text-white">John Doe</h1>
            <p className="text-sm text-[#e9e9e98a]">Mumbai, MH</p>
            <p className="text-lg mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maiores repellat eos quia aperiam soluta distinctio minima suscipit ipsum architecto?</p>
          </div>
          <div className="box1 h-[300px] w-[400px] bg-black px-4 py-4">
            <h1 className="text-2xl text-white">John Doe</h1>
            <p className="text-sm text-[#e9e9e98a]">Surat, Gujarat</p>
            <p className="text-lg mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maiores repellat eos quia aperiam soluta distinctio minima suscipit ipsum architecto?</p>
          </div>

          
        </div>
      </div>

    </>
  )
}

export default AboutUs