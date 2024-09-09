import React from "react";
import { EducationData } from "./EducationData";

function Education() {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-list">
        {EducationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h2 className="education-degree">{edu.degree}</h2>
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-year">{edu.year}</p>
            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
