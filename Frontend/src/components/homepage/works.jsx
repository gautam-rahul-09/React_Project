import React from "react";
import { FaClipboardCheck, FaShoppingBag, FaClock, FaMapMarkerAlt, FaTshirt, FaBicycle } from "react-icons/fa";

const steps = [
  { icon: <FaClipboardCheck />, text: "Select Service" },
  { icon: <FaShoppingBag />, text: "Place Order" },
  { icon: <FaClock />, text: "Set Schedule" },
  { icon: <FaMapMarkerAlt />, text: "Pick up" },
  { icon: <FaTshirt />, text: "Wash & Iron" },
  { icon: <FaBicycle />, text: "Delivery" },
];

const HowItWorks = () => {
  return (
    <div className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-red-500 underline mb-6">How It Works</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Steps Section */}
        <div className="flex flex-col items-start gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="bg-red-500 text-white p-3 rounded-full text-xl">{step.icon}</span>
              <button className="bg-white shadow-md px-6 py-2 rounded-lg text-lg font-semibold">
                {step.text}
              </button>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <video
            controls
            className="rounded-lg shadow-lg w-full"
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
