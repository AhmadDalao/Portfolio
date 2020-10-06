import React from "react";

export default function NavbarLinks(props) {
  return (
    <>
      <li
        id={props.label__span__title}
        className="text-capitalize nav-item"
        data-target=".navbar-collapse.show"
        data-toggle="collapse"
      >
        <a
          href={props.navigateTo}
          aria-label={props.label__span__title}
          className="nav-link position-relative text-uppercase my-2 my-sm-0"
        >
          <span
            data-title={props.label__span__title}
            className="custom__underline"
          >
            {props.label__span__title}
          </span>
        </a>
      </li>
    </>
  );
}
