import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

// Company News Links
const companyNewsLinks = [
  { name: "Partners", path: "/" },
  { name: "Career", path: "/" },
  { name: "Reviews", path: "/" },
  { name: "Terms & Conditions", path: "/" },
  { name: "Help", path: "/" },
];

// Useful Links
const usefulLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Project", path: "/project" },
  { name: "Our Team", path: "/about" },
  { name: "Latest Blog", path: "/blog" },
];

// Social Media Links
const socialLinks = [
  { icon: <FaFacebookF size={18} />, url: "https://facebook.com" },
  { icon: <FaTwitter size={18} />, url: "https://twitter.com" },
  { icon: <FaInstagram size={18} />, url: "https://instagram.com" },
  { icon: <FaGooglePlusG size={18} />, url: "https://plus.google.com" },
];

const Footer = () => {
  return (
    <footer className="bg-[#182323] text-gray-300 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="space-y-6">
          <div className="flex items-center">
            <img
              src="https://htmldemo.zcubethemes.com/relxtower/img/logo/logo.png"
              alt="Relixtower Logo"
              className="h-8 mr-3"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Pellentesque habitant morbi tristique senectus et netus et fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, tempor sit amet,
            ante. Donec eu libero sit amet quam egestas semper.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-6">
            <span className="text-sm font-semibold">Follow Us</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company News Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
            Company News
          </h3>
          <ul className="space-y-3 text-sm">
            {companyNewsLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-yellow-500 pb-2 inline-block">
            Useful Links
          </h3>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} @ Relixtower. All design by ZCube.
      </div>

      {/* Scroll to Top Button */}
      <div
        className="fixed bottom-6 right-6 bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
