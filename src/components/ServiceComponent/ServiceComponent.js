import React from "react";
import "./ServiceComponent.css";

/*
 *
 * @param {props} is getting it's data through the AboutContainer.js
 *
 */

export default function ServiceComponent(props) {
  return (
    <article className="col-sm-12 col-md-6 col-lg-5 my-2 mb-3">
      <div className="service-item overflow-hidden position-relative custom__shadow">
        <h3 className="h2__style text-uppercase d-block position-relative my-3">
          {props.serviceName}
        </h3>
        <figure className="m-0">
          <img
            className="img-fluid m-2"
            src={props.serviceImg}
            alt={props.serviceName}
          />
        </figure>
        <div className="service-detail position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
          <p className="p-2">{props.serviceDescription}</p>
        </div>
      </div>
    </article>
  );
}
