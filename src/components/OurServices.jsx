import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Cog,
  Thermometer,
  CloudCog,
  Headphones,
} from "lucide-react";
import "./OurServices.css";

function OurServices() {
  const services = [
    {
      icon: <Cpu size={56} />,
      title: "Technology Consulting",
      desc: "We provide expert guidance and solutions to help businesses navigate the evolving technology landscape.",
    },
    {
      icon: <Code size={56} />,
      title: "Custom Engineering Solutions",
      desc: "Tailored solutions designed to meet the unique needs of your business and industry.",
    },
    {
      icon: <Cog size={56} />,
      title: "Industrial Flow Control Equipment",
      desc: "Advanced equipment that regulates fluid movement and maintains desired temperatures in various processes.",
    },
    {
      icon: <Thermometer size={56} />,
      title: "Temperature Control Solutions",
      desc: "Ensuring consistent product quality through precise temperature management.",
    },
    {
      icon: <CloudCog size={56} />,
      title: "Digital Transformation Services",
      desc: "Helping businesses leverage the latest digital technologies to accelerate growth.",
    },
    {
      icon: <Headphones size={56} />,
      title: "After-Sales Support",
      desc: "Ongoing support to ensure the longevity and effectiveness of our solutions.",
    },
  ];

  // react-slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="services-section">
      {/* Heading */}
      <motion.div
        className="services-heading-wrapper"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
       <h2 className="services-heading">
  <span className="white">Our</span> <span className="blue">Services</span>
</h2>

      </motion.div>

      {/* Slider */}
      <Slider {...settings} className="services-slider">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}

export default OurServices;
