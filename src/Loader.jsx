import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + Math.random() * 30;
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      {/* Background gradient */}
      <div className="loader-bg"></div>

      {/* Main loader content */}
      <div className="loader-content">
        
        {/* Animated Logo/Brand */}
        <div className="loader-logo">
          <div className="logo-circle">
            <span>K</span>
          </div>
          <h1>Khalid</h1>
        </div>

        {/* Animated Loading Spinner */}
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>

        {/* Loading text */}
        <p className="loader-text">Wait a minute...</p>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>

        {/* Loading percentage */}
        <div className="loader-percentage">{Math.min(Math.floor(progress), 100)}%</div>

        {/* Floating particles background */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${i * 0.1}s`,
              '--duration': `${3 + Math.random() * 2}s`,
              '--left': `${Math.random() * 100}%`,
              '--top': `${Math.random() * 100}%`,
            }}></div>
          ))}
        </div>

      </div>
    </div>
  );
}