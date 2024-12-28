import React from "react";
import { useNavigate } from "react-router-dom";
import contactIcon from "../assets/contact-mail.png";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-left">
        <img
          src={require("../assets/mypic.jpeg")}
          alt="Jihane Essakhi"
          className="home-image"
        />
        <div className="home-text-container">
          <h1 className="home-title">Hello, I'm Jihane.</h1>
          <p className="home-subtitle">Data Science Student | Analytics Enthusiast</p>
          <button className="home-button" onClick={() => navigate("/contact")}>
            <img src={contactIcon} alt="Contact Icon" className="home-icon" /> Contact Me
          </button>
        </div>
      </div>

      {/* Preview Cards */}
      <div className="home-right">
        <div className="home-card" onClick={() => navigate("/about")}>
          <h2 className="home-card-title">About</h2>
          <p className="home-card-description">
            Learn more about me and my background.
          </p>
        </div>
        <div className="home-card" onClick={() => navigate("/portfolio")}>
          <h2 className="home-card-title">Portfolio</h2>
          <p className="home-card-description">
            Explore my data science projects and analytics work.
          </p>
        </div>
        <div className="home-card" onClick={() => navigate("/contact")}>
          <h2 className="home-card-title">Contact</h2>
          <p className="home-card-description">
            Reach out to discuss opportunities or collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
