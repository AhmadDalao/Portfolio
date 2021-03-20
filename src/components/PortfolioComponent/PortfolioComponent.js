import React from "react";
import "./PortfolioComponent.css";

/*
 *
 * @param {props} is getting it's data through the PortfolioContainer.js
 *
 */

export default function PortfolioComponent(props) {
  return (
    <article className={`card-item ${props.filter__word} all col-12`}>
      <div className="wrapper card my-4 my-xl-0">
        <div className="row card__detail--wrapper no-gutters">
          <div className="card__container col-12 col-xl-6">
            <a
              aria-label={props.liveDemoText}
              rel="noopener "
              target="_blank "
              href={props.liveDemo}
            >
              <figure className="m-0">
                <img
                  className="card__image card-img border-0"
                  src={props.imgURL}
                  alt={props.projectName}
                />
              </figure>
            </a>
          </div>
          <div className="card__detail--holder align-self-center my-5 p-3 col-12 col-xl-6">
            <div className="card__detail text-left ">
              <h3 className="text-capitalize mb-3">{props.projectName}</h3>
              <p className="lead mb-0">{props.project__info}</p>
            </div>
            <div className="link-holder d-inline-block mt-4 w-100">
              <a
                className="mr-3 mb-3 mb-md-0 btn btn-lg"
                aria-label={props.liveDemoText}
                rel="noopener "
                target="_blank "
                href={props.liveDemo}
              >
                <i className="mr-1 fab fa-github fa-fw"></i>
                {props.liveDemoText}
              </a>
              <a
                style={{ display: !props.sourceURL && "none" }}
                className=" mb-3 mb-md-0 btn btn-lg"
                aria-label={props.sourceCodeText}
                rel="noopener "
                target="_blank "
                href={props.sourceURL}
              >
                <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                {props.sourceCodeText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
