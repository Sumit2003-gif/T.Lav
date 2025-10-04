import React, { useState } from 'react';
import { FaBed, FaRulerCombined, FaBath, FaCar } from 'react-icons/fa'; // FontAwesome icons
import { Link } from 'react-router-dom';

const PropertyFeature = () => {
  const [data] = useState({
    image: 'https://htmldemo.zcubethemes.com/relxtower/img/features/about_img03.png',
    category: 'Best Place',
    title: 'For Sell Properties',
    description:
      "Explore a beautiful, modern property equipped with all the essentials and luxurious features. Located in a peaceful neighborhood, it's the perfect blend of comfort and elegance.",
    features: [
      { name: '3 Bedrooms', icon: <FaBed size={20} /> },
      { name: 'Square Feet', icon: <FaRulerCombined size={20} /> },
      { name: '2 Bathrooms', icon: <FaBath size={20} /> },
      { name: 'Car Parking', icon: <FaCar size={20} /> },
    ],
    price: '$1,786.80',
  });

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 font-sans">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl overflow-hidden md:flex transition-transform duration-300 hover:shadow-2xl">
        {/* Left: Image */}
       

        {/* Right: Content */}
        <div className="md:w-1/2 p-10 md:p-14 space-y-8 flex flex-col justify-center">
          {/* Category */}
          <p className="text-sm font-semibold text-[#D29751] uppercase tracking-widest">
            {data.category}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 leading-snug font-serif">
            {data.title}
          </h1>

          {/* Divider */}
          <div className="relative w-20 h-1 bg-[#D29751] rounded-full overflow-hidden animate-pulse">
            <div className="absolute w-10 h-1 bg-[#D29751] " />
          </div>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
            {data.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 pt-2">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 text-neutral-700">
                <div className="text-xl bg-black/3 text-[#D29751] p-3 rounded-full shadow">
                  {feature.icon}
                </div>
                <span className="text-base md:text-lg font-medium">{feature.name}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="pt-4">
            <h2 className="text-xl font-semibold text-neutral-700 mb-1">Price</h2>
            <p className="text-4xl font-bold text-[#D29751] font-serif">{data.price}</p>
          </div>

          {/* Button */}
          <div>
            <Link to='/contact'>
            <button className="mt-4 px-8 py-3 cursor-pointer bg-[#D29751] text-white font-semibold rounded-xl shadow-lg hover:text-[#D29751] hover:bg-white border-2 border-[#D29751] transition duration-300 hover:scale-105 focus:outline-none">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
         <div className="md:w-1/2 p-6 flex items-center justify-center bg-neutral-50">
          <img
            src={data.image}
            alt="Property"
            className="w-full h-auto scale-x-[-1] object-cover rounded-2xl shadow-lg transition-transform duration-500"
          />
        </div>
      </div>
      
    </section>
  );
};

export default PropertyFeature;
