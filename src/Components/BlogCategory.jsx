// pages/BlogCategory.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import BlogPostCard from '../Components/BlogCard';
import BlogSidebar from '../Components/BlogSideBar';

const BlogCategory = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sample blog posts filtered by category
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
    }
  ];

  // Filter posts by category
  const filteredPosts = blogPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format category name for display
  const formatCategoryName = (cat) => {
    return cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-5xl font-serif font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {formatCategoryName(category)}
            </motion.h1>
            <motion.p 
              className="text-xl text-yellow-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {filteredPosts.length} articles in this category
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} />
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
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
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
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
                )}
              </>
            ) : (
              <motion.div 
                className="bg-white rounded-xl shadow-md p-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  There are currently no articles in this category.
                </p>
                <a 
                  href="/blog" 
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  View All Articles
                </a>
              </motion.div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCategory;