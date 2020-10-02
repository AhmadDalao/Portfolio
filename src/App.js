import $ from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/normalize.css";
import "./css/style.css";
import { main } from "./main";
// import "bootstrap/dist/js/bootstrap";

// import { main } from "./main";

class App extends React.Component {
  componentDidMount() {
    main();
  }

  render() {
    // main();
    return (
      <>
        {/* <!-- side color menu --> */}
        <section className="color-container" id="color-container">
          <span className="custom-span" id="color-toggler">
            <i
              style={{
                top: "50%",
                fontSize: "22px",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
              }}
              className="fas fa-cog"
            ></i>
          </span>
          <p>Choose your favorite color</p>
          <ul className="color-list-style" id="color-list">
            <li
              className="color-change color-list-li"
              data-color="#fb7813"
            ></li>
            <li
              className="color-change color-list-li"
              data-color="#f54291"
            ></li>
            <li
              className="color-change color-list-li"
              data-color="#0779e4"
            ></li>
            <li
              className="color-change color-list-li"
              data-color="#efa8e4 "
            ></li>
            <li
              className="color-change color-list-li"
              data-color="#fd5e53"
            ></li>
          </ul>
          <hr />
          <p>default color</p>
          <ul className="color-list-style color-list-default">
            <li className="color-list-li" data-color="#2ecc71"></li>
          </ul>
        </section>
        {/* <!-- end side color menu --> */}

        {/* <!-- header --> */}
        <header className="header">
          {/* <!-- Navigation bar   fixed-top --> */}
          <nav
            className="navbar navbar-expand-md fixed-top navbar-dark py-3"
            id="navbar"
          >
            <div className="container">
              <a
                className="navbar-brand logo text-uppercase"
                href="index.html"
                aria-label="AhmadDalao"
                data-name="Ahmad Dalao"
              >
                Ahmad <span>Dalao</span>
              </a>
              {/* <!-- navbar icon --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse mt-3 mt-sm-0"
                id="navbarSupportedContent"
              >
                {/* <!-- navbar list  --> */}
                <ul className="navbar-nav ml-auto text-center">
                  <li
                    className="text-capitalize nav-item"
                    data-target=".navbar-collapse.show"
                    data-toggle="collapse"
                  >
                    <a
                      href="#portfolio"
                      aria-label="Portfolio"
                      className="nav-link position-relative text-uppercase my-2 my-sm-0"
                    >
                      <span
                        data-title="portfolio"
                        className="custom__underline"
                      >
                        portfolio
                      </span>
                    </a>
                  </li>
                  <li
                    className="text-capitalize nav-item"
                    data-target=".navbar-collapse.show"
                    data-toggle="collapse"
                  >
                    <a
                      href="#skills"
                      aria-label="Skills"
                      className="nav-link position-relative text-uppercase my-2 my-sm-0"
                    >
                      <span data-title="skills" className="custom__underline">
                        Skills
                      </span>
                    </a>
                  </li>
                  <li
                    className="text-capitalize nav-item"
                    data-target=".navbar-collapse.show"
                    data-toggle="collapse"
                  >
                    <a
                      href="#about"
                      aria-label="About"
                      className="nav-link position-relative text-uppercase my-2 my-sm-0"
                    >
                      <span data-title="about" className="custom__underline">
                        About
                      </span>
                    </a>
                  </li>
                  <li
                    className="text-capitalize nav-item"
                    data-target=".navbar-collapse.show"
                    data-toggle="collapse"
                  >
                    <a
                      href="#resume"
                      aria-label="Resume"
                      className="nav-link position-relative text-uppercase my-2 my-sm-0"
                    >
                      <span data-title="resume" className="custom__underline">
                        Resume
                      </span>
                    </a>
                  </li>
                  <li
                    className="text-capitalize nav-item"
                    data-target=".navbar-collapse.show"
                    data-toggle="collapse"
                  >
                    <a
                      href="#contact"
                      aria-label="Contact"
                      className="nav-link position-relative text-uppercase my-2 my-sm-0"
                    >
                      <span data-title="contact" className="custom__underline">
                        Contact
                      </span>
                    </a>
                  </li>
                  {/* <!--if you need more items in the navbar copy the previous line and paste it here --> */}
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- end  Navigation bar --> */}
          <div className="container">
            <section className="header-info">
              <h1>I'm Ahmad</h1>
              <p className="">A Software developer</p>
              <a
                className="custom__button"
                aria-label="Download Resume"
                download
                href="download/Resume-Ahmad Dalao.pdf "
                rel="noopener "
                target="_blank "
              >
                <i className="fas fa-download"></i> download resume
              </a>
            </section>
          </div>
        </header>
        {/* <!-- end header --> */}

        {/* <!-- start main --> */}
        <main>
          {/* <!-- start portfolio --> */}
          <section
            className="portfolio padding-top-bottom text-center custom__outline"
            id="portfolio"
          >
            <div className="container">
              <h2
                className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
                data-title="portfolio"
              >
                portfolio
              </h2>
              <p className="lead mb-5">
                Here are some of my projects. You can check the projects out
                using live preview, and most of these projects are open source
                code feel free to take a copy of your own. I would love to
                receive your feedback about my work through an email or contact
                section.
              </p>
              <ul className="gallery__list list-inline  text-center mb-5">
                <li
                  className="gallery__list--item font-weight-bold h2__style list-inline-item filter custom__active"
                  data-filter=".all"
                >
                  All
                </li>
                <li
                  className="gallery__list--item font-weight-bold h2__style list-inline-item filter"
                  data-filter=".bootstrap"
                >
                  Bootstrap
                </li>
                <li
                  className="gallery__list--item font-weight-bold h2__style list-inline-item filter"
                  data-filter=".javaScript"
                >
                  JavaScript
                </li>
              </ul>
              <section className="card-holder row justify-content-md-center justify-content-lg-start align-items-center">
                {/* <!-- card item axit --> */}
                <article className="card-item bootstrap all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://axit-dalao.netlify.app/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/axit.jpg")}
                            alt="axit"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">AXIT</h3>
                    {/* <!-- <p className="lead p-2">I designed and built a responsive landing page for general power lightning. Using HTML5 CSS3 Bootstrap jQuery.</p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://axit-dalao.netlify.app/"
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item axit--> */}

                {/* <!-- card item general-power --> */}
                <article className="card-item bootstrap all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://general-power.netlify.app/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/general.jpg")}
                            alt="general power"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">
                      general power lightning
                    </h3>
                    {/* <!-- <p className="lead p-2">I designed and built a responsive landing page for general power lightning. Using HTML5 CSS3 Bootstrap jQuery.</p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://general-power.netlify.app/"
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item general-power --> */}

                {/* <!-- card item graphy --> */}
                <article className="card-item bootstrap all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://graphy.netlify.app/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/graphy.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">graphy</h3>
                    {/* <!-- <p className="lead p-2">A responsive page for photographers and it is built using HTML , CSS, JavaScript, jQuery and Bootstrap.</p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code"
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/Graphy "
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://graphy.netlify.app/"
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!--  end card item graphy --> */}

                {/* <!-- card item bootstrap-start --> */}
                <article className="card-item bootstrap all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/Bootstrap-Start/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/bootstrap_start.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">
                      bootstrap-start
                    </h3>
                    {/* <!-- <p className="lead p-2">A responsive page for portfolio projects built using HTML CSS and JavaScript and Bootstrap.</p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code"
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/Bootstrap-Start"
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/Bootstrap-Start/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item bootstrap-start --> */}

                {/* <!-- card item mountain travel --> */}
                <article className="card-item bootstrap all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://dalaotravel.netlify.app/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/travel.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">
                      mountain travel
                    </h3>
                    {/* <!-- <p className="lead p-2">A responsive page for a travel agency and it is built using pure HTML CSS , JavaScript and Bootstrap. </p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code "
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/Mountain-Travel"
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://dalaotravel.netlify.app/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item mountain travel --> */}

                {/* <!-- card item eqrateam --> */}
                <article className="card-item bootstrap all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://eqrateam.netlify.app/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/eqra.jpg")}
                            alt="eqra screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">eqrateam</h3>
                    {/* <!-- <p className="lead p-2">I designed and built 8 responsive pages for eqraTeam. Using HTML CSS and JavaScript. </p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://eqrateam.netlify.app/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item eqrateam --> */}

                {/* <!-- card item landing page --> */}
                <article className="card-item all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://dalao2.netlify.app/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/landing__design.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">landing page</h3>
                    {/* <!-- <p className="lead p-2">This is a complete browser-based landing page.Built using HTML5 and CSS3. </p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code"
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/project-3"
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://dalao2.netlify.app/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item landing page --> */}

                {/* <!-- card item memory game --> */}
                <article className="card-item javaScript all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/MemoryGame/ "
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/memory.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">memory game</h3>
                    {/* <!-- <p className="lead p-2"> This is a complete browser-based card matching game.Built using HTML5 , CSS3 and javascript </p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code "
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/MemoryGame"
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/MemoryGame/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item memory game --> */}

                {/* <!-- card item classic arcade game --> */}
                <article className="card-item javaScript all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/ClassicArcadeGame/ "
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top"
                            src={require("./images/classic__game.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">
                      classic arcade game
                    </h3>
                    {/* <!-- <p className="lead p-2"> This is a complete browser-based game.The game is built using HTML5 , CSS3 and javascript </p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code"
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/ClassicArcadeGame"
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/ClassicArcadeGame/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item classic arcade game --> */}

                {/* <!-- card item linear-gradient-picker --> */}
                <article className="card-item javaScript all col-sm-12 col-md-9 col-lg-6">
                  <div className="wrapper card my-4">
                    <div className="card__container">
                      <a
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/Linear-Gradient-picker/"
                      >
                        <figure className="m-0">
                          <img
                            className="card__image card-img-top-top"
                            src={require("./images/picker.jpg")}
                            alt="bootstrap screenshot"
                          />
                        </figure>
                      </a>
                    </div>
                    <h3 className="mb-3 mt-5 text-capitalize">
                      linear-gradient-picker
                    </h3>
                    {/* <!-- <p className="lead p-2"> Is a tool to generate linear gradient css code. Project built using HTML5 CSS and JavaScript</p> --> */}
                    <div className="link-holder py-4">
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Source code"
                        rel="noopener "
                        target="_blank "
                        href="https://github.com/AhmadDalao/Linear-Gradient-picker"
                      >
                        <i className="mr-1 fas fa-globe-americas fa-fw"></i>
                        Source code
                      </a>
                      <a
                        className="mr-md-3 mb-3 mb-md-0 btn btn-lg"
                        aria-label="Live Demo "
                        rel="noopener "
                        target="_blank "
                        href="https://ahmaddalao.github.io/Linear-Gradient-picker/ "
                      >
                        <i className="mr-1 fab fa-github fa-fw"></i>Live demo
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- end card item linear-gradient-picker --> */}
              </section>
            </div>
          </section>
          {/* <!-- end portfolio --> */}

          {/* <!-- start skills --> */}
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
                      src={require("./images/html5.svg")}
                      alt="html5"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/css-5.svg")}
                      alt="css"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/javascript.svg")}
                      alt="javascript"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/bootstrap-4.svg")}
                      alt="bootstrap"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/git-icon.svg")}
                      alt="git"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/github-brands.svg")}
                      alt="github"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/jquery.svg")}
                      alt="jquery"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/json.svg")}
                      alt="json"
                    />
                  </figure>
                </article>
                <article className="skill-item my-4 my-md-0 col-md-3 p-4">
                  <figure className="m-0 ">
                    <img
                      className="img-fluid skill__icon"
                      src={require("./images/api.svg")}
                      alt="github"
                    />
                  </figure>
                </article>
              </section>
            </div>
          </section>
          {/* <!-- end skills --> */}

          {/* <!-- start about me --> */}
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
                I'm a Software Engineer / Developer who loves building and
                developing applications and websites. I'd love to combine my
                passion for programming and learning with my software
                engineering skills to continue building more personalized
                applications and websites for people. I have a passion to learn
                everything new, contributing to the progress of mankind, and
                show creativity and possibilities in everything I do.{" "}
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
                        src={require("./images/undraw_version_control_9bpv.svg")}
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
                        src={require("./images/undraw_design_notes_8dmv.svg")}
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
                        src={require("./images/undraw_design_tools_42tf.svg")}
                        width="512"
                        height="512"
                        alt="web-development "
                      />
                    </figure>
                    <div className="service-detail position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                      <p className="p-2">
                        I can make the user interface and experience more
                        appealing to users.
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
                        src={require("./images/undraw_file_searching_duff.svg")}
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
          {/* <!-- end about me --> */}

          {/* <!-- start resume --> */}
          <section
            className="resume padding-top-bottom text-center position-relative custom__background custom__outline"
            id="resume"
          >
            <div className="container">
              <h2
                className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
                data-title="resume"
              >
                resume
              </h2>
              <p className="lead">
                If you would like to learn more about me or have PDF copy of my
                resume please feel free to click the download button, The resume
                provides detailed information about me and more contact
                information.
              </p>
              <a
                className="custom__button p-a-h-style"
                aria-label="Download Resume"
                download
                href={require("./download/Resume-Ahmad Dalao.pdf")}
                rel="noopener "
                target="_blank "
              >
                <i className="fas fa-download"></i> download resume
              </a>
            </div>
          </section>
          {/* <!-- end resume --> */}

          {/* <!-- contact section --> */}
          <section
            className="contact padding-top-bottom custom__outline text-center"
            id="contact"
          >
            <div className="container">
              <h2
                className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
                data-title="contact me"
              >
                contact me{" "}
              </h2>
              <form
                className="my__form form-row mt-5 "
                id="my__form"
                netlify
                name="contact__main"
                netlify-honeypot="bot-field"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <div className=" col-lg-6 ">
                  <div className="input-group ">
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <label htmlFor="username" className="sr-only">
                      Your name
                    </label>
                    <input
                      className="w-100 my-2 form-control-lg"
                      id="username"
                      type="text"
                      name="Your Name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      className="w-100 my-2 form-control-lg"
                      id="email"
                      type="email"
                      name="Email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      className="w-100 my-2 form-control-lg mb-lg-0"
                      id="subject"
                      type="text"
                      name="Subject "
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className=" col-lg-6 ">
                  <div className="input-group h-100 textarea__group">
                    <label htmlFor="message" className="sr-only">
                      message
                    </label>
                    <textarea
                      className="w-100 p-3 form-control-lg "
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <div className="input-group justify-content-start">
                  <input
                    className="m-1 my-2 custom__submit mt-5  "
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </section>
          {/* <!-- end section --> */}
        </main>
        {/* <!-- start footer  --> */}
        <footer className="footer py-5 text-center" role="contentinfo">
          <section className="container">
            <h2
              className="h2__style footer__h2 text-uppercase d-inline-block position-relative custom__underline mb-4"
              data-title="find me on "
            >
              find me on
            </h2>
            <div className="p-1">
              <a
                href="https://twitter.com/AhmadDalao/ "
                target="_blank "
                rel="noreferrer noopener "
                className="footer__icon p-1 m-1 rounded-circle d-inline-flex position-relative justify-content-center align-items-center"
                title="twitter
                    "
                aria-label=" twitter "
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-dalao/ "
                target="_blank "
                rel="noreferrer noopener "
                className="footer__icon p-1 m-1 rounded-circle d-inline-flex position-relative justify-content-center align-items-center"
                title="Linkedin
                    "
                aria-label=" Linkedin "
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/AhmadDalao "
                target="_blank "
                rel="noreferrer noopener "
                className="footer__icon p-1 m-1 rounded-circle d-inline-flex position-relative justify-content-center align-items-center"
                title="Github "
                aria-label="
                    Github "
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
        </footer>
        {/* <!-- end footer  --> */}

        {/* <!-- start copyright  --> */}
        <section className="copyright p-3 text-center text-capitalize">
          <div className="container lead">Copyright &copy AhmadDalao 2020</div>
        </section>
        {/* <!-- end copyright  --> */}
      </>
    );
  }
}
export default App;
