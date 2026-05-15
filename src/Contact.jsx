import React, { useState } from "react";
import "./index.css";
import Header from "./component/Header";
import { 
  FiUser, FiMail, FiPhone, FiDollarSign, FiClock, FiMessageSquare,
  FiCheckCircle, FiAlertCircle, FiArrowRight
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa6";



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSubmitStatus("");

  const messageData = {
    name,
    email,
    phone,
    budget,
    timeline,
    message,
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:5001/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      }
    );

    // Get raw response text first
    const text = await response.text();

    // Convert safely to JSON
    const data = text ? JSON.parse(text) : {};

    console.log(data);

    if (response.ok) {
      setSubmitStatus("success");

      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setBudget("");
      setTimeline("");
      setMessage("");
    } else {
      setSubmitStatus("error");
      console.log(data.error || "Something went wrong");
    }
  } catch (error) {
    console.error("ERROR:", error);
    setSubmitStatus("error");
  } finally {
    setLoading(false);

    setTimeout(() => {
      setSubmitStatus("");
    }, 5000);
  }
};
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content reveal">
          <div className="hero-badge">📧 Get In Touch</div>
          <h1>Let's Build Something Great Together</h1>
          <p>Have a project in mind? I'd love to hear about it. Fill out the form below and let's start a conversation.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          
          {/* Contact Form */}
          <div className="contact-form-wrapper reveal">
            <div className="form-header">
              <h2>Send me a Message</h2>
              <p>I usually respond within 24 hours</p>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="status-message success">
                <FiCheckCircle />
                <div>
                  <h4>Message Sent! ✅</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="status-message error">
                <FiAlertCircle />
                <div>
                  <h4>Oops! Something went wrong</h4>
                  <p>Please try again or use alternative contact methods below.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              
              {/* Row 1: Name & Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <div className="input-wrapper">
                    <FiUser />
                    <input
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-wrapper">
                    <FiMail />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Budget */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-wrapper">
                    <FiPhone />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      id="phone-number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <div className="input-wrapper">
                    <FiDollarSign />
                    <select
                      name="budget"
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      <option value="">Select a budget</option>
                      <option value="$200 - $500">$200 - $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Timeline */}
              <div className="form-group full-width">
                <label htmlFor="timeline">Project Timeline</label>
                <div className="input-wrapper">
                  <FiClock />
                  <select
                    name="timeline"
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option value="">Select a timeline</option>
                    <option value="ASAP">ASAP (1-2 weeks)</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2-3 Months">2-3 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="form-group full-width">
                <label htmlFor="message">Tell me about your project *</label>
                <div className="input-wrapper textarea">
                  <FiMessageSquare />
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Describe your project, goals, and any specific requirements..."
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiArrowRight />
                  </>
                )}
              </button>

              <p className="form-note">
                ✓ I usually reply within 24 hours • No spam guaranteed
              </p>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="contact-info-wrapper reveal">
            
            {/* Quick Contact Card */}
            <div className="info-card">
              <h3>Quick Contact</h3>
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-content">
                  <p className="info-label">Email</p>
                  <a href="mailto:quadrikhalid33@gmail.com">quadrikhalid33@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-content">
                  <p className="info-label">Phone</p>
                  <a href="tel:+2348159283025">+234 (815) 928 3025</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiClock />
                </div>
                <div className="info-content">
                  <p className="info-label">Response Time</p>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="info-card">
              <h3>Connect With Me</h3>
              <div className="social-grid">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn github" title="GitHub">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/khalid-quadri-882073389" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" title="LinkedIn">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter" title="Twitter">
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="social-btn telegram" title="Telegram">
                  <FaTelegram />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* About Card */}
            <div className="info-card">
              <h3>About Me</h3>
              <p>I'm a full-stack developer passionate about creating elegant solutions. Whether it's a small project or a large-scale application, I'm ready to help bring your ideas to life.</p>
              <div className="skills-tags">
                <span className="tag">React</span>
                <span className="tag">Django</span>
                <span className="tag">Full-Stack</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="contact-methods reveal">
        <div className="methods-container">
          <h2>Or reach out via</h2>
          <div className="methods-grid">
            
            <a href="https://wa.me/1234567890" className="method-card whatsapp">
              <div className="method-icon">
                <FaWhatsapp />
              </div>
              <h4>WhatsApp</h4>
              <p>Chat with me directly</p>
              <span className="arrow">→</span>
            </a>

            <a href="https://t.me/yourusername" className="method-card telegram">
              <div className="method-icon">
                <FaTelegram />
              </div>
              <h4>Telegram</h4>
              <p>Quick and instant messaging</p>
              <span className="arrow">→</span>
            </a>

            <a href="mailto:quadrikhalid33@gmail.com" className="method-card email">
              <div className="method-icon">
                <FiMail />
              </div>
              <h4>Direct Email</h4>
              <p>Formal inquiries welcome</p>
              <span className="arrow">→</span>
            </a>

            <a href="https://www.linkedin.com/in/
khalid-quadri-882073389" className="method-card linkedin">
              <div className="method-icon">
                <FaLinkedin />
              </div>
              <h4>LinkedIn</h4>
              <p>Professional connections</p>
              <span className="arrow">→</span>
            </a>

          </div>
        </div>
      </section>

    </>
  );
}
