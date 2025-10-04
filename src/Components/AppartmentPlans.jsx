import React, { useState } from "react";
import { Link } from "react-router-dom";

const apartmentPlans = {
  penthouse: {
    title: "PENTHOUSE",
    description:
      "Experience luxury living in our spacious penthouse units, offering panoramic views and top-of-the-line amenities. Each unit is meticulously designed to provide a serene and opulent living experience.",
    floorNo: 16,
    rooms: 5,
    totalArea: 1800,
    parking: 1,
    price: "3000$/Month",
    image: "https://htmldemo.zcubethemes.com/relxtower/img/floor-chart.jpg",
  },
  studio: {
    title: "STUDIO",
    description:
      "Our modern studio apartments are perfect for individuals or couples seeking a compact and efficient living space. They are designed to maximize every square foot, providing a comfortable and stylish home.",
    floorNo: 2,
    rooms: 1,
    totalArea: 400,
    parking: 1,
    price: "1200$/Month",
    image: "https://images.pexels.com/photos/4792483/pexels-photo-4792483.jpeg",
  },
  duplex: {
    title: "DUPLEX",
    description:
      "Enjoy the benefits of a multi-level home with our beautiful duplex plans. With separate living and sleeping areas, these units offer a unique sense of space and privacy.",
    floorNo: 8,
    rooms: 3,
    totalArea: 1200,
    parking: 1,
    price: "2500$/Month",
    image: "https://images.pexels.com/photos/4792507/pexels-photo-4792507.jpeg",
  },
  "double-height": {
    title: "DOUBLE HEIGHT",
    description:
      "The double-height units feature soaring ceilings and expansive windows, creating an open and airy atmosphere. This design brings in an abundance of natural light and a feeling of grandeur.",
    floorNo: 12,
    rooms: 4,
    totalArea: 1500,
    parking: 2,
    price: "2800$/Month",
    image: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg",
  },
};

const AppartmentPlans = () => {
  const [activePlan, setActivePlan] = useState("penthouse");

  const currentPlan = apartmentPlans[activePlan];

  const details = [
    { label: "FLOOR NO", value: currentPlan.floorNo },
    { label: "ROOMS", value: currentPlan.rooms },
    { label: "TOTAL AREA / SQFT", value: currentPlan.totalArea },
    { label: "PARKING", value: currentPlan.parking },
    { label: "PRICE", value: currentPlan.price },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex justify-center items-center font-[Inter]">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden p-8 md:p-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-yellow-700 font-semibold tracking-wider">
            Our Plans
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Apartments Plans
          </h1>
          <div className="w-24 h-1 bg-yellow-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {Object.keys(apartmentPlans).map((key) => (
            <button
              key={key}
              onClick={() => setActivePlan(key)}
              className={`px-6 py-3 rounded-full cursor-pointer font-medium uppercase tracking-wide transition-all duration-300 text-sm md:text-base
                ${
                  activePlan === key
                    ? "bg-yellow-700 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:scale-105"
                }`}
            >
              {apartmentPlans[key].title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Details */}
          <div className="space-y-8">
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">
              {currentPlan.description}
            </p>

            {/* Details Section */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-300 last:border-0"
                >
                  <span className="text-sm font-medium text-gray-600 tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-base font-bold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to='/contact'>
            <button className="mt-6 cursor-pointer w-full md:w-auto px-8 py-3 bg-yellow-700 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-800 transition duration-300">
              Book Now
            </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-2xl"></div>
            <img
              src={currentPlan.image}
              alt={`${currentPlan.title} plan`}
              className="rounded-2xl shadow-2xl border-4 border-gray-100 w-full relative z-10 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppartmentPlans;
