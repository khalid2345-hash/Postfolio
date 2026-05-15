import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  /* Back to Top */
  useEffect(() => {
    const toggleBtn = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Column 1: Brand & Description */}
          <div className="footer-column">
            <div className="footer-brand">
              <h3>Khalid</h3>
              <p className="footer-tagline">Full-Stack Developer crafting beautiful web experiences</p>
            </div>
            
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/
khalid-quadri-882073389" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:quadrikhalid33@email.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#projects">Web Development</a></li>
              <li><a href="#projects">Full-Stack Solutions</a></li>
              <li><a href="#projects">UI/UX Design</a></li>
              <li><a href="#projects">API Development</a></li>
              <li><a href="#projects">Database Design</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column">
            <h4>Get In Touch</h4>
            <ul className="contact-info">
              <li>
                <span className="icon">📧</span>
                <a href="mailto:quadrikhalid33@email.com">quadrikhalid33@email.com</a>
              </li>
              <li>
                <span className="icon">📍</span>
                <p>Lagos, Nigeria</p>
              </li>
              <li>
                <span className="icon">💼</span>
                <p>Available for freelance</p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="footer-cta">
        <div className="cta-content">
          <h2>Let's Build Something Amazing Together</h2>
          <p>Have an idea or project in mind? I'd love to collaborate and create something exceptional.</p>
          <a href="#contact" className="cta-button">
            Start a Project <FaArrowUp style={{ transform: "rotate(-45deg)" }} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>&copy; {currentYear} Abdulquadri Khalid. All rights reserved.</p>
          </div>
          
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
}