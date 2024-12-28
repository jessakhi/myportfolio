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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100vh",
    padding: "50px 30px", // Reduced padding
    backgroundColor: "#ffffff",
    gap: "20px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "20px",
    maxWidth: "40%",
    flex: 1,
  },
  image: {
    width: "120px", // Reduced size
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "2.5rem", // Reduced size for smaller screens
    color: "#4b3f33",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem", // Reduced subtitle size
    color: "#7d6f64",
    marginBottom: "20px",
  },
  button: {
    padding: "8px 16px", // Smaller button
    backgroundColor: "#e0d9d3",
    color: "#4b3f33",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem", // Smaller font
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background-color 0.3s ease-in-out",
  },
  icon: {
    width: "18px", // Reduced icon size
    height: "18px",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flex: 1,
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
  },
  cardTitle: {
    fontSize: "1.3rem", // Slightly smaller
    color: "#4b3f33",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#7d6f64",
  },
  // Media Query for responsiveness
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // Stack items vertically
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "30px 20px",
    },
    left: {
      order: 1,
      alignItems: "center",
      textAlign: "center",
      maxWidth: "100%",
    },
    right: {
      order: 2,
      width: "100%",
      marginTop: "20px",
    },
    card: {
      width: "100%",
    },
    title: {
      fontSize: "2rem", // Adjust font size for smaller screens
    },
    subtitle: {
      fontSize: "1rem",
    },
    button: {
      padding: "8px 12px",
      fontSize: "0.8rem",
    },
    image: {
      width: "100px", // Smaller image on phones
      height: "100px",
    },
  },
};

export default Home;
