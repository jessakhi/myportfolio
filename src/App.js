import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  return (
    <Router basename="/myportfolio">
      <Navbar onLanguageChange={toggleLanguage} language={language} />
      <div style={{ minHeight: "80vh" }}>
        <AnimatedRoutes language={language} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
