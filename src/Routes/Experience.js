import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Work from "../Components/Work";

function Experience() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="EXPERIENCE." text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
}

export default Experience;
