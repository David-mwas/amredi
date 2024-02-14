import AmrediLogo from "../assets/amredi.svg";
import { FaCloudDownloadAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import APK from "../app/amredi.apk";
import PhoneImage from "../assets/amredi-removebg-preview.png";
function DownloadApp() {
  return (
    <div id="Home" className=" flex flex-col w-full h-screen bg overflow-x-hidden">
      <div className="flex flex-col md:flex-row p-8 w-full  gap-8 mt-[180px] items-center justify-center h-full md:mt-0">
        <motion.div
          className="space-y-4 flex flex-col md:w-[800px]"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
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
            className=" bg-pink-500 px-2 rounded-md py-2 text-white font-bold flex gap-2 items-center justify-center hover:bg-pink-600 transition duration-300 ease-in-out text-xl hover:shadow-xl  transform hover:gap-4 w-[270px] aniamte-pulse "
          >
            <span>Download </span>
            <FaCloudDownloadAlt />
          </a>
        </motion.div>
        <motion.div
          className="tilted-image-container md:mt-[100px]  "
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={PhoneImage}
            alt=""
            className="tilted-image shadow-lg object-contain rounded-lg cursor-pointer"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default DownloadApp;
