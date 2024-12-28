import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Jihane Essakhi</h1>
      <div>
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
    padding: "20px",
    backgroundColor: "#fafaf7", // Light beige
    borderBottom: "1px solid #e0d9d3", // Subtle border
  },
  logo: {
    fontSize: "1.8rem",
    color: "#4b3f33", // Dark brown
    margin: 0,
  },
  link: {
    margin: "0 15px",
    color: "#7d6f64", // Muted beige
    textDecoration: "none",
    fontSize: "1rem",
  },
  linkHover: {
    color: "#4b3f33", // Dark brown on hover
  },
};

export default Navbar;
