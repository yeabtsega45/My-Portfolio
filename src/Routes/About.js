import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import AboutContent from "../Components/AboutContent";
import Education from "../Components/Education";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="About me."
        text="I am a multi-skilled Full-stack Developer and QA tester with 3 years of hands-on experience in developing, maintaining and testing robust web apps. I am proficient in both frontend and backend technologies, with a proven ability to contribute effectively to project development and delivery."
      />
      <Education />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
