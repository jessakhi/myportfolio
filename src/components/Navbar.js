import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Jihane Essakhi</h1>
      <div style={styles.navLinks}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/portfolio">Portfolio</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
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
    backgroundColor: "#fafaf7", // Light beige
    borderBottom: "1px solid #e0d9d3", // Subtle border
    position: "sticky",
    top: "0",
    zIndex: "1000", // Ensure navbar is always on top
  },
  logo: {
    fontSize: "1.8rem",
    color: "#4b3f33", // Dark brown
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#7d6f64", // Muted beige
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
  },
  "@media (max-width: 768px)": {
    navbar: {
      flexDirection: "column", // Stack logo and links vertically
      alignItems: "center",
    },
    navLinks: {
      flexDirection: "column", // Stack links vertically
      alignItems: "center",
      gap: "10px", // Add spacing between links
    },
  },
};

export default Navbar;
