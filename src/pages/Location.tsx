import React, { useEffect, useState } from "react";
import "../styles/Location.css";

const Location: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for iframe
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="location-container">

      <div className="map-wrapper">
        {isLoading && <div className="map-loading">Loading map...</div>}
        <div className={`map-container ${isLoading ? "loading" : ""}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.280947107931!2d79.9424217349368!3d6.875768900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251a276f5822f%3A0x3a1d702e1a7773bc!2sAqua%20Hub%20Fish%20Farm%20(Koi)!5e0!3m2!1sen!2slk!4v1769581116764!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Our Location"
            className="google-map"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;