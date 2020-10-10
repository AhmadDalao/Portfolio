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
      className={`card-item ${props.filter__word} all col-sm-12 col-md-9 col-lg-6`}
    >
      <div className="wrapper card my-4">
        <div className="card__container">
          <a
            aria-label={props.liveDemoText}
            rel="noopener "
            target="_blank "
            href={props.liveDemo}
          >
            <figure className="m-0">
              <img
                className="card__image card-img-top"
                src={props.imgURL}
                alt={props.projectName}
              />
            </figure>
          </a>
        </div>
        <h3 className="mb-3 mt-5 text-capitalize">{props.projectName}</h3>
        {/* <!-- <p className="lead p-2">I designed and built a responsive landing page for general power lightning. Using HTML5 CSS3 Bootstrap jQuery.</p> --> */}
        <div className="link-holder py-4">
          <a
            style={{ display: !props.sourceURL && "none" }}
            className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
            aria-label={props.sourceCodeText}
            rel="noopener "
            target="_blank "
            href={props.sourceURL}
          >
            <i className="mr-1 fas fa-globe-americas fa-fw"></i>
            {props.sourceCodeText}
          </a>
          <a
            className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
            aria-label={props.liveDemoText}
            rel="noopener "
            target="_blank "
            href={props.liveDemo}
          >
            <i className="mr-1 fab fa-github fa-fw"></i>
            {props.liveDemoText}
          </a>
        </div>
      </div>
    </article>
  );
}
