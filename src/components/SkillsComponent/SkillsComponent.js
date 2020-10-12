import React from "react";
import "./SkillsComponent.css";

/*
 *
 * @param {props} is getting it's data through the SkillContainer.js
 *
 */
export default function SkillsComponent(props) {
  return (
    <article className="skill-item my-4 my-md-0 col-md-3 p-3">
      <div className="skills__container p-3 rounded">
        <figure className="m-0 ">
          <img
            className="img-fluid skill__icon"
            src={props.imgURL}
            alt={props.skillName}
          />
        </figure>
      </div>
    </article>
  );
}
