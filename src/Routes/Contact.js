import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
// import ContactContent from "../Components/ContactContent";
// import Form from "../Components/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Contact me."
        text="I'm up for any new job options. I can be reached using the information below."
      />
      {/* <ContactContent /> */}
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default Contact;
