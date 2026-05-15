import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/ChatGPT Image Feb 4, 2026, 12_15_13 AM.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Smooth scroll
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleNavClick();
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        {/* LOGO */}
        <div className="logo-wrapper">
          <a
            href="/"
            className="logo-link"
            onClick={(e) => scrollToSection(e, "home")}
          >
            <img src={logo} alt="Khalid" className="logo-image" />
            <span className="logo-text">Khalid</span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-desktop">
          <ul className="nav-menu">
            <li>
              <Link to="/" >
  Home
</Link>
            </li>
            <li>
              <Link to="/#About">
  Contact
</Link>
            </li>
            <li>
              <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
             <Link to="/contact" className="nav-cta">
  Contact
</Link>
            </li>
          </ul>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
           {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <nav className={`nav-mobile ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-menu">
          <li>
            <a href="/" onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-cta"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}