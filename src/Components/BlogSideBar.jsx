// components/blog/BlogSidebar.js
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Tag, FileText, Mail } from 'lucide-react';

const BlogSidebar = () => {
  const categories = [
    { name: "Market Trends", count: 12 },
    { name: "Valuation Tips", count: 8 },
    { name: "Commercial Real Estate", count: 5 },
    { name: "Residential Properties", count: 7 },
    { name: "Investment Advice", count: 4 },
    { name: "Regulatory Updates", count: 3 }
  ];

  const recentPosts = [
    { title: "How Market Conditions Affect Property Valuations", date: "May 15, 2023" },
    { title: "5 Factors That Increase Your Property Value", date: "April 28, 2023" },
    { title: "Understanding Commercial Property Appraisals", date: "April 12, 2023" },
    { title: "The Impact of Interest Rates on Real Estate", date: "March 30, 2023" }
  ];

  const tags = [
    "Property Value", "Market Analysis", "Real Estate", "Appraisal", 
    "Investment", "Commercial", "Residential", "Valuation Methods"
  ];

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Search className="w-5 h-5 mr-2 text-yellow-600" />
          Search
        </h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          />
          <button className="absolute right-2 top-2 text-gray-400 hover:text-yellow-600">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Categories Widget */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-yellow-600" />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="flex justify-between items-center text-gray-600 hover:text-yellow-600 transition-colors">
                <span>{category.name}</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Recent Posts Widget */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-yellow-600" />
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <a href="#" className="block group">
                <h4 className="font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tags Widget */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-yellow-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a 
              key={index} 
              href="#" 
              className="bg-gray-100 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 text-sm px-3 py-1 rounded-full transition-colors"
            >
              #{tag}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Widget */}
      <motion.div 
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl shadow-md text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          Subscribe to Newsletter
        </h3>
        <p className="text-yellow-100 mb-4">
          Get the latest property valuation insights delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
          />
          <button className="w-full bg-white text-yellow-600 font-medium py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSidebar;