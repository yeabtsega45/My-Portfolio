import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import AboutContent from "../Components/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="About me."
        text="I am a multi-skilled Full-Stack Developer from Ethiopia with 2 years of hands-on experience in developing and maintaining web apps."
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
