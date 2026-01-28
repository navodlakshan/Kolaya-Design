import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/Logo.jpeg";
import send from "../assets/images/Send.png";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Kolaya Design Logo" />
            <h2>KOLAYA DESIGN</h2>
          </div>
          <p>
            Kolaya Design – Crafting digital excellence through innovative design
            and development.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>

        {/* Middle Section: Navigation */}
        <div className="footer-section footer-nav">
          <h3>Navigate</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Middle Section: Services */}
        <div className="footer-section footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Software Development</a></li>
          </ul>
        </div>

        {/* Right Section: Subscription */}
        <div className="footer-section footer-subscribe">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to get updates on our latest work and industry insights.
          </p>
          <div className="subscribe-box">
            <input type="text" placeholder="Send" />
            <button><img src={send} alt="Send" /></button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025 by <span className="highlight">Kolaya Design</span> ||
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
