import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import TopInfoBar from './Components/TopInfoBar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Components/SignUp';
import Login from './Components/Login';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';

// Blog Components
import BlogPage from './Pages/Blog';
import BlogPost from './Components/BlogPost';
import BlogCategory from './Components/BlogCategory';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Animation configs
  const pageVariants = {
    initial: { opacity: 0, x: 50, scale: 0.98 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: -50, scale: 0.98 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  // Hide Navbar/Footer on specific routes
  const hideNavbar =
    (location.pathname.startsWith("/blogs/") && location.pathname.split("/").length === 3) ||
    location.pathname.startsWith("/blogs/category/") ||
    location.pathname === "/signup" ||
    location.pathname === "/login";

  return (
    <div className="App">
      {/* Show TopBar + Navbar only when allowed */}
      {!hideNavbar && <TopInfoBar />}
      {!hideNavbar && <Navbar />}

      {/* Page Transition Wrapper */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Home />
            </motion.div>
          } />

          <Route path="/about" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <About />
            </motion.div>
          } />

          <Route path="/contact" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Contact />
            </motion.div>
          } />

          {/* Blog Routes */}
          <Route path="/blogs" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BlogPage />
            </motion.div>
          } />

          <Route path="/blogs/:slug" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BlogPost />
            </motion.div>
          } />

          <Route path="/blogs/:category" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BlogCategory />
            </motion.div>
          } />

          <Route path="/project" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Project />
            </motion.div>
          } />

          {/* Auth Routes */}
          <Route path="/signup" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Signup />
            </motion.div>
          } />

          <Route path="/login" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Login />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>

      {/* Show Footer only when allowed */}
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;