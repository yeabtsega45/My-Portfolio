import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <span>{props.company}</span>
        <p>{props.text}</p>
        <span>{props.role}</span>
        <span>{props.skills}</span>
        <span>{props.date}</span>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
