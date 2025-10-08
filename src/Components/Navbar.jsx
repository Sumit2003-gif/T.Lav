import React, { useState, useEffect } from "react";
import { FaBars, FaLock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [signupOpen, setSignupOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSignupOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Wrapper */}
      <div 
        className={`sticky top-0 bg-white z-50 transition-all duration-300 ${
          isScrolled 
            ? "shadow-lg " 
            : "py-0"
        }`}
      >
        <div className="flex justify-between items-center bg-[#d2934e] h-16 text-black">
          {/* Left - Logo */}
          <div className="bg-[#3b3732] w-1/4 h-16 flex justify-center items-center px-6 py-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://htmldemo.zcubethemes.com/relxtower/img/logo/logo.png" 
                alt="Logo" 
                className="h-8 transition-all duration-300" 
              />
            </Link>
          </div>

          {/* Center - Menu Items */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`hover:underline hover:underline-offset-4 transition-all ${
                  location.pathname === item.path 
                    ? "font-semibold text-[#3b3732]" 
                    : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right - Signup Button */}
          <div
            className="bg-[#3b3732] h-full flex items-center px-6 cursor-pointer transition-all hover:bg-[#2a2723]"
            onClick={() => navigate("/signup")}
          >
            <FaLock className="text-white mr-2" />
            <span className="text-white font-semibold">SIGNUP</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 text-white bg-[#3b3732] rounded-md md:hidden mr-4 hover:bg-[#2a2723] transition-colors"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#3b3732] text-white transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <IoMdClose
            size={28}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-orange-400"
          />
        </div>
        <div className="flex flex-col gap-6 px-6 text-lg">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-orange-400 transition-colors ${
                location.pathname === item.path ? "text-orange-400 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Signup Modal */}
      {signupOpen && (
        <>
          <div
            onClick={() => setSignupOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg w-[90%] max-w-md p-6 z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">Sign Up</h2>
              <IoMdClose
                size={24}
                onClick={() => setSignupOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-red-400"
              />
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Create Account
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;