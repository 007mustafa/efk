import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  "I highly recommend Eef Kay Tech for any business looking to enhance their engineering capabilities.",
  "Their team's expertise in technology consulting made a noticeable difference in our productivity.",
  "Eef Kay Tech provided us with an excellent solution that improved our operations significantly."
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      {/* Section Heading */}
      <motion.div
        className="testimonials-heading-wrapper"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="testimonials-heading">
          <span className="white-text">Our</span>{" "}
          <span className="blue-text">Testimonials</span>
        </h2>
      </motion.div>

      {/* Subheading (Static) */}
      <h3 className="testimonial-subheading">Customer Feedback</h3>

      {/* Paragraph Slider */}
      <div className="testimonial-container">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="testimonial-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {testimonials[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Testimonials;
