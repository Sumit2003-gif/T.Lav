import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const tabs = [
    {
      title: "Building",
      text: "Our mission in building focuses on delivering structures that combine strength, sustainability, and innovation. Every project reflects our dedication to precision and modern design principles.",
      img: "https://images.pexels.com/photos/32908313/pexels-photo-32908313.jpeg"
    },
    {
      title: "Excellence",
      text: "Our excellence-driven mission ensures every project surpasses expectations. We prioritize quality, reliability, and client satisfaction, setting the benchmark in the construction industry.",
      img: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg"
    }
  ];
  const [activeTab, setActiveTab] = useState(0);

  // Variants
  const fadeUp = { 
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div initial="hidden" animate="visible" className="about-page">

      {/* Hero Section */}
      <div className="w-full h-96 md:h-[500px] relative overflow-hidden ">
        <img
          src="https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg"
          alt="Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center px-8 md:px-16 mt-[5%]">
          <motion.div className="text-left max-w-2xl" variants={fadeUp} initial="hidden" animate="visible">
            <motion.h1 className="text-white text-4xl md:text-6xl font-bold leading-snug mb-4" variants={fadeUp}>
              About Us
            </motion.h1>
            <motion.p className="text-gray-300 text-lg md:text-xl leading-relaxed" variants={fadeUp}>
              Founded on a passion for architecture, <span className="font-semibold text-white">T. Lav & Nguyen</span> delivers innovative and sustainable designs that transform visions into reality.  
              <br /><br />
              From residential masterpieces to commercial landmarks, our team combines artistic flair with technical excellence to create spaces that stand the test of time.  
              <br /><br />
              Every project reflects our commitment to functionality, aesthetics, and long-lasting quality.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Expertise Section */}
      <motion.div className="max-w-6xl mx-auto px-4 py-16 md:flex md:gap-10 space-y-8 md:space-y-0">
        <motion.div className="md:w-1/2 flex flex-col justify-center h-full bg-gray-200 rounded-2xl p-8" variants={fadeUp}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug" variants={fadeUp}>
            Crafting <br /> Quality <br /> Structures
          </motion.h2>
          <motion.p className="text-gray-700 font-semibold text-lg" variants={fadeUp}>Our Expertise</motion.p>
        </motion.div>

        <motion.div className="md:w-1/2 flex flex-col justify-center p-8 bg-gray-200 rounded-2xl shadow-xl" variants={fadeUp}>
          <motion.p className="text-gray-700 leading-relaxed text-justify" variants={fadeUp}>
            At T. Lav & Nguyen Construction, we are dedicated to delivering top-tier construction services with a focus on precision and reliability...
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.div className="bg-gray-200 py-16" variants={fadeUp}>
        <div className="max-w-6xl mx-auto px-4 md:flex md:items-center md:gap-12">

          {/* Left: Tabs + Text */}
          <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeUp}>
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.title}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    activeTab === index
                      ? "bg-gray-600 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>

            <motion.p className="text-gray-700 leading-relaxed mb-8" variants={fadeUp}>
              {tabs[activeTab].text}
            </motion.p>

            <Link to="/contact">
              <motion.button className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore More
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div className="md:w-1/2 flex justify-center" variants={fadeUp}>
            <motion.img
              src={tabs[activeTab].img}
              alt={tabs[activeTab].title}
              className="rounded-2xl shadow-lg w-full h-auto object-cover transition duration-500"
              variants={fadeUp}
            />
          </motion.div>

        </div>
      </motion.div>

    </motion.div>
  );
};

export default About;
