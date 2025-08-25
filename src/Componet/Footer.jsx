import React from 'react';
import { FaBuilding, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-[3%]">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-8 py-6 border-b border-t border-gray-300">
        <FaBuilding size={50} className="text-gray-500" />
        <div>
          <p className="font-bold text-gray-800 text-2xl">T. Lav & Nguyen</p>
          <p className="text-lg text-gray-500 ">Construction</p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">

          {/* Column 1: Form */}
          <div className="px-8">
            <h1 className="text-2xl font-semibold mb-6">Stay Connected With Us</h1>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 border-gray-400" />
                Yes, subscribe me to your newsletter. <span className="text-red-500">*</span>
              </label>
              <button
                type="submit"
                className="w-full bg-gray-700 cursor-pointer text-white py-2 rounded-full hover:bg-gray-900 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Column 2: Contact Info */}
          <div className="px-8 flex flex-col justify-center space-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-800">123-456-7890</p>
              <p className="text-gray-600">info@mysite.com</p>
            </div>
            <p className="text-gray-600">
              500 Terry Francine St. San Francisco, CA 94158
            </p>
            <div className="flex gap-4 text-xl text-gray-500">
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
              <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
            </div>
          </div>

          {/* Column 3: Policies */}
          <div className="px-8 flex flex-col justify-center text-sm space-y-2">
            <button className="text-left hover:underline hover:text-gray-900 transition">
              Privacy Policy
            </button>
            <button className="text-left hover:underline hover:text-gray-900 transition">
              Accessibility Statement
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center md:justify-end text-xs text-gray-500 mt-8 px-8">
          <p>© 2035 by T. Lav & Nguyen Construction. Powered and secured by Wix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
