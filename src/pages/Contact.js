import React from "react";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/social.png";
import contactIcon from "../assets/contact-mail.png";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Me</h2>
      <div style={styles.descBox}>
        <p style={styles.description}>I’d love to hear from you! Feel free to reach out for any opportunities or questions.</p>
      </div>
      <div style={styles.contactInfo}>
        <div style={styles.contactItem}>
          <img src={emailIcon} alt="Email Icon" style={styles.icon} />
          <p>
            Email: <a href="mailto:jihane.essakhi.e@gmail.com" style={styles.link}>jihane.essakhi.e@gmail.com</a>
          </p>
        </div>
        <div style={styles.contactItem}>
          <img src={linkedinIcon} alt="LinkedIn Icon" style={styles.icon} />
          <p>
            LinkedIn: 
            <a
              href="https://www.linkedin.com/in/jihane-essakhi-3aba351bb/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Jihane Essakhi
            </a>
          </p>
        </div>
        <div style={styles.contactItem}>
          <img src={contactIcon} alt="Contact Icon" style={styles.icon} />
          <p>Feel free to drop a message anytime!</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#ffffff", // White background
    textAlign: "center",
  },
  header: {
    fontSize: "2.5rem",
    color: "#4b3f33", // Dark brown
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    color: "#7d6f64", // Muted beige
    marginBottom: "40px",
  },
  descBox: {
    flex: 1,
    backgroundColor: "#ffffff", // White for contrast
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
  },
  contactInfo: {
    fontSize: "1.2rem",
    color: "#4b3f33",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  link: {
    color: "#7d6f64",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Contact;
