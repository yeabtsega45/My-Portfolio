import React from "react";
import "./WorkCard.css";
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "./ExperienceData";

function ExperienceMap() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Work Experience</h1>
      <div className="project-container">
        {ExperienceData.map((val, ind) => {
          return (
            <ExperienceCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              company={val.company}
              text={val.text}
              role={val.role}
              skills={val.skills}
              date={val.date}
              employmentType={val.employmentType}
              locationType={val.locationType}
              location={val.location}
              website={val.website}
              github={val.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceMap;
