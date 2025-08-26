import React from "react";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div className="bg-gray-50 my-[5%] sm:[10%]">
      <div className="max-w-6xl mx-auto px-4 py-[4%]">
        {/* Flex container for heading and form */}
        <div className="flex flex-col md:flex-row md:items-stretch md:gap-12">
          {/* Left: Heading/Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mt-[15%] font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Become part of our growing community! Collaborate with passionate
              professionals, explore exciting opportunities, and contribute to
              building exceptional projects together. Gain hands-on experience,
              develop your skills, and be a part of innovative solutions that
              make a real difference. Join us to connect, learn, and grow while
              creating spaces that inspire and transform.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2">
            <Form />
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Location
          </h2>
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.568665986276!2d75.6167478150694!3d29.15179728200066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128d5115eaa2ef%3A0x2b7e5e623a321b0f!2sHisar%2C%20Haryana%20125601!5e0!3m2!1sen!2sin!4v1691932394100!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
