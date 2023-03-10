import React from "react";
import "./WorkCard.css";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

function WorkCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="project-img" />
          <h2 className="project-title">project-title</h2>
          <div className="pro-details">
            <p>this is text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
