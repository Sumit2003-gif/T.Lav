// pages/BlogPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogHero from  '../Components/BlogHero';
import BlogPostCard from '../Components/BlogCard';
import BlogSidebar from '../Components/BlogSideBar';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Property Valuation Methods",
      excerpt: "Learn about the different approaches to property valuation and when each method is most appropriate for accurate assessments.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "June 10, 2023",
      author: "Sarah Johnson",
      category: "Valuation Tips",
      comments: 5,
      slug: "understanding-property-valuation-methods"
    },
    {
      id: 2,
      title: "How Market Trends Affect Property Values",
      excerpt: "Explore the key market indicators that influence property values and how to interpret them for better investment decisions.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Market Trends",
      comments: 8,
      slug: "market-trends-property-values"
    },
    {
      id: 3,
      title: "Commercial Property Valuation: Key Considerations",
      excerpt: "Discover the unique factors that impact commercial property valuations and how to approach complex assessments.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      date: "May 15, 2023",
      author: "Emily Rodriguez",
      category: "Commercial Real Estate",
      comments: 3,
      slug: "commercial-property-valuation-considerations"
    },
    {
      id: 4,
      title: "5 Factors That Increase Your Property Value",
      excerpt: "Learn about the most impactful improvements and features that can significantly boost your property's market value.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "April 28, 2023",
      author: "David Wilson",
      category: "Valuation Tips",
      comments: 12,
      slug: "factors-increase-property-value"
    },
    {
      id: 5,
      title: "The Impact of Interest Rates on Real Estate",
      excerpt: "Understand how changing interest rates affect property values and what it means for buyers, sellers, and investors.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "April 12, 2023",
      author: "Sarah Johnson",
      category: "Market Trends",
      comments: 7,
      slug: "impact-interest-rates-real-estate"
    },
    {
      id: 6,
      title: "Residential vs. Commercial Valuation: Key Differences",
      excerpt: "Compare the approaches and methodologies used in residential and commercial property valuations.",
      image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 30, 2023",
      author: "Michael Chen",
      category: "Valuation Tips",
      comments: 4,
      slug: "residential-vs-commercial-valuation"
    },
    {
      id: 7,
      title: "Technology in Property Valuation: Modern Tools",
      excerpt: "Discover how technology is transforming property valuation with advanced tools and data analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 18, 2023",
      author: "Emily Rodriguez",
      category: "Valuation Tips",
      comments: 6,
      slug: "technology-property-valuation"
    },
    {
      id: 8,
      title: "Economic Indicators Every Property Investor Should Watch",
      excerpt: "Learn about the key economic indicators that signal changes in the real estate market and property values.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 5, 2023",
      author: "David Wilson",
      category: "Investment Advice",
      comments: 9,
      slug: "economic-indicators-property-investors"
    },
    {
      id: 9,
      title: "5 Factors That Increase Your Property Value",
      excerpt: "Learn about the most impactful improvements and features that can significantly boost your property's market value.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "April 28, 2023",
      author: "David Wilson",
      category: "Valuation Tips",
      comments: 12,
      slug: "factors-increase-property-value"
    },
    {
      id: 10,
      title: "The Impact of Interest Rates on Real Estate",
      excerpt: "Understand how changing interest rates affect property values and what it means for buyers, sellers, and investors.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "April 12, 2023",
      author: "Sarah Johnson",
      category: "Market Trends",
      comments: 7,
      slug: "impact-interest-rates-real-estate"
    },
    {
      id: 11,
      title: "Residential vs. Commercial Valuation: Key Differences",
      excerpt: "Compare the approaches and methodologies used in residential and commercial property valuations.",
      image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 30, 2023",
      author: "Michael Chen",
      category: "Valuation Tips",
      comments: 4,
      slug: "residential-vs-commercial-valuation"
    },
  ];

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