import React, { useEffect, useState } from "react";
import "../styles/heroSection.css";
import Slide1 from "../assets/images/web development.jpg";
import Slide2 from "../assets/images/video-editor-content-creator-filming-tutorial-about-professionally-editing-footage.jpg";
import Slide3 from "../assets/images/ui-ux-representations-with-laptop.jpg";
import Slide4 from "../assets/images/group-asia-young-creative-people-smart-casual-wear-discussing-business-brainstorming.jpg";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WEBSITE DEVELOPMENT AND DESIGN",
      description: "Creating stunning, responsive websites that captivate your audience and drive results",
      image: Slide1
    },
    {
      title: "VIDEO EDITING AND CONTENT CREATION",
      description: "Transforming your vision into compelling visual stories that engage and inspire",
      image: Slide2
    },
    {
      title: "UI/UX DESIGN AND DEVELOPMENT",
      description: "Crafting intuitive user experiences with beautiful interfaces that users love",
      image: Slide3
    },
    {
      title: "BRANDING AND DIGITAL STRATEGY",
      description: "Building powerful brands that stand out and connect with your target audience",
      image: Slide4
    }
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset animation when slide changes
  useEffect(() => {
    const indicators = document.querySelectorAll('.indicator-progress');
    indicators.forEach(indicator => {
      (indicator as HTMLElement).style.animation = 'none';
      void (indicator as HTMLElement).offsetWidth; // Trigger reflow
      (indicator as HTMLElement).style.animation = '';
    });
  }, [currentSlide]);

  return (
    <section className="hero-section">
      {/* Background Slides */}
      <div className="hero-background">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-bg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          <div className={`slide-content ${true ? "active" : ""}`}>
            <h1 className="hero-title">
              {slides[currentSlide].title}
            </h1>
            <p className="hero-description">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Position Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="indicator-progress"></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;