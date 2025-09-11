import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // scrolling down → hide navbar
    } else {
      setShowNavbar(true); // scrolling up → show navbar
    }
    setLastScrollY(window.scrollY);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
        <li><a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a></li>
        <li><a href="#values" onClick={(e) => { e.preventDefault(); scrollToSection('values'); }}>Values</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a>
        <a href="#values" onClick={(e) => { e.preventDefault(); scrollToSection('values'); }}>Values</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
      </div>
    </nav>
  );
}

export default Navbar;
