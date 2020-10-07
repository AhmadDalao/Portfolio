import React from "react";

/*
 *
 * @param {props} is getting it's data through the FooterContainer.js
 *
 */

export default function FooterSocial(props) {
  return (
    <a
      href={props.socialURL}
      target="_blank "
      rel="noreferrer noopener "
      className="footer__icon p-1 m-1 rounded-circle d-inline-flex position-relative justify-content-center align-items-center"
      title={props.socialName}
      aria-label={props.socialName}
    >
      <i className={props.socialImg}></i>
    </a>
  );
}
