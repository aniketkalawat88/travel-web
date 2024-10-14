"use client"

import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";

export default function FormPopup() {
  // Use state to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsOpen(true);

  // Function to close modal
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="flex justify-center items-center">
        {/* Trigger Button */}
        <button onClick={openModal} className="bg-primary-main text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm text-sm hover:bg-primary-main transition duration-300 font-medium"
            >
              Explore Now
            </button>
        {/* Modal */}
        {isOpen && ( // Conditional rendering of modal based on isOpen state
          <div
            id="contactFormModal"
            className="fixed z-10 inset-0 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen bg-black/90">
              <div className="bg-white w-full max-w-sm rounded shadow-md border-2 border-primary-main">
                <div className="flex justify-end p-2">
                  {/* Close Button */}
                  <button
                    onClick={closeModal} // onClick event to close the modal
                    className="text-gray-700 hover:text-red-500 text-xl"
                  >
                    <RxCrossCircled />
                  </button>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-primary-main">Contact Us</h2>
                <form action="" method="post" className='grid grid-cols-1 gap-2 text-start h-96 overflow-y-scroll p-6'>
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
                      className="w-full p-2 border rounded-md focus:outline-none text-black"
                      defaultValue={""}
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
    </div>
  );
}
