import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import contactIcon from "../assets/contact-mail.png";
import "./Home.css";

const Home = ({ language }) => {
  const navigate = useNavigate();

  const translations = {
    en: {
      title: "Hello, I'm Jihane.",
      subtitle: "Data Science Student | Analytics Enthusiast",
      contactButton: "Contact Me",
      cards: [
        { title: "About", description: "Learn more about me and my background.", path: "/about" },
        { title: "Portfolio", description: "Explore my data science projects and analytics work.", path: "/portfolio" },
        { title: "Contact", description: "Reach out to discuss opportunities or collaborations.", path: "/contact" },
      ],
    },
    fr: {
      title: "Bonjour, je suis Jihane.",
      subtitle: "Étudiante en Data Science | Passionnée d'Analytique",
      contactButton: "Contactez-moi",
      cards: [
        { title: "À propos", description: "Découvrez mon parcours.", path: "/about" },
        { title: "Portfolio", description: "Explorez mes projets en data science.", path: "/portfolio" },
        { title: "Contact", description: "Discutez de collaborations ou opportunités.", path: "/contact" },
      ],
    },
  };

  const t = translations[language] || translations.en;

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
          <h1 className="home-title">{t.title}</h1>
          <p className="home-subtitle">{t.subtitle}</p>
          <motion.button
            className="home-button"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={contactIcon} alt="Contact Icon" className="home-icon" /> {t.contactButton}
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="home-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {t.cards.map((card, index) => (
          <motion.div
            key={index}
            className="home-card"
            onClick={() => navigate(card.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 * index }}
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
