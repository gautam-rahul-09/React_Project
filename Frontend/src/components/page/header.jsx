import React from "react";
import { FaHome, FaConciergeBell, FaShoppingBag, FaTachometerAlt, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" w-full bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-red-500 text-white w-full py-4 px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 z-10 shadow-md">
        <div className="text-xl font-bold flex items-center">
          <span className="mr-2">📱</span> SMART DHOPA
        </div>
        <div className="space-x-4 md:space-x-6 text-sm md:text-base flex items-center">
          <a href="#" className="hover:underline flex items-center gap-1">
            <FaHome /> HOME
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <FaConciergeBell /> SERVICES
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <FaShoppingBag /> BAG
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <FaTachometerAlt /> DASHBOARD
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <FaSignInAlt /> LOGIN
          </a>
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
    </div>
  );
};

export default Header;
