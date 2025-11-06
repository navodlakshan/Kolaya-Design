import React from "react";
import "../styles/Journey.css";

const Journey: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Discover & Define",
      subtitle: "Your Requirement & Our Understanding",
      text: "It all starts with a conversation. We dive deep to understand your goals, audience, and vision. You share your ideas, and we listen, asking the right questions to define the project scope and specifications together.",
    },
    {
      number: "2",
      title: "Plan & Propose",
      subtitle: "Estimation & Advance Payment",
      text: "After a thorough feasibility study, we provide a detailed project proposal with a transparent timeline and cost estimate. To kickstart the journey, a 50% advance payment secures your spot in our workflow.",
    },
    {
      number: "3",
      title: "Create & Collaborate",
      subtitle: "Work with the Team & Get Creative Output",
      text: "This is where ideas take shape! Our dedicated team gets to work, transforming the plan into reality. We maintain open lines of communication, sharing progress and incorporating your feedback to ensure the creative output aligns perfectly with your expectations.",
    },
    {
      number: "4",
      title: "Refine & Perfect",
      subtitle: "Quality Check & Internal Review",
      text: "Before anything reaches you, it goes through our rigorous multi-stage quality assurance process. We meticulously check every detail, from functionality and design consistency to performance, ensuring everything meets our high standards.",
    },
    {
      number: "5",
      title: "Review & Revise",
      subtitle: "Discuss with the Customer",
      text: "We present the refined output to you. This is your time to review, test, and provide feedback. We value your input and are committed to making any necessary tweaks until you are completely satisfied.",
    },
    {
      number: "6",
      title: "Launch & Deliver",
      subtitle: "Deliver Quality Output Product",
      text: "Once you give the final approval, we prepare and deliver the complete, high-quality product. You receive all original source files and print-ready materials, along with clear guidance on file usage. The final 50% balance is settled at this stage.",
    },
    {
      number: "7",
      title: "Succeed & Support",
      subtitle: "Happy Customer",
      text: "Our goal is your success and satisfaction. Seeing you thrilled with the final product is what drives us. But our relationship doesn't end at delivery; we're here to offer ongoing support to ensure your continued success.",
    },
  ];

  return (
    <div className="journey-container">
      <h2 className="journey-heading">Our Journey to Your Success</h2>
      <div className="journey-timeline">
        {steps.map((step) => (
          <div key={step.number} className="journey-step">
            <div className="journey-left">
              <div className="journey-circle">
                <span className="journey-number"></span>
              </div>
              <div className="journey-line"></div>
            </div>
            <div className="journey-content">
              <h3>{step.number}. {step.title}</h3>
              <h4>{step.subtitle}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;