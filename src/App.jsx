import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Blog from './Pages/Blog'
import BlogDetail from "./Components/Blogdetail"
import Project from './Pages/Project'

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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

  // Hide Navbar on BlogDetail page
  const hideNavbar = location.pathname.startsWith("/blogs/") && location.pathname.split("/").length === 3;

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          } />
          <Route path="/blogs" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Blog />
            </motion.div>
          } />
          <Route path="/blogs/:id" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BlogDetail />
            </motion.div>
          } />
          <Route path="/project" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Project />
            </motion.div>
          } />
        </Routes>
        {/* <Route path='/project' element={<Project/>}/> */}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
