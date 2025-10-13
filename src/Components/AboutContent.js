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
            <b>Languages: </b>JavaScript, TypeScript, HTML5, CSS3, SQL.
          </p>
          <p>
            <b>Front-End: </b>
            React, Next.js, Vite, Redux Toolkit, RTK Query, Tailwind CSS,
            jQuery, Bootstrap, Web3forms.
          </p>
          <p>
            <b>Back-End: </b>
            NodeJS, Express, MongoDB, Strapi, MySQL, PostgreSQL, Graphql.
          </p>
          <p>
            <b>Testing: </b>
            Cypress, Postman, k6, Lighthouse, Linear, Trello.
          </p>
          <p>
            <b>Tools & Methods: </b>
            Git, GitHub, Netlify, Render, Heroku, cPanel, Mobile/Responsive
            Development, Chrome Dev Tools.
          </p>
          <p>
            <b>Professional: </b>
            Remote Pair-Programming, Teamwork, Quick learner, Adaptable to new
            tech, Mentoring.
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
