import React from "react";
import { FaHome, FaUtensils, FaBath, FaBuilding, FaPaintRoller, FaHammer } from "react-icons/fa";
import { motion } from "framer-motion";

const Service = () => {
  const services = [
    { title: "Home Remodeling", icon: FaHome },
    { title: "Kitchen Renovation", icon: FaUtensils },
    { title: "Bathroom Remodeling", icon: FaBath },
    { title: "Office Construction", icon: FaBuilding },
    { title: "Painting & Finishing", icon: FaPaintRoller },
    { title: "Repair & Maintenance", icon: FaHammer },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-16 px-4">
      {/* Main Heading + Large Image */}
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-10 mb-12">
        <div className="md:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-5xl font-extrabold text-gray-800 mb-6 leading-snug"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explore the range of services we provide to make your spaces beautiful and functional.
            From home remodeling to office construction, our team delivers exceptional craftsmanship,
            innovative designs, and reliable service for every project.
          </motion.p>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 h-96 md:h-[400px] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=1470&q=80"
            alt="Construction Work"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center transition duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            variants={textVariants}
          >
            <div className="text-gray-500 border-2 border-gray-500 rounded-full p-5 mb-4 inline-flex items-center justify-center transition-colors duration-300 group hover:bg-gray-200">
              <service.icon size={36} className="transition duration-300 group-hover:text-gray-600" />
            </div>
            <motion.h3
              className="text-gray-700 text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-blue-600 group-hover:font-bold"
              variants={textVariants}
            >
              {service.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
