import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import WorkHomePage from "../Components/WorkHomePage";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <WorkHomePage />
      <Footer />
    </div>
  );
}

export default Home;
