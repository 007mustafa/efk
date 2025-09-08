import React, { useState, useEffect } from "react";
import "./WhoWeAre.css";

function WhoWeAre() {
  const slides = [
    {
      text: `Eef KayTech is a leading engineering firm in Pakistan, dedicated to providing customized technology solutions and consulting services. 
      Our mission is to offer high-quality services that enhance operational efficiency across industries.`,
      img: "/images/crane.jpg",
    },
    {
      text: `Such as pharmaceuticals, textiles, and chemicals. With a commitment to excellence and customer satisfaction, 
      we help businesses thrive in a competitive landscape.`,
      img: "/images/team.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // switch every 5s
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="who-section" id="about">
      <div className="who-header fade-in">
        <h2>
          Who <span>We Are</span>
        </h2>
      </div>

      <div className="who-container fade-in">
        {/* Text side with yellow bar */}
        <div className="who-text-slider">
          <div className="yellow-bar"></div>
          <div className="who-text-wrapper">
            <p key={currentIndex} className="fade-slide">
              {slides[currentIndex].text}
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className="who-img-slider">
          <img
            key={currentIndex}
            src={slides[currentIndex].img}
            alt={`slide-${currentIndex}`}
            className="who-img fade-slide"
          />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
