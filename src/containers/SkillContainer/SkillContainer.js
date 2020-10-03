import React from "react";

export default function SkillContainer() {
  return (
    <section
      className="skills padding-top-bottom text-center custom__background custom__outline"
      id="skills"
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title="Skills"
        >
          Skills
        </h2>
        <section className="skill-holder row justify-content-center position-relative mx-auto">
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/html5.svg")}
                alt="html5"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/css-5.svg")}
                alt="css"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/javascript.svg")}
                alt="javascript"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/bootstrap-4.svg")}
                alt="bootstrap"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/git-icon.svg")}
                alt="git"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/github-brands.svg")}
                alt="github"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/jquery.svg")}
                alt="jquery"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/json.svg")}
                alt="json"
              />
            </figure>
          </article>
          <article className="skill-item my-4 my-md-0 col-md-3 p-4">
            <figure className="m-0 ">
              <img
                className="img-fluid skill__icon"
                src={require("../../images/api.svg")}
                alt="github"
              />
            </figure>
          </article>
        </section>
      </div>
    </section>
  );
}
