import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  // Replace this with the actual path or URL to your image
  const imageUrl = 'https://htmldemo.zcubethemes.com/relxtower/img/testimonial/test-bg.jpg'; 

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const breadcrumbVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 }
    }
  };

  return (
    <motion.div 
      className="relative h-96 md:h-[400px] w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>
      
      {/* Content Container - Centered Text */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-white"
        variants={containerVariants}
      >
        {/* A subtle orange line from the original design */}
        <motion.div 
          className="absolute top-0 h-1 bg-yellow-600"
          variants={lineVariants}
        ></motion.div> 
        
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold tracking-wider mb-4"
          variants={itemVariants}
        >
          {Array.from("BLOG").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Breadcrumb Navigation */}
        <motion.div 
          className="text-lg font-light space-x-2"
          variants={breadcrumbVariants}
        >
          <motion.span 
            className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.span>
          <span className="opacity-75">&gt;</span>
          <motion.span 
            className="font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Blogs
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutHero;