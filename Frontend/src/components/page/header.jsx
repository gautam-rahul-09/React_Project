import React from "react";
import { FaHome, FaConciergeBell, FaShoppingBag, FaTachometerAlt, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Navbar */}
      <nav className="bg-red-500 text-white py-4 px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 w-full shadow-md">
        {/* Logo Section */}
        <div className="text-xl font-bold">Laundary Services</div>

        {/* Navigation Links */}
        <div className="flex space-x-4 md:space-x-6 text-sm md:text-base">
          <NavItem href="#" icon={<FaHome />} text="HOME" />
          <NavItem href="#" icon={<FaConciergeBell />} text="SERVICES" />
          <NavItem href="#" icon={<FaShoppingBag />} text="BAG" />
          <NavItem href="#" icon={<FaTachometerAlt />} text="DASHBOARD" />
          <NavItem href="#" icon={<FaSignInAlt />} text="LOGIN" />
        </div>
      </nav>
    </div>
  );
};

// Reusable Navigation Item
const NavItem = ({ href, icon, text }) => (
  <a href={href} className="hover:underline flex items-center gap-1">
    {icon} {text}
  </a>
);

export default Header;
