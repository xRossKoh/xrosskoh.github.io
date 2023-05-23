import React from "react";

import "./ProjectsCard.css";
import { useNavigate } from "react-router-dom";

export default function ProjectsCard(props) {
  const navigate = useNavigate();
  const openNewTab = () => {
    if (props.url === "") {
      navigate("/no-github");
    } else {
      window.open(props.url, "_blank", "noreferrer");
    }
  };

  return (
    <div>
      <button className="ProjectsCard__button" onClick={() => openNewTab()}>
        <div className="ProjectsCard__header">
          <div className="ProjectsCard__header__desc">
            <p id="project-title">{props.title}</p>
            <p id="project-subtitle">{props.subtitle}</p>
          </div>
          <div className="ProjectsCard__header__date">
            <p id="project-date">{props.date}</p>
          </div>
        </div>
        <div id="project-desc">{props.desc}</div>
      </button>
    </div>
  );
}
