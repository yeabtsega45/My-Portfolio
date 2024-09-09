import React from "react";
import { EducationData } from "./EducationData";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1 className="education-title">Educational Background</h1>
      <div className="education-list">
        {EducationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h2 className="education-degree">{edu.degree}</h2>
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-year">{edu.year}</p>
            <p className="education-description">{edu.description}</p>
            <a
              href={edu.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
