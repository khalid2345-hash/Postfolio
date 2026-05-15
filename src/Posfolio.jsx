import React, { useEffect, useState } from "react";
import "./project.css";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔴 Change this when deploying
  const API = "http://127.0.0.1:5000";

  // ✅ Fetch projects with error handling
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/projects`);

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Delete with feedback
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this project?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API}/api/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Admin-Password": "rom2026",
        },
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      // Remove from UI instantly (better UX)
      setProjects((prev) => prev.filter((p) => p.id !== id));

    } catch (err) {
      console.error(err);
      alert("Failed to delete project.");
    }
  };

  // ✅ UI states
  if (loading) {
    return <p className="status-message">Loading projects...</p>;
  }

  if (error) {
    return <p className="status-message error">{error}</p>;
  }

  return (
    <div className="project-list-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((p) => (
            <div key={p.id} className="project-card">

              {/* Image */}
              {p.image && (
                <img
                  src={`${API}${p.image}`}
                  alt={p.title}
                  className="project-image"
                />
              )}

              <div className="project-content">
                <h3>{p.title}</h3>

                <p className="project-description">
                  {p.description}
                </p>

                <p className="project-tech">
                  <strong>Tech:</strong> {p.tech}
                </p>

                <div className="project-buttons">

                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn demo"
                    >
                      Live Demo
                    </a>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github"
                    >
                      GitHub
                    </a>
                  )}

                  {/* Optional Delete Button */}
                  {/* 
                  <button
                    className="project-btn delete"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button> 
                  */}

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}