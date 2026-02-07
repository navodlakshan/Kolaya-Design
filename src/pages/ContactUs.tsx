import React, { useState } from "react";
import "../styles/ContactUs.css";
import SendIcon from "../assets/images/Send.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-wrapper">
        {/* Contact Information Section */}
        <div className="contact-info-section">
          <div className="contact-info-content">
            <h1 className="contact-main-title">Get In Touch</h1>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div className="contact-info-details">
                  <h3 className="contact-info-title">Phone</h3>
                  <p className="contact-info-text">+123 456 7890</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-info-details">
                  <h3 className="contact-info-title">Email</h3>
                  <p className="contact-info-text">contact@kolaya.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div className="contact-info-details">
                  <h3 className="contact-info-title">Address</h3>
                  <p className="contact-info-text">1234, High Level Road, Colombo, Sri Lanka</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-info-details">
                  <h3 className="contact-info-title">Business Hours</h3>
                  <p className="contact-info-text">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="social-media-section">
              <h3 className="social-title">Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook"><FacebookIcon /></a>
                <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href="#" className="social-icon" aria-label="Twitter"><TwitterIcon /></a>
                <a href="#" className="social-icon" aria-label="Instagram"><InstagramIcon /></a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="contact-form-section">
          <div className="form-header">
            <h1 className="contact-title">Send us a Message</h1>
            <p className="form-subtitle">We'll get back to you as soon as possible</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your E-mail"
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="form-textarea"
                rows={4}
              />
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              {SendIcon && <img src={SendIcon} alt="Send" className="send-icon" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;