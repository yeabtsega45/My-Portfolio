import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
// import PricingCard from "../Components/PricingCard";
import Work from "../Components/Work";

function Project() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      {/* <PricingCard /> */}
      <Footer />
    </div>
  );
}

export default Project;
