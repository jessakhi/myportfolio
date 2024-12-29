import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLanguageChange, language }) => {
  const translations = {
    en: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      translate: "Translate to French",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      portfolio: "Portfolio",
      contact: "Contact",
      translate: "Traduire en anglais",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Jihane Essakhi</h1>
      <div style={styles.navLinks}>
        <Link style={styles.link} to="/">{t.home}</Link>
        <Link style={styles.link} to="/about">{t.about}</Link>
        <Link style={styles.link} to="/portfolio">{t.portfolio}</Link>
        <Link style={styles.link} to="/contact">{t.contact}</Link>
        <button style={styles.translateButton} onClick={onLanguageChange}>
          {t.translate}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#fafaf7",
    borderBottom: "1px solid #e0d9d3",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  },
  logo: {
    fontSize: "1.8rem",
    color: "#4b3f33",
    margin: 0,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#7d6f64",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
  },
  translateButton: {
    backgroundColor: "#4b3f33",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Navbar;
