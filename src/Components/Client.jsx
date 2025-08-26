import React from "react";

const Client = () => {
  const data = [
    {
      name: "John Doe",
      url: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "T. Lav & Nguyen exceeded my expectations with their professionalism and attention to detail. The quality of their work speaks volumes about their commitment to excellence."
    },
    {
      name: "Jane Smith",
      url: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Working with T. Lav & Nguyen was a pleasure. Their designs are stunning and their communication is top-notch."
    },
    {
      name: "Michael Johnson",
      url: "https://randomuser.me/api/portraits/men/51.jpg",
      text: "From start to finish, the process was smooth and professional. Highly recommend their services!"
    },
    {
      name: "Emily Davis",
      url: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Their creativity and attention to detail made our project a huge success. Absolutely brilliant!"
    },
    {
      name: "Michael Johnson",
      url: "https://randomuser.me/api/portraits/men/51.jpg",
      text: "From start to finish, the process was smooth and professional. Highly recommend their services!"
    },
    {
      name: "Michael Johnson",
      url: "https://randomuser.me/api/portraits/men/51.jpg",
      text: "From start to finish, the process was smooth and professional. Highly recommend their services!"
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-12 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Blogs
      </h1>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.url}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm">{item.text}</p>

            {/* Decorative Quote */}
            <div className="text-gray-300 text-5xl font-serif absolute opacity-10 -mt-14 -ml-4">
              “
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-gray-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition transform hover:scale-105">
         All Blogs
        </button>
      </div>
    </div>
  );
};

export default Client;
