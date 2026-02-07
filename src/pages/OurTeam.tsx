import React from "react";
import "../styles/OurTeam.css";
import Member1 from "../assets/images/Member1.png";
import Member2 from "../assets/images/Member2.png";
import Member3 from "../assets/images/Member3.png";

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Creative Director & Lead Designer",
      image: Member1,
      description: "With over 10 years of experience in visual design, Alex leads our creative vision with an eye for detail and a passion for storytelling through design."
    },
    {
      id: 2,
      name: "Ben Carter",
      role: "Full-Stack Developer",
      image: Member2,
      description: "Ben combines technical expertise with creative problem-solving to build robust, scalable digital solutions that exceed client expectations."
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "UI/UX Specialist",
      image: Member3,
      description: "Sophia crafts intuitive user experiences that bridge the gap between beautiful design and functional interfaces, ensuring maximum user engagement."
    }
  ];

  return (
    <div className="our-team-container">
      {/* Hero Section */}
      <section className="team-hero-section">
        <div className="hero-content">
          <h1 className="team-hero-title">Our Team</h1>
          <h2 className="team-hero-subtitle">
            The Creative Minds Behind Koleya Design
          </h2>
          <p className="team-hero-description">
            We are a collective of passionate designers and developers, united by a common goal: to transform your ideas into exceptional digital realities.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <div className="team-members-section">
        <div className="team-members-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                
                <div className="member-description">
                  <p>{member.description}</p>
                </div>
                
                <div className="member-social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Portfolio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="team-stats-section">
        <div className="stat-item">
          <h4 className="stat-number">50+</h4>
          <p className="stat-label">Projects Completed</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h4 className="stat-number">10+</h4>
          <p className="stat-label">Years Experience</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h4 className="stat-number">100%</h4>
          <p className="stat-label">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;