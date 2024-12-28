import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Jihane Essakhi. All rights reserved.</p>
      <p>
        Email: <a href="mailto:jihane.essakhi.e@gmail.com" style={styles.link}>jihane.essakhi.e@gmail.com</a>
        {" | "}
        <a href="https://www.linkedin.com/in/jihane-essakhi-3aba351bb/" target="_blank" rel="noopener noreferrer" style={styles.link}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fafaf7", // Light beige
    color: "#4b3f33", // Dark brown
    fontSize: "1rem",
    borderTop: "1px solid #e0d9d3", // Subtle border
  },
  link: {
    color: "#7d6f64",
    textDecoration: "none",
    fontWeight: "bold",
  },
  linkHover: {
    color: "#4b3f33", // Darker brown on hover
  },
};

export default Footer;
