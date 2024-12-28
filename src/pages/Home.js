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
    padding: "80px 50px", // Top padding to lower the hero section
    backgroundColor: "#ffffff", // Pure white background
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
    width: "150px",
    height: "150px",
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
    fontSize: "3rem",
    color: "#4b3f33", // Dark brown
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#7d6f64", // Muted beige
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#e0d9d3", // Soft beige-gray
    color: "#4b3f33", // Dark brown
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "background-color 0.3s ease-in-out",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flex: 1,
  },
  card: {
    backgroundColor: "#fafaf7", // Very light beige
    border: "1px solid #e0d9d3", // Subtle beige border
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#4b3f33", // Dark brown
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#7d6f64", // Muted beige
  },
  // Media Query for responsiveness
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // Stack items vertically
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "40px 20px",
    },
    left: {
      order: 1, // Ensure the hero section appears first
      alignItems: "center",
      textAlign: "center",
      maxWidth: "100%",
    },
    right: {
      order: 2, // Ensure previews appear below the hero section
      width: "100%",
      marginTop: "20px", // Add spacing between hero and previews
    },
    card: {
      width: "100%", // Make cards take full width
    },
    title: {
      fontSize: "2.5rem", // Adjust font size for smaller screens
    },
    subtitle: {
      fontSize: "1.2rem", // Adjust subtitle size for smaller screens
    },
    button: {
      padding: "10px 15px", // Adjust button size
      fontSize: "0.9rem", // Adjust font size
    },
  },
};



export default Home;
