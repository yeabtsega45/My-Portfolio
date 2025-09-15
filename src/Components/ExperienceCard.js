import React from "react";
import "./ExperienceCard.css";
import { NavLink } from "react-router-dom";

function ExperienceCard(props) {
  return (
    <div className="work-card">
      <img src={props.imgsrc} alt="company-logo" />
      <h2 className="work-title">{props.title}</h2>
      <div className="work-details">
        <p>{props.text}</p>

        {props.role && (
          <div>
            <span>Role: </span>
            {props.role}
          </div>
        )}

        {props.date && (
          <div>
            <span>Duration: </span>
            {props.date}
          </div>
        )}

        {props.employmentType && (
          <div>
            <span>Employment Type: </span>
            {props.employmentType}
          </div>
        )}

        {props.locationType && (
          <div>
            <span>Work Type: </span>
            {props.locationType}
          </div>
        )}

        {props.location && (
          <div>
            <span>Location: </span>
            {props.location}
          </div>
        )}

        {props.skills && (
          <div>
            <span>Technologies: </span>
            {props.skills}
          </div>
        )}

        <div className="work-btns">
          <NavLink to={props.website} className="btn">
            Website
          </NavLink>
          <NavLink to={props.github} className="btn">
            GitHub
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
