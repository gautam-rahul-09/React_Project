import React from "react";

const features = [
  {
    title: "Free Pickup & Delivery",
    description: "Doorstep Pickup and Your clothes will be delivered at your doorstep on time and as fresh as daisy.",
    icon: "/mnt/data/image.png",
  },
  {
    title: "Hygienic",
    description: "Your clothes are hygienically washed so they are germ free and clean. The way you think about laundry!",
    icon: "/mnt/data/image.png",
  },
  {
    title: "Affordable",
    description: "No Additional Cost! You pay just the same as the price set by your selected laundry vendor.",
    icon: "/mnt/data/image.png",
  },
  {
    title: "Eco Friendly",
    description: "Local residents love our reliable laundry & dry cleaning services for the fast, accurate, top-quality results.",
    icon: "/mnt/data/image.png",
  },
  {
    title: "Quality Guarantee",
    description: "We are professionals in the laundry business, which means we always stay up to date on the latest technologies.",
    icon: "/mnt/data/image.png",
  },
  {
    title: "Transparent Pricing",
    description: "At an affordable price, our services remain within budget or lower than any other local laundry services near you.",
    icon: "/mnt/data/image.png",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white p-10 text-center">
      <h2 className="text-3xl font-bold text-red-500 underline mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;