import React from 'react';


const Blog = () => {
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


  return (
<div className="bg-gray-50 mt-[17%] md:mt-[10%] px-4">
      {/* Sticky Section Heading */}
      <div className="sticky top-0 bg-gray-50 z-20 py-6 mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles, tips, and trends in technology and design.
          </p>
        </div>
        <div className="border-b border-gray-300 mt-6"></div> {/* Optional divider */}
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link} // Internal or external link
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl duration-300 block"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <span className="text-gray-400 text-sm">{blog.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
