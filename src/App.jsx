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
              <Home />
          } />

          <Route path="/about" element={
              <About />
          } />

          <Route path="/contact" element={
              <Contact />
          } />

          {/* Blog Routes */}
          <Route path="/blogs" element={
              <BlogPage />
          } />

          <Route path="/blogs/:slug" element={
              <BlogPost />
          } />

          <Route path="/blogs/:category" element={
              <BlogCategory />
          } />

          <Route path="/project" element={
              <Project />
          } />

          {/* Auth Routes */}
          <Route path="/signup" element={
              <Signup />
          } />

          <Route path="/login" element={
              <Login />
          } />
        </Routes>
      </AnimatePresence>

      {/* Show Footer only when allowed */}
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;