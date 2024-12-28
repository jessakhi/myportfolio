import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Hello, I'm Jihane.</h1>
        <p style={styles.subtitle}>Data Science Student | Analytics Enthusiast</p>
        <button style={styles.button}>Contact Me</button>
      </div>
      <div style={styles.imageContainer}>
      <img
  src="https://avatars.githubusercontent.com/u/12345678?v=4" // Replace with your GitHub avatar URL
  alt="Jihane's Avatar"
  style={styles.image}
/>

      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    minHeight: "80vh",
    backgroundColor: "#f6f6f2",
  },
  textContainer: {
    maxWidth: "50%",
  },
  title: {
    fontSize: "3.5rem",
    color: "#2e4f3c",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#556b58",
    marginBottom: "30px",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#87a687",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  imageContainer: {
    maxWidth: "40%",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default Hero;
