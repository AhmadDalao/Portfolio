import React from "react";

/*
 *
 * @param {props} is getting it's data through the HeaderContainer.js
 *
 */
export default function NavbarLogo(props) {
  return (
    <a
      className="navbar-brand logo text-uppercase"
      href="index.html"
      aria-label={props.name__ariaLabel}
      data-name={props.name__ariaLabel}
    >
      {props.first__word} <span>{props.inspan}</span>
    </a>
  );
}
