import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
      <div className="md:w-1/3 flex justify-center">
        <img src="/path-to-your-image.png" alt="Smart Dhopa Logo" className="w-48" />
      </div>
      <div className="md:w-2/3 text-center md:text-left px-6">
        <h2 className="text-3xl font-bold text-red-500 underline mb-4">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Smart Dhopa is the first Online Laundry Platform in DIU with the latest
          technology in washing, dry cleaning, and laundry. Our services combine our
          expertise and experience acquired over a period of time to provide you with
          clean laundry in the shortest possible turnaround time. It has partnered up
          with the top laundry experts of the country and provides you with a free
          Pick-up and Delivery for your dirty laundry. With our Website, Mobile App,
          or Hotline Number, you can just schedule an order, and we will take it from
          there!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
