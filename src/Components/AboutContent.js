import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Skills</h1>
        <div>
          <p>
            <b>Languages: </b>JavaScript, Typescript, HTML/CSS, SQL.
          </p>
          <p>
            <b>Tools and Frameworks: </b>
            NodeJS, MongoDB, React, Express, NextJS, Vite, MySQL, Graphql,
            Tailwind, Bootstrap, Git, GitHub, Firebase, Netlify, Heroku, Render,
            cPanel, Redux Toolkit, RTKQuery, Web3forms, Cypress.
          </p>
        </div>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
