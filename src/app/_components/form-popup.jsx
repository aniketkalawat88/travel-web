"use client"

import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { closeModel } from '../redux/modelSlice/modelSlice';

export default function FormPopup() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => 
    state.modal.isOpen
  )
  const handleClose = () => (
    dispatch(closeModel())
  )

  const [isData , setIsData] = useState({
    name:'',
    email:'',
    number:'',
    date:'',
    message:'',
  })

  const handleChange = (e) => {
    if(e.target.name === "name"){
      setIsData({
        ...isData,
        [e.target.name]:e.target.value.replace(/[^a-z ]/gi, ""),
      })
    }
    else if(e.target.name === "number"){
      setIsData({
        ...isData,
        [e.target.name]:e.target.value.replace(/[^0-9 ]/gi, "")
      })
    }
    else{
      setIsData({
        ...isData,
        [e.target.name]:e.target.value,
      })

    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isData ,"isData");
  }

  return (
    <div>
      {isOpen && ( // Conditional rendering of modal based on isOpen state
        <div
          id="contactFormModal"
          className="fixed z-20 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen bg-black/90">
            <div className="bg-white w-full max-w-md rounded shadow-md border-2 border-primary-main">
              <div className="flex justify-end p-2">
                {/* Close Button */}
                <button
                  onClick={handleClose} // onClick event to close the modal
                  className="text-gray-700 hover:text-red-500 text-xl"
                >
                  <RxCrossCircled />
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary-main px-4">Contact Us</h2>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 text-start h-96 overflow-y-scroll p-6'>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-primary-main text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={isData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none text-black"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-primary-main text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={isData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none text-black"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="tel"
                    className="block text-primary-main text-sm font-bold mb-2"
                  >
                    Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="number"
                    value={isData.number}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none text-black"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-primary-main text-sm font-bold mb-2"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={isData.date}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none text-black"
                  />
                </div>
                <div className="mb-4 ">
                  <label
                    htmlFor="message"
                    className="block text-primary-main text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={isData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary-main-500 text-white font-bold py-2 px-4 rounded bg-primary-main w-fit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
