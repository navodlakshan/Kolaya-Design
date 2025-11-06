import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/images/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

      // Clear previous timeout and set new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowNavbar(true);
      }, 1500); // Show navbar when scrolling stops
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Kolaya Design Logo" />
          <Link to="/" onClick={handleNavClick}>
            <span>KOLAYA DESIGN</span>
          </Link>
        </div>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleNavClick}>Home</Link>
            </li>
            <li>
              <Link to="/services" onClick={handleNavClick}>Services</Link>
            </li>
            <li>
              <a href="#projects" onClick={handleNavClick}>Projects</a>
            </li>
            <li>
              <a href="#about" onClick={handleNavClick}>About Us</a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick}>Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;