// pages/BlogPost.js
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, MessageCircle, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../Components/BlogData'; // Updated import path to match BlogPage.js
import Footer from './Footer';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the blog post by slug from the blogPosts array
  const blogPost = blogPosts.find(post => post.slug === slug);
  
  // If no post found, show a 404 message
  if (!blogPost) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-50 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    </div>;
  }

  // Get related posts (excluding the current post)
  const relatedPosts = blogPosts
    .filter(post => post.id !== blogPost.id)
    .slice(0, 3); // Get first 3 related posts

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${blogPost.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {blogPost.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap justify-center items-center text-gray-200 gap-4 md:gap-6"
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
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                {blogPost.category}
              </span>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blogPost.content || blogPost.excerpt }}
            />
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-md">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors shadow-md">
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
          <div className="flex flex-col sm:flex-row items-start">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex-shrink-0 overflow-hidden mb-4 sm:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt={blogPost.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{blogPost.author}</h3>
              <p className="text-gray-600 mt-2">{blogPost.authorBio || `${blogPost.author} is a real estate expert with extensive knowledge in property valuation and market trends.`}</p>
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
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-yellow-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <Link to={`/blog/${post.slug}`} className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center">
                    Read More
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
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
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPost;