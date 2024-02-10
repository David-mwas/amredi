
import AmrediLogo from "./assets/amredi.svg";
import { FaCloudDownloadAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import APK from "./app/amredi.apk";
function App() {
  return (
    <div className="flex flex-col w-screen h-screen ">
      <header className="flex items-center justify-between w-full px-4 md:px-16 lg:px-20 py-2 md:py-4 bg-white">
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
      <div className="w-full items-center flex  justify-center px-4 md:px-12 lg:px-20">
        
      </div>
      <div className="flex flex-col items-center text-center justify-center h-full space-y-6 p-4">
        <div className="space-y-4 flex flex-col items-center">
          <p className="text-xl font-bold md:w-[60%]">
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
        </div>
        <a href={APK} download="amredi.apk">
          <button
            className="mx-auto bg-pink-500 px-12 rounded-md py-2 text-white font-bold flex gap-2 items-center justify-center hover:bg-pink-600 transition duration-300 ease-in-out text-xl hover:shadow-xl hover:scale-105 transform hover:translate-y-1"
            size="lg"
          >
            <span>Download </span>
            <FaCloudDownloadAlt />
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
