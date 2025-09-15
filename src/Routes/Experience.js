import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import ExperienceMap from "../Components/ExperienceMap";

function Experience() {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="EXPERIENCE."
        text="Some of my recent work experiences."
      />
      <ExperienceMap />
      <Footer />
    </div>
  );
}

export default Experience;
