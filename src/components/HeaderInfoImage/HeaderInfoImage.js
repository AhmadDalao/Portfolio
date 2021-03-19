import React from "react";
import "./HeaderInfoImage.css";
/*
 *
 * @param {props} is getting it's data through the HeaderInfoContainer.js
 *
 */
export default function HeaderInfoImage(props) {
  return (
    <div className="image__wrapper">
      <img
        alt="header_image"
        className="img-fluid"
        src={props.headerImage_src}
      />
    </div>
  );
}
