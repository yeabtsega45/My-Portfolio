import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>

        {props.company && (
          <div>
            <span>Client/Company: </span>
            {props.company}
          </div>
        )}

        {props.role && (
          <div>
            <span>Role/Contribution: </span>
            {props.role}
          </div>
        )}

        {props.skills && (
          <div>
            <span>Technologies Used: </span>
            {props.skills}
          </div>
        )}

        {props.date && (
          <div>
            <span>Completion Date: </span>
            {props.date}
          </div>
        )}

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
