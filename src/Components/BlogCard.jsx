// components/blog/BlogPostCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, MessageCircle, ArrowRight } from 'lucide-react';

const BlogPostCard = ({ post, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center mr-4">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{post.comments} Comments</span>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <motion.a
          href={`/blogs/${post.slug}`}
          className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;