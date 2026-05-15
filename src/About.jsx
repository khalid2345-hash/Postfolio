import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./index.css";
import { 
  SiDjango, SiFlask, SiMysql, SiGit, SiGithub, SiReact, SiBootstrap, SiRender, SiLinux 
} from "react-icons/si";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaArrowRight, FaStar, FaCode, FaRocket
} from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

import profile from "./assets/laptop.jpg";
import project from "./assets/sharp.png";
import project2 from "./assets/clothbrand.png";
import project3 from "./assets/screenshot-1776923191973.png";
import project4 from "./assets/landingpage.png";
import project5 from "./assets/TODAY.png";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Reveal
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Back to Top
  useEffect(() => {
    const btn = document.getElementById("topBtn");
    const toggleBtn = () => {
      if (btn) btn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    {
      category: "Frontend",
      icon: FaCode,
      color: "#3B82F6",
      techs: [
        { name: "React", icon: SiReact },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Bootstrap", icon: SiBootstrap }
      ]
    },
    {
      category: "Backend",
      icon: FaRocket,
      color: "#10B981",
      techs: [
        { name: "Python", icon: FaPython },
        { name: "Django", icon: SiDjango },
        { name: "Flask", icon: SiFlask },
        { name: "REST API", icon: TbApi },
        { name: "Authentication", icon: MdSecurity }
      ]
    },
    {
      category: "Database & DevOps",
      icon: FaDatabase,
      color: "#F59E0B",
      techs: [
        { name: "MySQL", icon: SiMysql },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Render", icon: SiRender },
        { name: "Linux", icon: SiLinux }
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Developer Portfolio",
      description: "A responsive portfolio built with React featuring modern UI, animations, and mobile optimization.",
      image: project,
      tags: ["React", "CSS", "JavaScript"],
      link: "http://localhost:5173/Support",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack ecommerce with product pages, cart system, checkout, and order management.",
      image: project2,
      tags: ["Django", "MySQL", "JavaScript"],
      link: "http://127.0.0.1:8000/",
      github: "#"
    },
    {
      id: 3,
      title: "Royal Dine Restaurant",
      description: "Complete restaurant management system combining design, UX, and backend functionality.",
      image: project3,
      tags: ["Django", "MySQL", "HTML/CSS"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "CryptoX Landing Page",
      description: "Gateway to digital finance with real-time crypto tracking and portfolio management.",
      image: project4,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },

    {
      id: 5,
      title: "CryptoX Landing Page but as authentication",
      description: "Gateway to digital finance with real-time crypto tracking and portfolio management.",
      image: project5,
      tags: ["HTML", "CSS", "JavaScript","Django"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <>
      {/* Navigation */}
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content reveal">
            <div className="hero-badge">✨ Full-Stack Developer</div>
            <h2>Hello, I'm <strong className="color">Khalid</strong></h2>
            <h1>Building Modern Web Solutions</h1>
            <p>I create scalable, performant, and beautiful web applications that solve real-world problems.</p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get Started <FaArrowRight />
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Work
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>4+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Tech Stack</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Dedicated</p>
              </div>
            </div>
          </div>

          <div className="hero-image reveal">
            <img src={profile} alt="Khalid" loading="lazy" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about reveal" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm a passionate <strong>full-stack developer</strong> with a love for creating elegant solutions to complex problems. With expertise in both frontend and backend development, I specialize in building applications that are not just functional but truly exceptional.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div>
                    <h4>Clean Code</h4>
                    <p>Maintainable, readable, and efficient code</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div>
                    <h4>Performance</h4>
                    <p>Optimized for speed and scalability</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div>
                    <h4>Innovation</h4>
                    <p>Always learning and adopting new technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills reveal" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div className="skill-card" key={idx}>
                <div className="skill-header" style={{ borderColor: skillGroup.color }}>
                  <skillGroup.icon style={{ color: skillGroup.color }} />
                  <h3>{skillGroup.category}</h3>
                </div>
                <div className="tech-list">
                  {skillGroup.techs.map((tech, i) => (
                    <div className="tech-badge" key={i}>
                      <tech.icon />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects reveal" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work across different domains</p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">
                      View Live <FaArrowRight />
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span className="tag" key={idx}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <a href={project.link} className="icon-link" title="Live Demo">
                      <FaRocket />
                    </a>
                    <a href={project.github} className="icon-link" title="GitHub">
                      <SiGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta reveal">
        <div className="container cta-content">
          <h2>Ready to Work Together?</h2>
          <p>Let's create something amazing. I'm always interested in hearing about new projects.</p>
          <a href="/contact" className="btn btn-primary btn-large">
            Let's Talk <FaArrowRight />
          </a>
        </div>
      </section>



      {/* Back to Top Button */}
      <button id="topBtn" onClick={scrollToTop} className="top-btn">
        ↑
      </button>
    </>
  );
}