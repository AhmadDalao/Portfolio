import React from "react";

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
