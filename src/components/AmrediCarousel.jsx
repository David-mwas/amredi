import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Mobile from "../assets/african.jpg";
import web from "../assets/african.jpg";
import ai from "../assets/african.jpg";
import block from "../assets/african.jpg";
import iot from "../assets/african.jpg";
function AmrediCarousel() {
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <Carousel
        autoPlay="True"
        interval={3000}
        centerMode=""
        centerSlidePercentage={90}
        showIndicators="true"
        showThumbs=""
        showStatus=""
        infiniteLoop="true"
        className="max-w-[400px] rounded-lg h-[300px] object-cover"
      >
        <div className="">
          <img src={web} className="h-[300px] object-cover rounded-lg" />
          <p className="legend">Web Development</p>
        </div>
        <div className="">
          <img src={Mobile} className="h-[300px] object-cover rounded-lg" />
          <p className="legend">Mobile App Development</p>
        </div>
        <div>
          <img src={iot} className="h-[300px] object-cover rounded-lg" />
          <p className="legend ">Iternet Of Things</p>
        </div>
        <div>
          <img src={ai} className="h-[300px] object-cover rounded-lg" />
          <p className="legend ">ML and AI</p>
        </div>
        <div>
          <img src={block} className="h-[300px] object-cover rounded-lg" />
          <p className="legend">Blockchain Technology</p>
        </div>
      </Carousel>
    </div>
  );
}

export default AmrediCarousel;