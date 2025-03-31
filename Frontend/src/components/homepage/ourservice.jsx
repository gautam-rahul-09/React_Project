import React from "react";

const services = [
  {
    title: "Wash & Iron",
    description:
      "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
    image: "/path-to-image1.png",
  },
  {
    title: "Wash & Fold",
    description:
      "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
    image: "/path-to-image2.png",
  },
  {
    title: "Iron & Fold",
    description:
      "Get back your dirty clothes. Your clothes will be ironed and pressed to look the best for you.",
    image: "/path-to-image3.png",
  },
  {
    title: "Dry Cleaning",
    description:
      "We use advanced dry cleaning techniques to ensure your clothes remain fresh and long-lasting.",
    image: "/path-to-image4.png",
  },
  {
    title: "Shoe Cleaning",
    description:
      "Professional shoe cleaning services to keep your footwear spotless and looking new.",
    image: "/path-to-image5.png",
  },
  {
    title: "Home Linen Cleaning",
    description:
      "We provide special cleaning services for home linen, including curtains, bedsheets, and sofa covers.",
    image: "/path-to-image6.png",
  }
  
  
];

const OurServices = () => {
  return (
    <div className="bg-gray-100 p-10 text-center">
      <h2 className="text-3xl font-bold text-red-500 underline mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                ➤ Select Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
