import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./ExperienceCard.css";
import Tab from "./Tab";

export default function ExperienceCard() {
  return (
    <div className="ExperienceCard">
      <div className="ExperienceCard--with-icon">
        <FontAwesomeIcon icon={faBriefcase} size="2x" />
        <h1 className="ExperienceCard__title">Work Experience</h1>
      </div>
      <Tab
        title="Full-Stack Engineer Intern"
        subtitle={[
          "Government of Singapore Investment Coorporation (GIC), Singapore",
        ]}
        date={"July 2023 - Present"}
        desc={[
          "Migration of existing web application's user interface to a standardised design using Next.js and Typescript.",
        ]}
      />
      <Tab
        title="Full-Stack Engineer Intern"
        subtitle={["Superton, Shenzhen, Guangdong, China"]}
        date="Dec 2021 - July 2022"
        desc={[
          "Conducted research on dropshipping processes and implemented the service on the company website, bringing in 2 online stores as customers in 1 month.",
          "Identified and integrated key web elements to improve the Search Engine Optimization (SEO) of the company website, improving the click-through rate on Google by 20% in 3 months.",
          "Enhanced the codebase quality and reduced its size by 10% by incorporating reusable elements.",
        ]}
      />
    </div>
  );
}
