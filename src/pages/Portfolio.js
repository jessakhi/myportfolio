import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Importing all images
import cielmonp from "../assets/cielmonp.jpg";
import fentyb from "../assets/fentyb.jpg";
import heartd from "../assets/heartd.jpg";
import itimonp from "../assets/itimonp.jpg";
import mlunet from "../assets/mlunet.jpg";
import mnsitf from "../assets/mnsitf.jpg";
import othello from "../assets/othello.jpg";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map project names to images
  const projectImages = {
    fenty_beauty_data_analysis: fentyb,
    heart_disease: heartd,
    iti_aventure: itimonp,
    ml_unet_and_variants: mlunet,
    mnsit_fashion_R: mnsitf,
    othello_game: othello,
    pao_ciel_mon_point_eau: cielmonp, // Example
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users/jessakhi/repos")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      });
  }, []);

  // Function to truncate long descriptions
  const truncateDescription = (description) => {
    if (!description) return "No description available.";
    const maxLength = 120; // Approximate character limit for three lines
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>My Projects</h2>
      <p style={styles.description}>
        Explore some of my data science and analytics projects.
      </p>
      {loading ? (
        <p style={styles.placeholder}>Loading projects...</p>
      ) : (
        <div style={styles.grid}>
          {projects.map((project, index) => {
            const image = projectImages[project.name] || project.owner.avatar_url; // Use mapped image or fallback to avatar

            return (
              <motion.div
                key={project.id}
                style={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <img src={image} alt={project.name} style={styles.image} />
                <h3 style={styles.cardTitle}>{project.name.replace(/_/g, " ")}</h3>
                <p style={styles.cardDescription}>
                  {truncateDescription(project.description)}
                </p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  View on GitHub
                </a>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    backgroundColor: "#f9f6f2", // Light beige background
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    fontSize: "2.5rem",
    color: "#4b3f33", // Dark brown
    marginBottom: "20px",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#7d6f64", // Muted beige
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #e0ded9", // Subtle border
    borderRadius: "10px",
    backgroundColor: "#ffffff", // White background for cards
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#4b3f33", // Dark brown
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#7d6f64", // Muted beige
    marginBottom: "15px",
  },
  link: {
    color: "#a87c5a", // Light brown
    textDecoration: "none",
    fontWeight: "bold",
  },
  placeholder: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#7d6f64",
  },
};

export default Portfolio;
