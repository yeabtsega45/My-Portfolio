import React from "react";
import "./WorkCard.css";
import pro1 from "../assets/project1.png";

function WorkCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="project-img" />
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
