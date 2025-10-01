import React from 'react';
import CountUp from 'react-countup';
import { FaBath, FaBed, FaCar, FaRulerCombined } from 'react-icons/fa';

const CounterSection = () => {
  const counters = [
    { label: 'Square Feet', target: 2543, icon: <FaRulerCombined /> },
    { label: 'Bathrooms', target: 114, icon: <FaBath /> },
    { label: 'Bedrooms', target: 1124, icon: <FaBed /> },
    { label: 'Car Parking', target: 98, icon: <FaCar /> },
  ];

  return (
    <div
      className="relative w-full py-24 px-4 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://htmldemo.zcubethemes.com/relxtower/img/bg/count-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-around items-center text-white gap-12 flex-wrap max-w-6xl mx-auto">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-40"
          >
            <div className="w-20 h-20 bg-[#D29751] rounded-full flex justify-center items-center text-white text-4xl mb-4 shadow-lg">
              {counter.icon}
            </div>

            <div className="text-5xl font-bold">
              <CountUp
                end={counter.target}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>

            <div className="text-lg font-light mt-2">{counter.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
