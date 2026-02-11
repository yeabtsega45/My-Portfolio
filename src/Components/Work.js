import React, { useState } from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import MobileData from "./MobileData";
import MobileCard from "./MobileCard";

function Work() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-tabs">
        <button
          className={`project-tab ${activeTab === "web" ? "active" : ""}`}
          onClick={() => setActiveTab("web")}
        >
          Web
        </button>
        <button
          className={`project-tab ${activeTab === "mobile" ? "active" : ""}`}
          onClick={() => setActiveTab("mobile")}
        >
          Mobile
        </button>
      </div>
      <div className="project-container">
        {activeTab === "web"
          ? WorkCardData.map((val, ind) => {
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
            })
          : MobileData.map((val, ind) => {
              return (
                <MobileCard
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  android={val.android}
                  iOS={val.iOS}
                  source={val.source}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Work;
