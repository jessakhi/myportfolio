import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/myportfolio">
      <Navbar />
      <div style={{ minHeight: "80vh" }}> {/* Ensures space between Navbar and Footer */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} /> {/* Redirect to Home for unmatched routes */}
</Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
