import React from "react";

/*
 *
 * @param {props} is getting it's data through the ColorContainer.js
 *
 */
export default function ColorComponent(props) {
  return (
    <li
      id={props.id}
      className="color-change color-list-li"
      data-color={props.color}
    ></li>
  );
}
