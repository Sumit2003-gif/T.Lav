// AboutPage.js
import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../Components/AboutHero';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutPage = () => {
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

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  const processSteps = [
    { 
      title: "Initial Consultation", 
      description: "We discuss your property and valuation needs",
      icon: "📝"
    },
    { 
      title: "Property Inspection", 
      description: "Thorough on-site evaluation of the property",
      icon: "🔍"
    },
    { 
      title: "Market Analysis", 
      description: "Comprehensive research of comparable properties",
      icon: "📊"
    },
    { 
      title: "Valuation Report", 
      description: "Detailed report with accurate property value",
      icon: "📄"
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      role: "Real Estate Investor",
      content: "Their valuation was incredibly accurate and helped me secure financing for my investment property. Highly professional service!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Sarah Thompson",
      role: "Homeowner",
      content: "The appraisal process was smooth and the report was comprehensive. I felt confident listing my home at the recommended price.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Commercial Developer",
      content: "Their commercial property valuation expertise is unmatched. They provided insights that helped us maximize our development potential.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  
  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <AboutHero text='About'/>
      
      {/* About Content Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={containerVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Property Valuation Experts
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              With over 15 years of experience in the real estate industry, we provide accurate, reliable property valuation services that help our clients make informed decisions. Our team of certified appraisers combines market expertise with cutting-edge technology.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver precise property valuations that empower homeowners, investors, and financial institutions with the confidence to navigate the real estate market successfully.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Integrity in every appraisal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Accuracy through rigorous methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Client-focused service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Continuous innovation in valuation techniques</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" 
                alt="Property valuation professionals" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Stats Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">By The Numbers</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Properties Valued" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24h", label: "Average Turnaround" },
              { value: "15+", label: "Certified Appraisers" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-md"
                variants={statsVariants}
                whileHover={{ y: -10 }}
              >
                <p className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
{/* Enhanced Services Section */}
<motion.section 
  className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionVariants}
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
  </div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div 
      className="text-center mb-16"
      variants={itemVariants}
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Our Valuation Services</h2>
      <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
      <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
        Comprehensive property valuation solutions tailored to your specific needs
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Residential Appraisals",
          description: "Accurate valuation of homes, apartments, and condos for sales, refinancing, or insurance purposes.",
          icon: "🏠",
          features: [
            "Single-family homes",
            "Condominiums",
            "Townhouses",
            "Multi-family units"
          ],
          color: "from-blue-50 to-blue-100",
          borderColor: "border-blue-200"
        },
        {
          title: "Commercial Valuations",
          description: "Expert appraisal of office buildings, retail spaces, warehouses, and other commercial properties.",
          icon: "🏢",
          features: [
            "Office buildings",
            "Retail centers",
            "Industrial properties",
            "Hotels & hospitality"
          ],
          color: "from-orange-50 to-orange-100",
          borderColor: "border-orange-200"
        },
        {
          title: "Land Assessment",
          description: "Comprehensive valuation of vacant land for development, investment, or agricultural use.",
          icon: "🌳",
          features: [
            "Development sites",
            "Agricultural land",
            "Rural properties",
            "Subdivision potential"
          ],
          color: "from-blue-50 to-blue-100",
          borderColor: "border-blue-200"
        }
      ].map((service, index) => (
        <motion.div 
          key={index}
          className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-lg overflow-hidden border ${service.borderColor} transform transition-all duration-500`}
          variants={itemVariants}
          whileHover={{ 
            y: -15, 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          <div className="p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-5xl">{service.icon}</div>
              
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Includes:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.button
            onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
              className="w-full bg-yellow-600/70 cursor-pointer hover:bg-yellow-700/80 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Additional Services Banner */}
    <motion.div 
      className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-white shadow-xl"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Specialized Valuation Services</h3>
          <p className="text-yellow-100 max-w-2xl">
            We also offer specialized services including estate planning, divorce settlements, insurance valuations, and expert witness testimony.
          </p>
        </div>
        <a href='tel:0123456789'>
        <motion.button
          className="bg-white text-yellow-600 cursor-pointer hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Call Now
        </motion.button>
        </a>
      </div>
    </motion.div>
  </div>
</motion.section>
      
      {/* Testimonials Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-yellow-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-4 text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
            {/* CTA Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 bg-gray-800 text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl font-serif font-bold mb-6"
            variants={itemVariants}
          >
            Ready for a Professional Valuation?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Contact us today for a comprehensive property appraisal that meets your specific needs.
          </motion.p>
          <motion.button
          onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
            className="bg-yellow-600 cursor-pointer hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.section>
      

      
      {/* Team Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              position: "Chief Appraiser",
              bio: "15+ years in residential valuation",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            {
              name: "Michael Chen",
              position: "Commercial Specialist",
              bio: "Expert in retail and office properties",
              image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            {
              name: "Emily Rodriguez",
              position: "Land Assessment Lead",
              bio: "Specialist in rural and development land",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
            }
          ].map((member, index) => (
            <motion.div 
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 border-4 border-white shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-yellow-600 font-medium mb-2">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
              <div className="mt-4 flex justify-center space-x-3">
                {[<FaLinkedin/> ,<FaTwitter/>, <FaFacebook/>].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-yellow-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social }
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* FAQ Section */}
           

    </div>
  );
};

export default AboutPage;