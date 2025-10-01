import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: `Ralo helped my wife and I refinance our house and purchase an investment property. 
      Anyone could have done that but what I really liked about her is that she was extremely ethical. 
      She carefully listened to our concerns and gave us excellent advice. She was also very patient. 
      I would absolutely recommend her and do business with her again especially if you are a first-time investor.`,
    name: 'John Dew',
    date: '03 days ago',
    image: 'https://htmldemo.zcubethemes.com/relxtower/img/testimonial/testi_avatar.png',
  },
  {
    text: `Excellent service! They made my first-time home buying process smooth and stress-free. 
      I was guided at every step with transparency and professionalism. Thank you Ralo team!`,
    name: 'Emily Stone',
    date: '05 days ago',
    image: 'https://htmldemo.zcubethemes.com/relxtower/img/testimonial/testi_avatar.png',
  },
  {
    text: `Very satisfied with how they helped us get approved for a mortgage even with a tricky credit situation. 
      Super responsive and helpful team. Highly recommend them!`,
    name: 'Michael Lane',
    date: '07 days ago',
    image: 'https://htmldemo.zcubethemes.com/relxtower/img/testimonial/testi_avatar.png',
  },
];

const AnimatedHeading = () => {
  const lines = ['We help people to find their', 'best and dream house'];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#D29751]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, i) => (
        <motion.div key={i} variants={lineVariants}>
          {line}
        </motion.div>
      ))}
    </motion.h2>
  );
};

const testimonialVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const profileVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { text, name, date, image } = testimonials[index];

  return (
    <section className="relative">
      {/* Hero Background */}
      <div
        className="relative h-[450px] bg-cover bg-center mt-[5%] rounded-b-3xl overflow-hidden"
        style={{
          backgroundImage: `url('https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/review-on-bg.jpg')`,
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Text & Ratings */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="text-black">
            <AnimatedHeading />
            <p className="text-gray-700 max-w-md text-base md:text-lg">
              Most people find that mortgage financing is complicated and confusing.
              We help you buy your dream home by simplifying the mortgage.
            </p>
          </div>

          {/* Review Badge */}
          <div className="bg-white text-black px-8 py-5 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-lg w-full sm:w-auto border border-gray-200">
            {/* Trustpilot */}
            <div className="flex items-center gap-3">
              <div className="text-sm">
                <p className="text-gray-600 font-medium mb-1">Review On</p>
                <img
                  src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/trast.svg"
                  alt="Trustpilot Stars"
                  className="h-4"
                />
              </div>
              <div className="text-sm text-gray-600">
                <img
                  src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/stars-4.5.svg"
                  alt="Stars"
                  className="h-4 mb-1"
                />
                <p>544+ Reviews</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            {/* Google */}
            <div className="flex items-center gap-3">
              <img
                src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/google.svg"
                alt="Google Logo"
                className="h-8"
              />
              <div>
                <div className="flex gap-1 text-[#D29751] mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Review 4.9/5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Box */}
      <div className="relative max-w-4xl mx-auto -mt-28 z-20 px-4">
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={testimonialVariants}
          className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl text-center relative border border-gray-200"
        >
          {/* Stars */}
          <div className="flex justify-center mb-6 text-[#D29751]">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-xl" />
            ))}
          </div>

          {/* Text and Profile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
              className="mb-8 leading-relaxed text-lg md:text-xl text-gray-800"
            >
              {text}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={name + date}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={profileVariants}
              className="flex items-center justify-center gap-4"
            >
              <motion.img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.15 } }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">{name}</h4>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute left-[-20px] sm:left-[-40px] top-1/2 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gray-100 p-3 rounded-full shadow hover:bg-[#D29751] hover:text-white transition"
              aria-label="Previous testimonial"
            >
              <FiArrowLeft />
            </button>
          </div>
          <div className="absolute right-[-20px] sm:right-[-40px] top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gray-100 p-3 rounded-full shadow hover:bg-[#D29751] hover:text-white transition"
              aria-label="Next testimonial"
            >
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
