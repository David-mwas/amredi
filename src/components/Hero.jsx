import React from "react";
import AmrediCarousel from "./AmrediCarousel";

function Hero() {
  return (
    <div id="About" className="flex snap-center h-screen md:flex-row flex-col justify-center items-center md:px-14 lg:px-20 px-4 pt-14">
      <div className="w-full">
        <h1 className="md:text-5xl text-2xl font-bold italic tracking-wider">Are you ready to start Afresh?</h1>
        <p className="">Early pregnancy is a significant problem in Kenya, leading to high dropout rates among young girls and limiting their future prospects.
</p>
      </div>
      <AmrediCarousel/>
    </div>
  );
}

export default Hero;
