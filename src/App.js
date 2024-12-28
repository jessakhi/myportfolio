import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation(); // Now correctly inside the Router context

  // Animation variants for transitions
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  const pageTransition = { duration: 0.5 };

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Redirect to Home if no specific path is given */}
          <Route path="*" element={<Navigate to="/" />} />

          {/* Home Page */}
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />

          {/* Portfolio Page */}
          <Route
            path="/portfolio"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Portfolio />
              </motion.div>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
