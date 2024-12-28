import React from "react";
import { useNavigate } from "react-router-dom";
import contactIcon from "../assets/contact-mail.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Left: Hero Section */}
      <div style={styles.left}>
        <img
          src={require("../assets/mypic.jpeg")}
          alt="Jihane Essakhi"
          style={styles.image}
        />
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Hello, I'm Jihane.</h1>
          <p style={styles.subtitle}>Data Science Student | Analytics Enthusiast</p>
          <button style={styles.button} onClick={() => navigate("/contact")}>
            <img src={contactIcon} alt="Contact Icon" style={styles.icon} /> Contact Me
          </button>
        </div>
      </div>

      {/* Right: Previews */}
      <div style={styles.right}>
        <div style={styles.card} onClick={() => navigate("/about")}>
          <h2 style={styles.cardTitle}>About</h2>
          <p style={styles.cardDescription}>
            Learn more about me and my background.
          </p>
        </div>
        <div style={styles.card} onClick={() => navigate("/portfolio")}>
          <h2 style={styles.cardTitle}>Portfolio</h2>
          <p style={styles.cardDescription}>
            Explore my data science projects and analytics work.
          </p>
        </div>
        <div style={styles.card} onClick={() => navigate("/contact")}>
          <h2 style={styles.cardTitle}>Contact</h2>
          <p style={styles.cardDescription}>
            Reach out to discuss opportunities or collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack elements vertically on mobile by default
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#ffffff",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "40px", // Space between Hero and Previews
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  title: {
    fontSize: "2rem", // Scaled-down font size for better responsiveness
    color: "#4b3f33",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7d6f64",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#e0d9d3",
    color: "#4b3f33",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  },
  icon: {
    width: "18px",
    height: "18px",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%", // Make cards take full width
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fafaf7",
    border: "1px solid #e0d9d3",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    width: "90%", // Adjust width to fit smaller screens
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#4b3f33",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#7d6f64",
  },
  // Media Queries
  "@media (min-width: 768px)": {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "50px",
    },
    left: {
      alignItems: "flex-start",
      textAlign: "left",
      marginBottom: 0,
    },
    right: {
      flexDirection: "column",
      gap: "20px",
      alignItems: "flex-start",
    },
    card: {
      width: "300px", // Consistent card size on larger devices
    },
  },
};



export default Home;
