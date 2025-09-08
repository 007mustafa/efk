import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import CoreValues from "./components/CoreValues"; 
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <CoreValues />
      <OurServices />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
