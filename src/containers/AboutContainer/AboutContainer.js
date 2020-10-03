import React from "react";

export default function AboutContainer() {
  return (
    <section
      className="about-me padding-top-bottom text-center custom__outline"
      id="about"
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title="about me"
        >
          about me
        </h2>
        <p className="lead mb-5">
          I'm a Software Engineer / Developer who loves building and developing
          applications and websites. I'd love to combine my passion for
          programming and learning with my software engineering skills to
          continue building more personalized applications and websites for
          people. I have a passion to learn everything new, contributing to the
          progress of mankind, and show creativity and possibilities in
          everything I do.{" "}
        </p>
        <h3
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title="services"
        >
          services
        </h3>
        <section className="row justify-content-center">
          <article className="col-sm-12 col-md-6 col-lg-5 my-2 mb-3">
            <div className="service-item overflow-hidden position-relative custom__shadow">
              <h3 className="h2__style text-uppercase d-block position-relative my-3">
                Web development
              </h3>
              <figure className="m-0">
                <img
                  className="img-fluid m-2"
                  src={require("../../images/undraw_version_control_9bpv.svg")}
                  width="512"
                  height="512"
                  alt="web-development "
                />
              </figure>
              <div className="service-detail position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                <p className="p-2">
                  I can build your ideal website from scratch.
                </p>
              </div>
            </div>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-5 my-2 mb-3">
            <div className="service-item overflow-hidden position-relative custom__shadow">
              <h3 className="h2__style text-uppercase d-block position-relative my-3">
                GRAPHIC DESIGN
              </h3>
              <figure className="m-0">
                <img
                  className="img-fluid m-2"
                  src={require("../../images/undraw_design_notes_8dmv.svg")}
                  width="512"
                  height="512"
                  alt="web-development "
                />
              </figure>
              <div className="service-detail position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                <p className="p-2">
                  I can design your website and make it beautiful.
                </p>
              </div>
            </div>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-5 my-2 mb-3">
            <div className="service-item overflow-hidden position-relative custom__shadow">
              <h3 className="h2__style text-uppercase d-block position-relative my-3">
                UX & UI DESIGN
              </h3>
              <figure className="m-0">
                <img
                  className="img-fluid m-2"
                  src={require("../../images/undraw_design_tools_42tf.svg")}
                  width="512"
                  height="512"
                  alt="web-development "
                />
              </figure>
              <div className="service-detail position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                <p className="p-2">
                  I can make the user interface and experience more appealing to
                  users.
                </p>
              </div>
            </div>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-5 my-2 mb-3">
            <div className="service-item overflow-hidden position-relative custom__shadow">
              <h3 className="h2__style text-uppercase d-block position-relative my-3">
                SEO
              </h3>
              <figure className="m-0">
                <img
                  className="img-fluid m-2"
                  src={require("../../images/undraw_file_searching_duff.svg")}
                  width="512"
                  height="512"
                  alt="web-development "
                />
              </figure>
              <div className="service-detail position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                <p className="p-2">
                  Can make your website appears on top when searching.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
