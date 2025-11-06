// pages/BlogPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogHero from  '../Components/BlogHero';
import BlogPostCard from '../Components/BlogCard';
import BlogSidebar from '../Components/BlogSideBar';
import { blogPosts } from '../Components/BlogData'; // Import the blog data

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <BlogHero />
      
      {/* Blog Content */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
            
            {/* Pagination */}
            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded- cursor-pointer flex items-center justify-center transition-colors ${
                      currentPage === number 
                        ? 'bg-yellow-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay Updated with Property Valuation Insights
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for expert analysis, market trends, and valuation tips.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 border-2 border-white placeholder:text-white rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;