import React from "react";

export default function ColorComponent(props) {
  return (
    <li
      id={props.id}
      className="color-change color-list-li"
      data-color={props.color}
    ></li>
  );
}
