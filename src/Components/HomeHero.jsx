import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slideData = [
  {
    bgImage:
      "https://static.wixstatic.com/media/88aac0_4e00f3c618734e8798a81fca297b32f3~mv2.png",
    titleLine1: "Discover Modern",
    titleLine2: "Building Design.",
    price: "$1,786.80",
    labels: ["3 Bedrooms", "Square Feet", "Balcony", "Car Parking"],
  },
  {
    bgImage:
      "https://htmldemo.zcubethemes.com/relxtower/img/slider/slider_img02.jpg",
    titleLine1: "Innovative Architecture",
    titleLine2: "Solutions",
    price: "$2,345.50",
    labels: ["5 Bedrooms", "Luxury", "Garden View", "Pool"],
  },
  {
    bgImage:
      "https://images.pexels.com/photos/31267704/pexels-photo-31267704.jpeg",
    titleLine1: "Designs that",
    titleLine2: "Inspire Living",
    price: "$3,100.00",
    labels: ["Studio", "City Center", "Modern Finish", "Parking"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HomeHero = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Custom Navigation Buttons */}
      <div className="absolute z-20 hidden md:block top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#D29751] text-white w-10 h-10 rounded-full hover:bg-white hover:text-[#D29751] transition duration-300"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute z-20 hidden md:block top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#D29751] text-white w-10 h-10 rounded-full hover:bg-white hover:text-[#D29751] transition duration-300"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>

      <Swiper
        modules={[ Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full md:h-screen flex items-center p-[4%] justify-center bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-0" />

              {/* Content Container */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl w-full px-4 sm:px-6 py-8 sm:py-14 text-white flex flex-col justify-center h-full"
              >
                {/* Borders */}
                <div className="absolute top-0 left-0 w-1/2 h-2 bg-[#D29751]"></div>
                <div className="absolute top-0 left-0 w-2 h-1/2 bg-[#D29751]"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-[#D29751]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-1/2 bg-[#D29751]"></div>

                {/* Heading */}
                <motion.h1
                  variants={fadeUp}
                  className="text-lg sm:text-3xl md:text-5xl font-extrabold leading-tight mb-1 sm:mb-2"
                >
                  {slide.titleLine1}
                </motion.h1>
                <motion.h1
                  variants={fadeUp}
                  className="text-lg sm:text-3xl md:text-5xl font-extrabold text-[#D29751] mb-4 sm:mb-8"
                >
                  {slide.titleLine2}
                </motion.h1>

                {/* Labels */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap gap-2 sm:gap-4 text-white text-xs sm:text-base mb-6"
                >
                  {slide.labels.map((label, i) => (
                    <span
                      key={i}
                      className="flex items-center space-x-1 min-w-[90px] sm:min-w-[130px]"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#D29751]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                      <span>{label}</span>
                    </span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:w-1/2 sm:flex-row sm:items-center gap-3 mb-6"
                >
                  <Link to='/contact'>
                  <button className="bg-[#D29751] cursor-pointer sm:w-fit px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-[#D29751] transition duration-300 whitespace-nowrap text-sm sm:text-base">
                    Get a Quote
                  </button>
                  </Link>

                  
                </motion.div>

                {/* Price */}
                <motion.div
                  variants={fadeUp}
                  className="text-white font-semibold text-lg sm:text-2xl md:text-3xl grid justify-end items-center py-1"
                >
                  Price:{" "}
                  <span className="text-[#D29751]">{slide.price}</span>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHero;
