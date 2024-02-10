import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AmrediLogo from "./assets/amredi.svg";
import { FaCloudDownloadAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import pic from "./assets/african-removebg-preview.png";
import APK from "./app/app-arm64-v8a-release.apk";
function App() {
  const downloadApk = () => {
    const apkUrl = { APK };

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = apkUrl;
    anchor.download = "app-arm64-v8a-release.apk"; // Specify the file name for the download
    anchor.click();

    // Cleanup
    URL.revokeObjectURL(anchor.href);
  };
  return (
    <div className="flex flex-col w-screen h-screen items-center bg">
      <header className="flex items-center justify-between w-full px-4 py-2 md:py-4 lg:px-6 lg:py-4 bg-white">
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
      <div className="w-full items-center flex  justify-center">
        {/* <img src={pic} alt="" className="w-[300px] h-[200px] object-cover"/> */}
      </div>
      <div className="flex flex-col items-center text-center justify-center h-full space-y-6 p-4">
        <div className="space-y-4 flex flex-col items-center">
          <p className="text-xl font-bold md:w-[60%]">
            Amredi empowers young mothers, by providing education, training, and
            community support, helping them build brighter futures.
          </p>
          <p className="text-gray-900 dark:text-gray-600 font-semibold flex space-x-2 relative">
            <FaQuoteLeft className="bottom-3 absolute left-[-15px]" />
            <span>Redefining Motherhood, One Success Story at a Time</span>
            <FaQuoteRight className=" absolute right-[-22px]" />
          </p>
          <h1 className="text-2xl font-bold text-pink-500">
            Download Amredi App
          </h1>
        </div>
        <button
          onClick={downloadApk}
          className="mx-auto bg-pink-500 px-12 rounded-md py-2 text-white font-bold flex gap-2 items-center justify-center hover:bg-pink-600 transition duration-300 ease-in-out text-xl"
          size="lg"
        >
          <span>Download </span>
          <FaCloudDownloadAlt />
        </button>
      </div>
    </div>
  );
}

export default App;
