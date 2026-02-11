import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";

function MobileCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="mobile-project-img" className="mobile-img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>

        <div className="pro-btns">
          {props.android && (
            <NavLink to={props.android} className="btn">
              Android
            </NavLink>
          )}
          {props.iOS && (
            <NavLink to={props.iOS} className="btn">
              iOS
            </NavLink>
          )}
          {props.source && (
            <NavLink to={props.source} className="btn">
              Source
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileCard;

