import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import "./OurTeam.css";

const teamData = [
  { name: "John Doe", role: "CEO" },
  { name: "Jane Smith", role: "CTO" },
  { name: "Ali Ahmed", role: "Operations Manager" },
  { name: "Sarah Khan", role: "Lead Engineer" },
  { name: "Michael Lee", role: "Sales Director" },
  { name: "Fatima Noor", role: "Customer Support Specialist" }
];

function OurTeam() {
  return (
    <section className="team-section">
      {/* Heading */}
      <motion.div
        className="team-heading-wrapper"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="team-heading">
          <span className="white-text">Our</span>{" "}
          <span className="blue-text">Team</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="team-grid">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="team-icon">
              <User size={60} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
