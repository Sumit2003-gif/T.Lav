import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
  {
    id: 1,
    title: 'How to Build a Modern Web App',
    description: 'Learn the best practices for building scalable and responsive web applications.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 10, 2025',
    link: '/blogs/1',
  },
  {
    id: 2,
    title: 'Top 10 React Tips',
    description: 'Improve your React skills with these practical tips and tricks.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 12, 2025',
    link: '/blogs/2',
  },
  {
    id: 3,
    title: 'UI/UX Design Trends in 2025',
    description: 'Stay ahead with the latest design trends for websites and mobile apps.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 13, 2025',
    link: '/blogs/3',
  },
  {
    id: 4,
    title: 'Optimizing Web Performance',
    description: 'Tips to make your websites faster and more efficient for users.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 14, 2025',
    link: '/blogs/4',
  },
  {
    id: 5,
    title: 'Introduction to Node.js',
    description: 'Learn the fundamentals of Node.js and backend development.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 15, 2025',
    link: '/blogs/5',
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox',
    description: 'Understand when to use CSS Grid and Flexbox in your layouts.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 16, 2025',
    link: '/blogs/6',
  },
  {
    id: 7,
    title: 'Mastering JavaScript ES6',
    description: 'Learn new JavaScript features and modern syntax for better code.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 17, 2025',
    link: '/blogs/7',
  },
  {
    id: 8,
    title: 'Building REST APIs with Express',
    description: 'Step-by-step guide to creating RESTful APIs using Express.js.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 18, 2025',
    link: '/blogs/8',
  },
  {
    id: 9,
    title: 'State Management in React',
    description: 'Learn Redux, Context API, and other state management techniques.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 19, 2025',
    link: '/blogs/9',
  },
  {
    id: 10,
    title: 'Responsive Web Design',
    description: 'How to make your website look perfect on any device.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 20, 2025',
    link: '/blogs/10',
  },
  {
    id: 11,
    title: 'Next.js for Modern Apps',
    description: 'Learn server-side rendering and static generation with Next.js.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 21, 2025',
    link: '/blogs/11',
  },
  {
    id: 12,
    title: 'GraphQL Basics',
    description: 'Get started with GraphQL for efficient API queries.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 22, 2025',
    link: '/blogs/12',
  },
  {
    id: 13,
    title: 'SEO Best Practices',
    description: 'Improve your website’s search engine ranking effectively.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 23, 2025',
    link: '/blogs/13',
  },
  {
    id: 14,
    title: 'Accessibility in Web Design',
    description: 'Making your web applications accessible for all users.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 24, 2025',
    link: '/blogs/14',
  },
  {
    id: 15,
    title: 'TypeScript for React',
    description: 'How to use TypeScript to make your React apps safer and scalable.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 25, 2025',
    link: '/blogs/15',
  },
  {
    id: 16,
    title: 'Deploying Apps on Vercel',
    description: 'Step-by-step guide to deploy your frontend and fullstack apps.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 26, 2025',
    link: '/blogs/16',
  },
  {
    id: 17,
    title: 'Understanding REST vs GraphQL',
    description: 'Compare REST APIs with GraphQL for modern web development.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 27, 2025',
    link: '/blogs/17',
  },
  {
    id: 18,
    title: 'Web Security Basics',
    description: 'Learn how to secure your web applications from common vulnerabilities.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 28, 2025',
    link: '/blogs/18',
  },
  {
    id: 19,
    title: 'Progressive Web Apps',
    description: 'Build fast, offline-capable apps using modern web technologies.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 29, 2025',
    link: '/blogs/19',
  },
  {
    id: 20,
    title: 'CSS Animations and Transitions',
    description: 'Add smooth animations to enhance user experience.',
    image: "https://images.pexels.com/photos/33217722/pexels-photo-33217722.jpeg",
    date: 'Aug 30, 2025',
    link: '/blogs/20',
  },
];

 const blog = blogs.find(b => b.id === parseInt(id));
  if (!blog) return <div className="text-center mt-16">Blog not found</div>;

  const relatedBlogs = blogs.filter(b => b.id !== blog.id);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <div className="bg-gray-50 px-4">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-4 mb-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/blogs">
            <button className="bg-gray-300 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-400 transition">
              Back to Blog
            </button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4">
            {blog.title}
          </h1>
          <p className="text-gray-500 mt-1">{blog.date}</p>
        </div>
      </div>

      {/* Blog Image & Description */}
      <div className="max-w-4xl mx-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 md:h-96 object-cover rounded-2xl mb-6 shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {blog.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>

        {/* Related Blogs */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
          Related Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedBlogs.map((b, i) => (
            <motion.div
              key={b.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <Link to={`/blogs/${b.id}`}>
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{b.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;