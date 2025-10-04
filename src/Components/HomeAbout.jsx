import React from 'react';
import { Link } from 'react-router-dom';

// Use a placeholder image for the building.
const BUILDING_IMAGE_URL = "https://htmldemo.zcubethemes.com/relxtower/img/features/about_img02.png";

const HomeAbout = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        
        {/* Left Section: Image and Experience Box */}
        <div className="relative w-full lg:w-1/2">
          {/* Main image container with overflow hidden for the top right corner */}
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={BUILDING_IMAGE_URL} 
              alt="Modern building"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Decorative brown block at the top left */}
          {/* <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-stone-200 z-0 transform -translate-x-12 -translate-y-12 rounded-lg"></div> */}
          
          {/* Decorative rectangle for the text box */}
          <div className="absolute bottom-1/12 right-[60px] rounded-r-none z-20 w-3/5 h-1/4 transform translate-x-10 translate-y-10 bg-[#D29751] flex items-center justify-center rounded-lg shadow-xl">
            <p className="text-white text-lg sm:text-2xl font-semibold text-center leading-tight p-4">
              35 years of <br /> experience
            </p>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <p className="text-sm font-semibold text-stone-600 uppercase tracking-widest">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-stone-800 leading-tight">
            Welcome To Our <br /> Relxtower
          </h1>
          
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <div className="w-12 h-0.5 bg-[#D29751]"></div>
            <p className="text-stone-500 italic">
              We provide an essential service for you
            </p>
          </div>
          
          <p className="text-stone-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiue.
          </p>
          <Link to='/about'>
          <button className="mt-6 px-8 py-3 cursor-pointer bg-[#D29751] text-white hover:text-[#D29751] hover:bg-white font-semibold rounded-lg shadow-md border-[#D29751] border-2 transition-colors duration-300">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
