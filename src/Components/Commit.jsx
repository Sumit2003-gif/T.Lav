import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Commit = () => {
  const reasons = [
    {
      title: "Fast & Efficient",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description:
        "We deliver projects quickly without compromising on quality. Our team uses streamlined processes and modern tools to ensure every task is completed on time, allowing clients to move forward with their plans without delays. Experience efficiency combined with precision in every project we handle."
    },
    {
      title: "Trusted & Secure",
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
      description:
        "Your projects are safe with our experienced and reliable team. We prioritize transparency, follow strict safety standards, and maintain clear communication, giving our clients peace of mind throughout the entire construction process. Trust is built into everything we do."
    },
    {
      title: "Customer Satisfaction",
      img: "https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg",
      description:
        "We prioritize your satisfaction and ensure excellent results. From the initial consultation to project completion, our dedicated team listens to your needs, adapts solutions to meet your expectations, and strives to exceed them every step of the way. Your happiness is our ultimate goal."
    }
  ];

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-16 px-4">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover the key reasons why clients trust us for their construction projects. Excellence, reliability, and satisfaction drive every project we undertake.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-96 relative overflow-hidden group">
              <img
                src={reason.img}
                alt={reason.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex justify-center mt-12"
      >
        <Link to="/about">
        <button className="bg-gray-400 cursor-pointer text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-600 hover:shadow-xl transition duration-300">
          More Info
        </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Commit;
