"use client"

import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";

const HomeContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = () => {
        console.log(formData); // Logs the form data when the button is clicked
      };
    
  return (
    <div className="px-2 md:px-4 my-4 max-w-6xl flex mx-auto shadow shadow-primary-main bg-primary-main/10 rounded-lg" >
      <section className="md:p-6 sm:p-4 p-2 w-[60%]">
        <div className="flex justify-between">
          <div className=" md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-2 md:text-3xl sm:text-2xl text-xl font-bold text-primary-main ">Contact Us</h2>
          </div>
        </div>
          <p className="w-[80%] md:mb-8 text-[16px]">Have questions or want to book your next adventure in Pachmarhi? We’re here to help!</p>
        <div className="">
      
        <form className="md:gap-6 sm:gap-4 gap-2 md:text-base text-sm">
          <div className="grid grid-cols-2 w-full gap-2">
          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-primary-main" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="h-[40px] sm:p-2 p-1 border w-full outline-none rounded-md"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary-main" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="h-[40px] sm:p-2 p-1 border w-full outline-none rounded-md"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary-main" htmlFor="number">
                Number
              </label>
              <input
                type="number"
                name="number"
                className="h-[40px] sm:p-2 p-1 border w-full outline-none rounded-md"
                id="number"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-primary-main" htmlFor="number">
                Date
              </label>
              <input
                type="number"
                name="number"
                className="h-[40px] sm:p-2 p-1 border w-full outline-none rounded-md"
                id="number"
                placeholder="Enter your estimate date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          
          </div>
          <div className="mb-3 w-full md:col-span-3">
            <label className="block font-medium mb-[2px] text-primary-main" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="md:p-3 sm:p-2 p-1 border rounded-[5px] w-full outline-none resize-none md:h-20 sm:h-32 h-28 "
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-3">
            <button
              type="button"
              className=" inline-block rounded bg-primary-main px-6 py-2.5 font-medium leading-normal text-white hover:shadow-md hover:bg-primary-main sm:w-fit w-full sm:text-base text-xs"
              onClick={handleSubmit}
            >
              Send Message
            </button>

          </div>
        </form>
        </div>
      </section>
      <div className="w-[40%] flex justify-center items-center">
        <img className="h-[90%] rounded-lg" src="/assets/images/about-images/08.jpg" alt="" />
      </div>
    </div>
  );
};

export default HomeContact;
