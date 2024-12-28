import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Jihane Essakhi</h1>
      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={styles.hamburgerLine}></div>
        <div style={styles.hamburgerLine}></div>
        <div style={styles.hamburgerLine}></div>
      </div>
      <div
        style={{
          ...styles.linksContainer,
          ...(isMenuOpen ? styles.linksContainerOpen : {}),
        }}
      >
        <Link style={styles.link} to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          style={styles.link}
          to="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          style={styles.link}
          to="/portfolio"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          style={styles.link}
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fafaf7", // Light beige
    borderBottom: "1px solid #e0d9d3", // Subtle border
  },
  logo: {
    fontSize: "1.8rem",
    color: "#4b3f33", // Dark brown
    margin: 0,
  },
  linksContainer: {
    display: "flex",
    gap: "15px",
  },
  linksContainerOpen: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    top: "70px",
    left: "0",
    right: "0",
    backgroundColor: "#fafaf7", // Light beige
    padding: "20px",
    borderTop: "1px solid #e0d9d3",
    zIndex: 1000,
  },
  link: {
    color: "#7d6f64", // Muted beige
    textDecoration: "none",
    fontSize: "1rem",
  },
  linkHover: {
    color: "#4b3f33", // Dark brown on hover
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    zIndex: 1001,
  },
  hamburgerLine: {
    width: "25px",
    height: "3px",
    backgroundColor: "#4b3f33", // Dark brown
  },
  // Responsive design for smaller screens
  "@media (max-width: 768px)": {
    linksContainer: {
      display: "none",
    },
    hamburger: {
      display: "flex",
    },
  },
};

export default Navbar;
