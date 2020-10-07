import React from "react";

export default function SkillsComponent(props) {
  return (
    <article className="skill-item my-4 my-md-0 col-md-3 p-4">
      <figure className="m-0 ">
        <img
          className="img-fluid skill__icon"
          src={props.imgURL}
          alt={props.skillName}
        />
      </figure>
    </article>
  );
}
