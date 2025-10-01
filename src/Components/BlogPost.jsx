// pages/BlogPost.js
import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Calendar, User, MessageCircle, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Sample blog post data - in a real app, this would come from an API
  const blogPost = {
    title: "Understanding Property Valuation Methods",
    excerpt: "Learn about the different approaches to property valuation and when each method is most appropriate for accurate assessments.",
    content: `
      <p>Property valuation is a critical process in real estate that determines the economic value of a property. Whether you're buying, selling, refinancing, or investing, understanding how properties are valued can help you make informed decisions.</p>
      
      <h3>The Sales Comparison Approach</h3>
      <p>The sales comparison approach is one of the most common methods used in residential property valuation. This method compares the subject property to recently sold properties that are similar in location, size, condition, and features.</p>
      <p>Appraisers make adjustments for differences between the subject property and the comparables to arrive at an estimated market value. This approach works best in active markets with plenty of recent sales data.</p>
      
      <h3>The Cost Approach</h3>
      <p>The cost approach calculates what it would cost to replace the property with a similar one, minus depreciation. This method is particularly useful for new properties and special-purpose buildings that don't have many comparable sales.</p>
      <p>The formula is: Land Value + (Replacement Cost New - Depreciation) = Property Value. While straightforward, this approach may not always reflect current market conditions, especially for older properties.</p>
      
      <h3>The Income Approach</h3>
      <p>The income approach is primarily used for investment properties and commercial real estate. This method values a property based on the income it generates or could potentially generate.</p>
      <p>Appraisers calculate the net operating income (NOI) and apply a capitalization rate to determine the property's value. This approach is ideal for rental properties, office buildings, and other income-producing real estate.</p>
      
      <h3>Choosing the Right Method</h3>
      <p>The appropriate valuation method depends on the property type, available data, and purpose of the valuation. Residential properties typically use the sales comparison approach, while commercial properties often rely on the income approach.</p>
      <p>For the most accurate valuation, professional appraisers often use multiple approaches and reconcile the results to arrive at a final value estimate.</p>
    `,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 10, 2023",
    author: "Sarah Johnson",
    category: "Valuation Tips",
    comments: 5,
    authorBio: "Sarah is a certified residential appraiser with over 10 years of experience in property valuation. She specializes in residential properties and has conducted thousands of appraisals throughout her career."
  };

  const relatedPosts = [
    {
      title: "How Market Trends Affect Property Values",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "5 Factors That Increase Your Property Value",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "The Impact of Interest Rates on Real Estate",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-5xl font-serif font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {blogPost.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap justify-center items-center text-gray-300 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>{blogPost.comments} Comments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Featured Image */}
          <div className="h-96 overflow-hidden">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Author Bio */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex-shrink-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt={blogPost.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{blogPost.author}</h3>
              <p className="text-gray-600 mt-2">{blogPost.authorBio}</p>
            </div>
          </div>
        </motion.div>
        
        {/* Related Posts */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  <a href="#" className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center">
                    Read More
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Back to Blog Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="/blogs" 
            className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPost;