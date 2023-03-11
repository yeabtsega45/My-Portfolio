import React from "react";
import "./WorkCard.css";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <WorkCard />
      </div>
    </div>
  );
}

export default Work;
