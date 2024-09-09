import React from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import ExperienceData from "./ExperienceData";

function ExperienceMap() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Work Experience</h1>
      <div className="project-container">
        {ExperienceData.map((val, ind) => {
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
    </div>
  );
}

export default ExperienceMap;
