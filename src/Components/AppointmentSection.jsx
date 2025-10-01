import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AppointmentSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex justify-center items-center min-h-screen font-sans p-4 bg-gray-100"
    >
      <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl">
        {/* Background image container with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://htmldemo.zcubethemes.com/relxtower/img/bg/cta_bg02.jpg')",
            filter: "brightness(0.7)",
          }}
        ></div>

        {/* Overlay Layer */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content container */}
        <div className="relative z-10 p-10 lg:p-20 text-center text-white flex flex-col items-center justify-center">
          <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-300 tracking-wider">
            Don’t hesitate to contact us
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            MAKE AN APPOINTMENT NOW
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-yellow-500">
            666 888 0000
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-yellow-500 text-black font-semibold uppercase tracking-wider rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppointmentSection;
