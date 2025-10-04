import React from "react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    date: "5 DEC 2019",
    author: "ADMIN",
    category: "REAL ESTATE",
    title: "Making Distribut Product Team Work More With Monday",
  },
  {
    image:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    date: "5 DEC 2019",
    author: "ADMIN",
    category: "REAL ESTATE",
    title: "Modern and Minimalist House Designs",
  },
  {
    image:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
    date: "5 DEC 2019",
    author: "ADMIN",
    category: "REAL ESTATE",
    title: "How to Choose the Right Real Estate for Your Family",
  },
];

const News = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 font-[Inter]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-yellow-700 font-semibold tracking-widest uppercase text-sm mb-3">
          New Every Day
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-serif">
          Latest News
        </h2>
        <div className="w-20 h-1 bg-yellow-700 mx-auto mb-10"></div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <div className="text-xs text-gray-500 uppercase font-medium mb-3 flex flex-wrap items-center gap-2">
                  <span className="text-gray-700">{item.author}</span>
                  <span className="mx-1">•</span>
                  <span className="text-gray-700">{item.date}</span>
                  <span className="mx-1">•</span>
                  <span className="text-yellow-700">{item.category}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Read More */}
                <Link to='/blogs'>
                <button className="mt-4 cursor-pointer text-yellow-700 font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  Read More <span>→</span>
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
