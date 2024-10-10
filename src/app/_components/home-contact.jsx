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
    <div className="px-2 md:px-4 my-4 max-w-7xl mx-auto shadow-md bg-gray-800/10 rounded-lg" >
      <section className="p-6">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold text-primary-main ">Contact Us</h2>
          </div>
        </div>
        <div className="">
      
        <form className="grid grid-cols-3 gap-6">
          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-primary-main" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="p-3 border w-full outline-none rounded-md"
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
              className="p-3 border w-full outline-none rounded-md"
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
              className="p-3 border w-full outline-none rounded-md"
              id="number"
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 w-full col-span-3">
            <label className="block font-medium mb-[2px] text-primary-main" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="p-3 border rounded-[5px] w-full outline-none resize-none h-40"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-3">
            <button
              type="button"
              className="mb-6 inline-block rounded bg-primary-main px-6 py-2.5 font-medium leading-normal text-white hover:shadow-md hover:bg-primary-main w-fit"
              onClick={handleSubmit}
            >
              Send Message
            </button>

          </div>
        </form>
        </div>
      </section>
    </div>
  );
};

export default HomeContact;
