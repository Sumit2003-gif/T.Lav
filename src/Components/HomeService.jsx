import React, { useState } from 'react';

// The icon component
const Icon = ({ isHovered }) => (
  <div
    className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full transition-colors duration-300
      ${isHovered ? 'bg-[#D29751]' : 'bg-gray-200'}`}
  >
    <svg
      className={`w-10 h-10 transition-colors duration-300
        ${isHovered ? 'text-white' : 'text-gray-600'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path d="M17.5 17.5l-2.1-2.1" />
      <path d="M14 22c-5.5 0-10-4.5-10-10S8.5 2 14 2" />
    </svg>
  </div>
);

// Reusable card component with hover effect
const ServiceCard = ({ header, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        flex flex-col items-start p-8 rounded-lg shadow-lg max-w-sm
        transition-colors duration-300
        ${isHovered ? 'bg-[#FDF6F0]' : 'bg-white'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon isHovered={isHovered} />
      <h1
        className={`text-2xl font-bold mb-4 transition-colors duration-300
          ${isHovered ? 'text-[#D29751]' : 'text-gray-800'}`}
      >
        {header}
      </h1>
      <p
        className={`text-gray-600 text-base mb-6 transition-colors duration-300
          ${isHovered ? 'text-[#D29751]' : 'text-gray-600'}`}
      >
        {text}
      </p>
      <a
        href="#"
        className={`text-base font-semibold transition-colors duration-300
          ${isHovered ? 'text-[#D29751]' : 'text-gray-600'}`}
      >
        Read More
      </a>
    </div>
  );
};

// Main Service Section
const ServiceSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-[Inter] flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="uppercase text-[#D29751] font-semibold tracking-wider text-sm mb-2">
          Our Service
        </p>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          What We Do
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <div className="w-12 h-1 bg-[#D29751] mt-4 mx-auto"></div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          header="Dedicated Production & Planning Teams"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          header="Event Marketing & Promotion"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          header="Guest Management & Hospitality"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          header="Guest Management & Hospitality"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          header="Guest Management & Hospitality"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          header="Guest Management & Hospitality"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
        />
      </div>
    </div>
  );
};

export default ServiceSection;
