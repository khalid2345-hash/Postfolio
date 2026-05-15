import Header from "./component/Header";
import Footer from "./component/Footer";
import "./index.css";
import project from "./assets/Screenshot_14-3-2026_10253_localhost.jpeg";
import project2 from "./assets/Screenshot_13-3-2026_224257_127.0.0.1.jpeg";


export default function Work() {
  return (
    <>
      <Header />

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
                <img src={project} alt="Portfolio project"/>
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
                <img src={project2} alt="Ecommerce project"/>
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
                <img src="/images/api.jpg" alt="API project"/>
              </div>
      
              <div className="project-content">
                <h3>REST API Backend</h3>
      
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

      <Footer />
    </>
  );
}
