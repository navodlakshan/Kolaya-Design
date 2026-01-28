import React, { useEffect, useState } from "react";
import "../styles/ProgressIndicator.css";

const ProgressIndicator: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  // Handle touch for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.currentTarget.classList.add("touch-active");
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.currentTarget.classList.remove("touch-active");
    scrollToTop();
  };

  useEffect(() => {
    // Check device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    // Scroll progress and visibility
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setProgress(scrollPercent);

      // Different thresholds for different devices
      let threshold;
      if (isMobile) {
        threshold = 100;
      } else if (isTablet) {
        threshold = 200;
      } else {
        threshold = 300;
      }

      setVisible(scrollTop > threshold);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkDeviceType);
    };
  }, [isMobile, isTablet]);

  // Get size class based on device
  const getSizeClass = () => {
    if (isMobile) return "mobile";
    if (isTablet) return "tablet";
    return "desktop";
  };

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""} ${getSizeClass()}`}
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      {/* Progress ring - hidden on mobile */}
      {!isMobile && (
        <svg className="progress-ring" width="100%" height="100%" viewBox="0 0 42 42">
          <circle
            className="progress-ring-background"
            cx="21"
            cy="21"
            r="19"
            strokeWidth="2"
          />
          <circle
            className="progress-ring-circle"
            cx="21"
            cy="21"
            r="19"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 19}`}
            strokeDashoffset={`${2 * Math.PI * 19 * (1 - progress / 100)}`}
          />
        </svg>
      )}
      
      {/* Double arrow icon */}
      <span className="arrow-icon">
        <svg 
          width="200%" 
          height="200%" 
          viewBox="0 -1 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top arrow */}
          <path 
            d="M12 6L8 10H16L12 6Z" 
            fill="white"
          />
          {/* Bottom arrow */}
          <path 
            d="M12 10L8 14H16L12 10Z" 
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
};

export default ProgressIndicator;