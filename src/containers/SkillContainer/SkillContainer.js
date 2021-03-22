import React from "react";
import "./SkillContainer.css";
import SkillsComponent from "../../components/SkillsComponent/SkillsComponent";
import { SkillsImages, SkillsSection } from "../../portfolioData";

export default function SkillContainer() {
  const skills = SkillsImages.map((item) => {
    return <SkillsComponent key={item.id} skillName={item.skillName} />;
  });

  return (
    <section
      className="skills padding-top-bottom text-center  custom__outline"
      id={SkillsSection.id}
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={SkillsSection.title}
        >
          {SkillsSection.title}
        </h2>
        <section className="skill-holder row justify-content-center position-relative mx-auto">
          {skills}
        </section>
      </div>
    </section>
  );
}
