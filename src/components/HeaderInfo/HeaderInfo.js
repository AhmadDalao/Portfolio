import React from "react";

/*
 *
 * @param {props} is getting it's data through the HeaderInfoContainer.js
 *
 */
export default function HeaderInfo(props) {
  return (
    <>
      <h1 className="mt-0 mb-0">{props.name}</h1>
      <p className="">{props.job}</p>
      <a
        className="custom__button"
        aria-label="Download Resume"
        download
        href={props.resumeLink}
        rel="noopener "
        target="_blank "
      >
        <i className={`${props.fontIcon}`}></i> {props.AnchorText}
      </a>
    </>
  );
}
