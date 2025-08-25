import React, { useState, useEffect } from "react";
import { FaBuilding, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <div className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        {/* Logo */}
        <Link to="/">
          <div
            className="flex items-center gap-3 px-8 py-3 cursor-pointer border-gray-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaBuilding size={50} className="text-gray-500" />
            <div>
              <p className="font-bold text-gray-800 text-2xl">T. Lav & Nguyen</p>
              <p className="text-lg text-gray-500">Construction</p>
            </div>
          </div>
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 rounded-md bg-gray-800 cursor-pointer text-white hover:bg-gray-700 mr-4 md:mr-8"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Blur Background (only when menu open) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
        />
      )}

      {/* Slide Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-black text-white transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <IoMdClose
            size={30}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-8 text-2xl font-light">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`hover:underline ${
                location.pathname === item.path
                  ? "text-yellow-400 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
