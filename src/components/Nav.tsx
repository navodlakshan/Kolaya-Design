import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Nav.css";
import logo from "../assets/images/Logo.jpeg";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

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
      }, 1500);

      // Update active section based on scroll position
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const sections = [
        { id: "home", offset: 0 },
        { id: "services", offset: document.getElementById("services")?.offsetTop || 0 },
        { id: "projects", offset: document.getElementById("projects")?.offsetTop || 0 },
        { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
        { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 },
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    updateActiveSection();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", offset: -100 },
    { id: "services", label: "Services", offset: -80 },
    { id: "projects", label: "Projects", offset: -80 },
    { id: "about", label: "About Us", offset: -80 },
    { id: "contact", label: "Contact Us", offset: -80 },
  ];

  return (
    <header className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Kolaya Design Logo" />
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNavClick}
            className="logo-link"
          >
            <span>KOLAYA DESIGN</span>
          </Link>
        </div>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  onClick={handleNavClick}
                  className={activeSection === item.id ? "active" : ""}
                  activeClass="active"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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