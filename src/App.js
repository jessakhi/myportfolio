import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Get current location for animated transitions

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div {...pageTransition}>
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename="/myportfolio"> {/* Base path for GitHub Pages */}
      <Navbar />
      <div style={{ minHeight: "80vh" }}> {/* Ensures space between Navbar and Footer */}
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
