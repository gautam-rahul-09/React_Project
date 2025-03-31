import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LaundryService = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white mt-10">
      
      {/* Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold text-gray-800">
          Best <span className="text-red-500">Wash & Iron service</span> in your doorstep
        </h1>
        <p className="text-gray-600 mt-4">
          Smart Dhopa is the first Online Laundry Platform in DIU with the latest technology in washing, dry cleaning, and laundry.
          Our services combine our expertise and experience to provide you with clean laundry in the shortest possible time.
        </p>
        <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
          View Services
        </button>
      </div>
      
      {/* Image Slider */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <SliderImage src="/image1.png" alt="Laundry Service 1" />
          <SliderImage src="/image2.png" alt="Laundry Service 2" />
          <SliderImage src="/image3.png" alt="Laundry Service 3" />
        </Carousel>
      </div>
    </div>
  );
};

// Reusable SliderImage Component
const SliderImage = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} />
  </div>
);

export default LaundryService;
