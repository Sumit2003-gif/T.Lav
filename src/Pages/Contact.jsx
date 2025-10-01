// Pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Building, Home, Landmark } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define image URL for hero section
  const imageUrl = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: ''
      });
    }, 3000);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Missing animation variants
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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Office",
      content: "123 Property Lane, Real Estate City, RE 12345"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "(123) 456-7890"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@propertyvaluers.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-2PM"
    }
  ];

  const propertyTypes = [
    { value: "", label: "Select Property Type" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "land", label: "Land" },
    { value: "industrial", label: "Industrial" },
    { value: "special", label: "Special Purpose" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
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
            {Array.from("Contact Us").map((letter, index) => (
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
              Contact
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Contact Form and Info Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={containerVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Request a Valuation
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8"
              variants={itemVariants}
            >
              Fill out the form below and one of our certified property appraisers will contact you shortly.
            </motion.p>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>Your request has been submitted successfully. We'll contact you soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                  />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="propertyType" className="block text-gray-700 font-medium mb-2">Property Type</label>
                  <select 
                    id="propertyType" 
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                  >
                    {propertyTypes.map((type, index) => (
                      <option key={index} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                    placeholder="Tell us about your property and valuation needs..."
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Valuation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </motion.form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={containerVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <div className="text-yellow-600">{info.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Property Types We Value */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Property Types We Value</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Home className="text-yellow-600 mr-2" />
                  <span className="text-gray-600">Residential</span>
                </div>
                <div className="flex items-center">
                  <Building className="text-yellow-600 mr-2" />
                  <span className="text-gray-600">Commercial</span>
                </div>
                <div className="flex items-center">
                  <Landmark className="text-yellow-600 mr-2" />
                  <span className="text-gray-600">Industrial</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-yellow-600 mr-2" />
                  <span className="text-gray-600">Land</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Map Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Find Our Office</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="w-full h-96 md:h-[500px]">
              <iframe
                title="Our Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019469408642!2d-122.41941518468136!3d37.77492927975908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb6dbf25%3A0x1e8bdb60487e9ef0!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1634653787235!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            variants={itemVariants}
          >
            Ready for a Professional Property Valuation?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Contact us today for a comprehensive property appraisal that meets your specific needs.
          </motion.p>
          <motion.button
            className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;