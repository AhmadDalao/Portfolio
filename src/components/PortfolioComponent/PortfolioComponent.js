import React from "react";
import "./PortfolioComponent.css";

/*
 *
 * @param {props} is getting it's data through the PortfolioContainer.js
 *
 */

export default function PortfolioComponent(props) {
  return (
    <article
      className={`card-item ${props.filter__word} my-4  all col-12 col-md-6 col-lg-12`}
    >
      <div className="wrapper card shadow-sm my-lg-0">
        <div className="row card__detail--wrapper no-gutters">
          <div className="card__container position-relative col-12 col-lg-6 p-4">
            <a
              aria-label={props.liveDemoText}
              rel="noopener "
              target="_blank "
              href={props.liveDemo}
            >
              <figure className="m-0 position-relative">
                <img
                  className="card__image card-img rounded-lg"
                  src={props.imgURL}
                  alt={props.projectName}
                />
              </figure>
            </a>
          </div>
          <div className="card__detail--holder align-self-center position-relative p-3 py-4 p-lg-4  col-12  col-lg-6">
            <div class="details__wrapper h-100">
              <div className="card__detail text-left ">
                <h3 className="text-capitalize mb-3">{props.projectName}</h3>
                <p className="mb-0">{props.project__info}</p>
              </div>
              <div className="link-holder d-inline-block mt-3 w-100">
                <a
                  className="btn btn-md-lg"
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
                  className="  btn btn-md-lg"
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
      </div>
    </article>
  );
}
