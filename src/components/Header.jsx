import React, { useState } from "react";
import AmrediLogo from "../assets/amredi.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from 'framer-motion'
import { IoMdClose } from "react-icons/io";


function Header() {
    const [NavDisplay, setNavDisplay] = useState(true)
  return (
    <div className="sticky top-0 px-4 shadow-lg pb-2 md:px-14 lg:px-20 mt-3 flex md:flex-row  flex-col w-screen justify-between gap-12">
      <a href="/">
        <div className="">
          <motion.img src={AmrediLogo} alt="background" className="h-14" 
           initial={{ x: -100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 1 }}  />
        </div>
      </a>
      
        <motion.ul className={`md:flex  md:justify-end  flex-col md:divide-x flex-1 md:flex-row items-center ${NavDisplay ? ('hidden'): ('flex')}`}
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 1, delay: 0.2 }}>
          
          <li className="lg:ml-5 md:ml-3 font-bold hover:text-pink-500 uppercase">
            <a href="#DownloadApp" className="ml-5">
              Download App
            </a>
          </li>
          <li className="lg:ml-5 md:ml-3 font-bold hover:text-pink-500">
            <a href="#">ABOUT US</a>
          </li>
          <li className="lg:ml-5 md:ml-3 font-bold hover:text-pink-500">
            <a href="#">PROJECTS</a>
          </li>
          <li className="lg:ml-5 md:ml-3 font-bold hover:text-pink-500">
            <a href="#">CONTACT</a>
          </li>
          <li className="lg:ml-5 md:ml-3 font-bold hover:text-pink-500  md:p-2 lg:p-3 active:animate-bounce">
            <a href="#">DONATE</a>
          </li>
        </motion.ul>
        
      
      <div className="flex  md:hidden absolute right-0 items-center justify-center text-5xl flex-col w-[2.25rem] h-[2rem] ">
         {!NavDisplay ? ( <IoMdClose onClick={() => setNavDisplay((prev) => !prev)}/>
          ):(<GiHamburgerMenu onClick={() => setNavDisplay((prev) => !prev)} />) }
        </div>
    </div>
  );
}

export default Header;
