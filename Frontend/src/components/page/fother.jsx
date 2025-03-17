import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 w-full fixed bottom-0 left-0">
      <div className="px-6 md:px-10 flex flex-col md:flex-row justify-between w-full">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-red-500 text-xl font-semibold flex items-center space-x-2">
            <span>⚙️</span> <span>Admin Panel</span>
          </h2>
          <p className="text-red-400 mt-2">Smart Dhopa Online Laundry Service</p>
          <p>Email: <a href="mailto:smartdhopa.support@gmail.com" className="hover:underline">smartdhopa.support@gmail.com</a></p>
          <p>Phone: <a href="tel:+8809638079309" className="hover:underline">+8809-6380-79309</a></p>
        </div>

        {/* Center Links */}
        <div className="mb-4 md:mb-0">
          <ul className="space-y-2">
            <FooterLink text="Get Help" />
            <FooterLink text="Read FAQ" />
            <FooterLink text="View All Templates" />
            <FooterLink text="About Us" />
          </ul>
        </div>

        {/* Right Links */}
        <div>
          <ul className="space-y-2">
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Cookie Policy" />
            <FooterLink text="Terms of Use" />
            <FooterLink text="Contact Us" />
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-4 text-sm w-full">
        Copyright © 2020 Developed by Prionto Abdullah
      </div>
    </footer>
  );
};

// Reusable FooterLink Component
const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="text-red-400 hover:underline">{text}</a>
  </li>
);

export default Footer;
