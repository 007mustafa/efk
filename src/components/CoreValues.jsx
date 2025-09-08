import React from "react";
import { motion } from "framer-motion";
import { Star, Lightbulb, Users } from "lucide-react"; 
import "./CoreValues.css";

function CoreValues() {
  return (
    <section className="values-section">
      {/* Heading */}
      <motion.div
        className="values-heading-wrapper"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="values-heading">
          Our <span className="highlight">Core Values</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="values-container">
        <motion.div
          className="value-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Star className="value-icon" size={64} />
          <h3>Quality</h3>
          <p>
            We ensure top-notch quality in every project, delivering solutions
            that exceed expectations and set industry benchmarks.
          </p>
        </motion.div>

        <motion.div
          className="value-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Lightbulb className="value-icon" size={64} />
          <h3>Innovation</h3>
          <p>
            Our innovative approach drives cutting-edge solutions, blending
            creativity and technology to meet evolving needs.
          </p>
        </motion.div>

        <motion.div
          className="value-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Users className="value-icon" size={64} />
          <h3>Customer Satisfaction</h3>
          <p>
            Client success is our priority—we work closely with partners to
            deliver exceptional results and long-term value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CoreValues;
