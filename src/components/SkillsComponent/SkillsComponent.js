import React from "react";
import "./SkillsComponent.css";

/*
 *
 * @param {props} is getting it's data through the SkillContainer.js
 *
 */
export default function SkillsComponent(props) {
  return (
    <article className="skill-item col-6 col-md-4 col-lg-3 p-3">
      <div className="skills__container p-2  rounded d-flex justify-content-center align-items-center">
        <p className="mb-0 py-5 h-100 w-100 rounded">{props.skillName}</p>
      </div>
    </article>
  );
}
