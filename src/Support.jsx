import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./index.css";
import { SiDjango, SiFlask, SiMysql, SiGit, SiGithub, SiReact,SiBootstrap,SiRender,
  SiLinux } from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDatabase,
  
} from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

import proile from "./assets/ChatGPT Image Feb 6, 2026, 12_19_44 AM.png";
import project from "./assets/Screenshot_14-3-2026_10253_localhost.jpeg";
import project2 from "./assets/Screenshot_28-3-2026_214028_127.0.0.1.jpeg";
import project3 from "./assets/Screenshot_28-3-2026_213225_127.0.0.1.jpeg";


export default function Support() {
   
  const [menuOpen, setMenuOpen] = useState(false);

  // /* Typewriter Effect */
  // useEffect(() => {
  //   const words = ["Frontend-Developer","Backend-Developer"];
  //   let i = 0,
  //     j = 0,
  //     del = false;

  //   function type() {
  //     const current = words[i];
  //     const el = document.getElementById("typewriter");
  //     if (!el) return;

  //     el.textContent = current.substring(0, j);

  //     if (!del) j++;
  //     else j--;

  //     if (j === current.length) {
  //       del = true;
  //       setTimeout(type, 3000);
  //       return;
  //     }

  //     if (j === 0) {
  //       del = false;
  //       i = (i + 1) % words.length;
  //     }

  //     setTimeout(type, del ? 80 : 120);
  //   }

  //   type();
  // }, []);

  /* Scroll Reveal */
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

  /* Back to Top */
  useEffect(() => {
    const btn = document.getElementById("topBtn");

    const toggleBtn = () => {
      if (btn) btn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  // clock
  const [time, setTime] = React.useState("");

React.useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
    
{/* HOME */}
<section className="home" id="home" loading="lazy">
  <div className="home-wrapper">

    {/* LEFT SIDE */}
    <div className="home-left">

      <div className="home-text">
        <h1>I’m <span className="accent">Khalid</span></h1>

        <p className="tagline">
          A creative <span className="accent">fullstack</span> developer
          building modern web applications
        </p>
      </div>

      <div className="home-actions">
        <div className="info-box location">
          <span>🕒 Lagos • {new Date().toLocaleTimeString()}</span>
        </div>

        <a href="contact" className="cta-btn">
          Let’s work together →
        </a>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="avatar-card">
      <img src={proile} alt="Khalid avatar" loading="lazy"/>
    </div>

  </div>
</section>




        {/* <img
          src="https://via.placeholder.com/300"
          alt=""
          className="profile-pic"
        /> */}
        {/* <div style={photostyle} >
          </div> */}
      

      {/* ABOUT */}
<section className="about reveal" id="about" loading="lazy">
  <div className="about-container">

    <h2 className="section-title">About Me</h2>

    <p className="about-description">
      I’m <strong>Khalid</strong>, a passionate web developer who enjoys building
      modern, scalable, and user-focused web applications.
      I care deeply about clean code, performance, and continuous learning.
    </p>

    {/* HIGHLIGHTS */}
<div className="about-highlights-slider">
  <div className="about-highlights">
    
    <div className="highlight">
      <h4>💻 Development</h4>
      <p>Building responsive, accessible, and interactive interfaces.</p>
    </div>

    <div className="highlight">
      <h4>🎯 Quality</h4>
      <p>Clean architecture, performance, and maintainability.</p>
    </div>

    <div className="highlight">
      <h4>📈 Growth</h4>
      <p>Always improving and learning modern technologies.</p>
    </div>

  </div>
</div>

{/* SKILLS */}
<h3 className="skills-title">Technical Skills</h3>

<div className="skills-grid">

  {/* FRONTEND */}
  <div className="skills-card">
    <h4 className="skills-heading">Frontend</h4>
    <div className="tech-icons">

      <div className="tech-item">
        <FaHtml5 />
        <span>HTML5</span>
      </div>

      <div className="tech-item">
        <FaCss3Alt />
        <span>CSS3</span>
      </div>

      <div className="tech-item">
        <FaJs />
        <span>JavaScript</span>
      </div>

      <div className="tech-item">
        <SiReact />
        <span className="frontend-badge">React</span>
      </div>

      <div className="tech-item">
        <SiBootstrap />
        <span className="frontend-badge">Bootstrap</span>
      </div>

    </div>
  </div>


  {/* BACKEND */}
  <div className="skills-card">
    <h4 className="skills-heading">Backend</h4>
    <div className="tech-icons">

      <div className="tech-item">
        <FaPython />
        <span>Python</span>
      </div>

      <div className="tech-item">
        <SiDjango />
        <span className="backend-badge">Django</span>
      </div>

      <div className="tech-item">
        <SiFlask />
        <span className="backend-badge">Flask</span>
      </div>

      <div className="tech-item">
        <TbApi />
        <span className="backend-badge">REST API</span>
      </div>

      <div className="tech-item">
        <MdSecurity />
        <span className="backend-badge">Authentication</span>
      </div>

    </div>
  </div>


  {/* DATABASE */}
  <div className="skills-card">
    <h4 className="skills-heading">Database</h4>
    <div className="tech-icons">

      <div className="tech-item">
        <FaDatabase />
        <span>MySQL</span>
      </div>

      <div className="tech-item">
        <SiMysql />
        <span className="backend-badge">SQLite</span>
      </div>

      <div className="tech-item">
        <TbApi />
        <span className="backend-badge">Database Design</span>
      </div>

    </div>
  </div>


  {/* TOOLS */}
  <div className="skills-card">
    <h4 className="skills-heading">Tools & DevOps</h4>
    <div className="tech-icons">

      <div className="tech-item">
          <SiGit />
        <span className="backend-badge">Git</span>
      </div>

      <div className="tech-item">
        <SiGithub />
        <span className="backend-badge">GitHub</span>
      </div>

      <div className="tech-item">
        <SiRender />
        <span className="backend-badge">Render</span>
      </div>

      <div className="tech-item">
        <SiLinux />
        <span className="backend-badge">Linux</span>
      </div>

    </div>
  </div>

</div>

    {/* CTA */}
    <div className="about-cta">
      <a href="/portfolio" className="about-btn">Veiw project →</a>
    </div>

  </div>
</section>



     {/* WORK */}
<section className="work reveal" id="work">
  <div className="work-container">

    <h2 className="section-title">My Projects</h2>
    <p className="section-subtitle">
      Some projects that demonstrate my frontend and backend development skills.
    </p>

    <div className="work-cards">

      {/* PROJECT 1 */}
      <div className="work-card">

        <div className="project-image">
          <img src={project} alt="Portfolio project" loading="lazy"/>
        </div>

        <div className="project-content">
          <h3>Developer Portfolio</h3>

          <p>
            A responsive developer portfolio built with React featuring
            modern UI design, animations, and mobile optimization.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="http://localhost:5173/Support" className="project-btn">Live Demo</a>
            <a href="#" className="project-btn github">GitHub</a>
          </div>
        </div>

      </div>


      {/* PROJECT 2 */}
      <div className="work-card">

        <div className="project-image">
          <img src={project2} alt="Ecommerce project" loading="lazy"/>
        </div>

        <div className="project-content">
          <h3>E-commerce Website</h3>

          <p>
            A full-stack ecommerce platform with product pages, cart system,
            checkout functionality, and order management.
          </p>

          <div className="tech-stack">
            <span>Django</span>
            <span>MySQL</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="http://127.0.0.1:8000/" className="project-btn">Live Demo</a>
            <a href="#" className="project-btn github">GitHub</a>
          </div>
        </div>

      </div>


      {/* PROJECT 3 */}
      <div className="work-card">

        <div className="project-image">
          <img src={project3} alt="API project" loading="lazy"/>
        </div>

        <div className="project-content">
          <h3>A luxury hair E-commerce Platform</h3>

          <p>
            Backend API built with Django REST Framework handling
            authentication, user data, and database operations.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Django</span>
            <span>REST API</span>
          </div>

          <div className="project-links">
            <a href="#" className="project-btn">Live Demo</a>
            <a href="#" className="project-btn github">GitHub</a>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

<footer className="footer">

      <div className="footer-container">

        {/* CTA Section */}
        <div className="footer-cta">
          <h2>Let’s Build Something Amazing Together</h2>
          <p>Have an idea, project, or opportunity? I’d love to hear about it.</p>
          <a href="/contact" className="footer-btn">Get In Touch</a>
        </div>

             </div>

      
    </footer>
      

      {/* <Footer /> */}
    </>
  );
}
