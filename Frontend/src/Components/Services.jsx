import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleQuantityChange = (item, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(0, (prev[item] || 0) + amount),
    }));
  };

  const servicesData = {
    title: "Wash & Fold Service",
    categories: [
      {
        name: "MEN’s",
        items: [
          { name: "Exclusive Punjabi", price: 120 },
          { name: "Top Wear (Shirt / T-shirt / Fatua)", price: 10 },
          { name: "Sherwani", price: 350 },
        ],
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-md p-4 mt-6">
      <h2 className="text-xl font-bold text-red-500 text-center border-b-2 border-red-500 pb-1">
        {servicesData.title}
      </h2>

      {servicesData.categories.map((category, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-between">
            {category.name} <span className="cursor-pointer">^</span>
          </h3>
          <hr className="mb-2" />

          {category.items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between mb-3">
              <div>
                <p className="text-gray-800">{item.name}</p>
                <p className="text-gray-600 text-sm">₹ {item.price} / piece</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  className="px-2 bg-gray-300 rounded"
                  onClick={() => handleQuantityChange(item.name, -1)}
                >
                  - 
                </button>
                <span className="text-gray-800">{quantities[item.name] || 0}</span>
                <button
                  className="px-2 bg-gray-300 rounded"
                  onClick={() => handleQuantityChange(item.name, 1)}
                >
                  + 
                </button>

                {quantities[item.name] > 0 ? (
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => navigate("/bag")}
                  >
                    Added
                  </button>
                ) : (
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleQuantityChange(item.name, 1)}
                  >
                    Add to bag
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Services;
