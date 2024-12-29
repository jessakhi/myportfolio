import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import contactIcon from "../assets/contact-mail.png";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }} // Initial state for fade-in
      animate={{ opacity: 1 }} // Animation target state
      transition={{ duration: 1 }} // Animation duration
    >
      {/* Hero Section */}
      <motion.div
        className="home-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={require("../assets/mypic.jpeg")}
          alt="Jihane Essakhi"
          className="home-image"
        />
        <div className="home-text-container">
          <h1 className="home-title">Hello, I'm Jihane.</h1>
          <p className="home-subtitle">Data Science Student | Analytics Enthusiast</p>
          <motion.button
            className="home-button"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }} // Slightly enlarge button on hover
            whileTap={{ scale: 0.95 }} // Shrink button on tap
          >
            <img src={contactIcon} alt="Contact Icon" className="home-icon" /> Contact Me
          </motion.button>
        </div>
      </motion.div>

      {/* Preview Cards */}
      <motion.div
        className="home-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }} // Delayed fade-in
      >
        {[
          { title: "About", description: "Learn more about me and my background.", path: "/about" },
          { title: "Portfolio", description: "Explore my data science projects and analytics work.", path: "/portfolio" },
          { title: "Contact", description: "Reach out to discuss opportunities or collaborations.", path: "/contact" },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="home-card"
            onClick={() => navigate(card.path)}
            whileHover={{ scale: 1.05 }} // Slightly enlarge on hover
            whileTap={{ scale: 0.95 }} // Shrink on tap
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 * index }} // Staggered animation
          >
            <h2 className="home-card-title">{card.title}</h2>
            <p className="home-card-description">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
