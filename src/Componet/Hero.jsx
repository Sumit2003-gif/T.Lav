import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          'url("https://static.wixstatic.com/media/88aac0_4e00f3c618734e8798a81fca297b32f3~mv2.png")',
      }}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        Precision and Reliability Defined
      </motion.h1>

      {/* Sub Heading */}
      <motion.p
        className="mt-4 text-lg md:text-xl font-light"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Building Dreams, Creating Reality
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link to="/about">
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition">
            Discover More
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
