import React from "react";
import "./ServiceComponent.css";

/*
 *
 * @param {props} is getting it's data through the AboutContainer.js
 *
 */

export default function ServiceComponent(props) {
  return (
    <article className="col-sm-12 col-md-9 col-lg-5 my-2 mb-3">
      <div className="service-item shadow-sm overflow-hidden position-relative">
        <h3 className="h5 h2__style text-left text-uppercase d-block position-relative px-3 mt-4 mb-0">
          {props.serviceName}
        </h3>
        <p className="px-3 mb-3 mt-2 text-left text-muted">
          {props.serviceDescription}
        </p>
        <figure className="px-3 m-3 mb-4 text-right">
          <img
            loading="lazy"
            className="img-fluid "
            src={props.serviceImg}
            alt={props.serviceName}
          />
        </figure>
      </div>
    </article>
  );
}
