import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AmrediLogo from "./assets/amredi.svg";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg">
      <header className="flex items-center justify-between w-full px-4 py-2 md:py-4 lg:px-6 lg:py-4">
        <a className="flex items-center space-x-2" href="#">
          <img src={AmrediLogo} className="h-14" />
        </a>
        <nav className="hidden space-x-4 text-sm font-medium lg:flex">
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
      <div className="flex flex-col items-center text-center justify-center h-full space-y-8">
        <div className="space-y-2">
          <p className="text-lg font-semibold">
            Amredi empowers young mothers, by providing education, training, and
            community support, helping them build brighter futures.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            " Redefining Motherhood, One Success Story at a Time "
          </p>
          <h1 className="text-2xl font-bold text-pink-500">
            Download Amredi App
          </h1>
        </div>
        <button
          className="mx-auto bg-pink-500 px-12 rounded-md py-2 text-white font-bold"
          size="lg"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
