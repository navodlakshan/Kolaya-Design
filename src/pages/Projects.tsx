import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import Card1 from "../assets/images/Graphic Design.png";
import Card2 from "../assets/images/Web Development.png";
import Card3 from "../assets/images/App Development.png";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects = [
    {
      id: 1,
      category: "graphic-design",
      title: "Graphic Design",
      description: "Transform your brand identity with stunning visuals. From logos to complete branding packages, we create designs that tell your unique story and captivate your audience.",
      image: Card1,
      tags: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW"]
    },
    {
      id: 2,
      category: "web-development",
      title: "Web Development",
      description: "Build powerful, responsive websites that drive results. We create fast, SEO-optimized sites with intuitive user experiences that convert visitors into customers.",
      image: Card2,
      tags: ["React.js", "Angular", "MERN Stack"]
    },
    {
      id: 3,
      category: "app-development",
      title: "App Development",
      description: "Develop custom mobile applications for iOS and Android. We build sleek, functional apps that solve real problems and deliver exceptional user experiences.",
      image: Card3,
      tags: ["Next.js", "MERN Stack", "TypeScript"]
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="title-section">
        <h1 className="title">Crafting Digital Excellence</h1>
        <p className="subtitle">We deliver exceptional digital solutions that drive results and exceed expectations.</p>
      </section>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button 
          className={`filter-tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          ALL WORK
        </button>
        <button 
          className={`filter-tab ${activeTab === "graphic-design" ? "active" : ""}`}
          onClick={() => setActiveTab("graphic-design")}
        >
          GRAPHIC DESIGN
        </button>
        <button 
          className={`filter-tab ${activeTab === "web-development" ? "active" : ""}`}
          onClick={() => setActiveTab("web-development")}
        >
          WEB DEVELOPMENT
        </button>
        <button 
          className={`filter-tab ${activeTab === "app-development" ? "active" : ""}`}
          onClick={() => setActiveTab("app-development")}
        >
          APP DEVELOPMENT
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <button className="view-project-btn">View Project</button>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* If no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found for the selected category. Please try another filter.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;