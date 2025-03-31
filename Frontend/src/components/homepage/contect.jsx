import React from "react";

const ContactUs = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start p-10 bg-white space-y-8 md:space-y-0 md:space-x-10">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-5 bg-gray-100 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-5 text-red-500 border-b-2 pb-2">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg w-full hover:bg-red-600 transition">Submit</button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="w-full md:w-1/2 p-5 text-gray-700">
        <h3 className="text-2xl font-semibold mb-4 text-red-500">Get in Touch</h3>
        <p className="mb-4 text-lg">Our vision is to <strong>provide clean laundry with the shortest possible turnaround time.</strong></p>
        <p className="text-lg">Have questions or suggestions? Our team is ready to assist you!</p>
        
        <div className="mt-6 space-y-3">
          <p className="flex items-center text-red-500 text-lg font-semibold">
            📞 +8809-6380-79309
          </p>
          <p className="flex items-center text-red-500 text-lg font-semibold">
            📧 smartdhopa.support@gmail.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4 text-red-500 text-2xl">
          <span className="hover:text-red-600 cursor-pointer">📘</span>
          <span className="hover:text-red-600 cursor-pointer">📷</span>
          <span className="hover:text-red-600 cursor-pointer">🎥</span>
          <span className="hover:text-red-600 cursor-pointer">💼</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;