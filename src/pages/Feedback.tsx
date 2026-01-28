import React, { useState, useEffect } from "react";
import "../styles/Feedback.css";
import StarIcon from "@mui/icons-material/Star";
import Avatar1 from "../assets/images/Avatar1.png";
import Avatar2 from "../assets/images/Avatar2.png";
import Avatar3 from "../assets/images/Avatar3.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
  rating: number;
  avatarColor?: string;
  initials?: string;
}

const Feedback: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Founder, Luna Cosmetics",
      testimonial: "Kolaya Design transformed our brand identity completely! The team delivered a stunning logo and packaging that tripled our customer engagement. Highly professional and incredibly creative.",
      avatar: Avatar1,
      rating: 5,
      avatarColor: "#E8F4FD",
      initials: "MR"
    },
    {
      id: 2,
      name: "James Wilson",
      role: "CEO, TechNova Solutions",
      testimonial: "Outstanding work on our website redesign. The team understood our vision perfectly and delivered beyond expectations. User engagement increased by 150% after launch.",
      avatar: Avatar2,
      rating: 5,
      avatarColor: "#F0F7FF",
      initials: "JW"
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Marketing Director, Bloom & Grow",
      testimonial: "The social media graphics package was exactly what we needed. Professional, on-brand, and delivered ahead of schedule. Our engagement rates have never been higher!",
      avatar: Avatar3,
      rating: 5,
      avatarColor: "#F5F0FF",
      initials: "SC"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="feedback-section" id="feedback">
      <div className="feedback-wrapper">
        
        {/* LEFT CONTENT */}
        <div className="feedback-left">
          <p className="feedback-subtitle">Customer Stories</p>
          <h2 className="feedback-title">What Our Happy Clients Say</h2>
          <p className="feedback-tagline">
            Building Success Stories, One Pixel at a Time
          </p>
          
          {/* Mobile dots - only show on mobile */}
          <div className="mobile-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="feedback-right">
          <div className="slideshow-container">
            {/* Navigation Buttons */}
            <button 
              className="nav-button prev-button" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ArrowBackIosNewIcon />
            </button>
            
            <button 
              className="nav-button next-button" 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ArrowForwardIosIcon />
            </button>

            {/* Slides */}
            <div className="slides-wrapper">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${
                    index === currentSlide ? 'active' : 
                    index === (currentSlide - 1 + testimonials.length) % testimonials.length ? 'prev' : 
                    index === (currentSlide + 1) % testimonials.length ? 'next' : 'hidden'
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  {/* Avatar - using actual image */}
                  <div className="client-avatar">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="avatar-image"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="client-name">{testimonial.name}</h3>
                  <p className="client-role">{testimonial.role}</p>

                  {/* Stars */}
                  <div className="star-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="star-icon" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="testimonial-text">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>

            {/* Pagination dots - hide on mobile */}
            <div className="testimonial-dots desktop-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;