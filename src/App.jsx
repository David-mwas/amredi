import AmrediLogo from "./assets/amredi.svg";
import { FaCloudDownloadAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import APK from "./app/amredi.apk";
import PhoneImage from "./assets/amredi-removebg-preview.png";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="flex flex-col w-full h-screen bg">
      <header className="flex items-center justify-between w-full px-4 md:px-16 lg:px-20 py-2 md:py-4 bg-white fixed z-20 h-[60px] shadow-lg">
        <a className="flex items-center space-x-2" href="#">
          <img src={AmrediLogo} alt="background" className="h-14" />
        </a>
        <nav className="hidden space-x-4 text-sm font-medium md:flex">
          <a
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
          >
            Features
          </a>
          <a
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
          >
            Screenshots
          </a>
          <a
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
          >
            Testimonials
          </a>
        </nav>
      </header>
      <div className="flex flex-col md:flex-row p-8 w-full  gap-8 mt-[150px] items-center justify-center h-full md:mt-0">
        <div className="space-y-4 flex flex-col md:w-[800px]">
          <p className="text-[20px] md:text-[30px] font-bold md:w-[80%]">
            Amredi empowers young mothers, by providing education, training, and
            community support, helping them build brighter futures.
          </p>
          <p className="inline-flex text-gray-900 dark:text-gray-600 font-semibold  space-x-2 ">
            <FaQuoteLeft className="bottom-3 " />
            <span>Redefining Motherhood, One Success Story at a Time</span>
            <FaQuoteRight className="" />
          </p>
          <h1 className="text-2xl font-bold text-pink-500">
            Download Amredi App
          </h1>
          <a
            href={APK}
            download="amredi.apk"
            className=" bg-pink-500 px-2 rounded-md py-2 text-white font-bold flex gap-2 items-center justify-center hover:bg-pink-600 transition duration-300 ease-in-out text-xl hover:shadow-xl  transform hover:gap-4 w-[270px]"
          >
            <span>Download </span>
            <FaCloudDownloadAlt />
          </a>
        </div>
        <div className="tilted-image-container md:mt-[100px]">
          <img
            src={PhoneImage}
            alt=""
            className="tilted-image"
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
