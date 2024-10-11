import React from "react";

const Packages = () => {
  const pack = ["", "", ""];
  return (
    <div className="max-w-6xl mx-auto space-y-6 my-6">
      {pack.map((ele, i) => (
        <div
          key={i}
          className="h-[420px] rounded-lg overflow-hidden lg:max-w-none dark:bg-primary-main/ lg:flex  shadow-teal border-4 border-primary-main"
        >
          <div className="w-[50%] flex items-center justify-center dark:bg-[#f0f0f073]">
            <img
              className="w-[90%] h-[90%] object-cover rounded-lg"
              src="/assets/images/about-images/about-main.avif"
              alt=""
            />
          </div>
          <div className="bg-white w-[60%] px-6 py-4 lg:flex-shrink-1  dark:bg-[#f0f0f073]">
            <h3 className="text-xl text-left leading-8 font-extrabold text-black sm:text-2xl sm:leading-9 dark:text-black">
              Couple Friendly Budget package By Suhana Tours and Travels For 2
              pax
            </h3>
            <div className="mt-4">
              <ul className="pl-0 lg:grid lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
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
                  </div>
                  <p className="ml-3 text-lg leading-5 text-black font-ttnorms text-left ">
                    Pick Up from Pipariya to pachmarhi
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
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
                  </div>
                  <p className="ml-3 text-lg leading-5 text-black font-ttnorms text-left ">
                    Drop from pachmarhi to pipariya
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
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
                  </div>
                  <p className="ml-3 text-lg leading-5 text-black font-ttnorms text-left">
                    3N/2D stay in Budget Non Ac room
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
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
                  </div>
                  <p className="ml-3 text-lg leading-5 text-black font-ttnorms text-left">
                    Sightseeing-non entry/forest entry
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <p className="mt-4 text-lg leading-5 text-primary-main font-ttnorms text-left ">
                    Total package cost = 10000.00
                  </p>
                </li>
              </ul>
              <div className="lg:mt-2">
                <div className="rounded-md shadow w-[50%]">
                  <a
                    href="#"
                    className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal border-2 border-primary-main bg-white hover:bg-primary-main hover:shadow-teal-hover text-primary-main hover:text-white text-lg relative z-20 dark:bg-primary-main dark:text-white dark:hover:bg-teal-500 dark:hover:text-white"
                  >
                    Book Packages
                  </a>
                </div>
                <li className="flex items-start lg:col-span-1">
                  <p className="mt-2 text-sm leading-5 text-black font-ttnorms text-left">
                    Price may vary according to festivals public holidays
                    seasons weekends .
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
