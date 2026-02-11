import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>
          Hi, I'm an experienced Full-stack Developer and QA Engineer with 3 years
          of hands-on experience in developing, maintaining and testing robust
          web & mobile apps.
        </p>
        <h1>Yeabtsega Yeshidnber.</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
