import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <img src="/images/crane.jpg" alt="Background" className="hero-img" />
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Eef Kay Tech</span>
        </h1>
        <p className="hero-subtitle">
          Empowering Your Business with <span>Tailored Engineering Solutions</span>.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
