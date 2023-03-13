import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a react front-end developer. I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default AboutContent;
