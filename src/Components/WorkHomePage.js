import React from "react";
import { Link } from "react-router-dom";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

function WorkHomePage() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Recent Projects</h1>
      <div className="project-container">
        {WorkCardData.slice(0, 3).map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
      <div className="view-all-container">
        <Link to="/project" className="view-all-btn">
          VIEW ALL PROJECTS
        </Link>
      </div>
    </div>
  );
}

export default WorkHomePage;
