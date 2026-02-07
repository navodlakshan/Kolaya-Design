import React from "react";
import "../styles/Services.css";
import Image1 from "../assets/images/Branding.png"; 
import Image2 from "../assets/images/WebDesign.png"; 
import Image3 from "../assets/images/Software.png"; 
import Image4 from "../assets/images/Digital.png";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <img src={Image1} alt="Branding & Graphic Design" />,
      title: "Branding & Graphic Design",
      description:
        "Make a memorable first impression and beyond. We design modern logos and complete brand identity kits that tell your unique story. From business cards to event graphics, we deliver creative designs swiftly and effectively.",
    },
    {
      id: 2,
      icon: <img src={Image2} alt="Web Design & E-Commerce" />,
      title: "Web Design & E-Commerce",
      description:
        "Your digital storefront awaits. We build stunning, user-friendly websites, from personal portfolios and blogs to robust E-Commerce platforms that turn visitors into loyal customers.",
    },
    {
      id: 3,
      icon: <img src={Image3} alt="Software & App Development" />,
      title: "Software & App Development",
      description:
        "Power your operations with tailor-made solutions. We develop custom software for Windows & Apple Mac and implement innovative mobile applications to streamline your business and engage your audience.",
    },
    {
      id: 4,
      icon: <img src={Image4} alt="Digital Marketing & Video Production" />,
      title: "Digital Marketing & Video Production",
      description:
        "Connect and convert your audience. We amplify your brand with creative marketing strategies, compelling advertising campaigns, and high-impact video productions that drive growth.",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Your All-in-One Creative Digital Partner</h1>
        <p>
          At KOLAYA DESIGN, we fuse over 12 years of industry expertise with
          cutting-edge creativity to become your dedicated partner in growth. We
          specialize in crafting powerful brand identities and results-driven
          digital solutions for startups, small businesses, and established
          corporations. Our comprehensive suite of services is designed to
          increase your sales, enhance your market presence, and provide a
          seamless experience for your customers—all aligned with your vision
          and budget.
        </p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;