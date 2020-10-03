import React from "react";

export default function PortfolioContainer() {
  return (
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
          Here are some of my projects. You can check the projects out using
          live preview, and most of these projects are open source code feel
          free to take a copy of your own. I would love to receive your feedback
          about my work through an email or contact section.
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
                      src={require("../../images/axit.jpg")}
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
                      src={require("../../images/general.jpg")}
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
                      src={require("../../images/graphy.jpg")}
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
                      src={require("../../images/bootstrap_start.jpg")}
                      alt="bootstrap screenshot"
                    />
                  </figure>
                </a>
              </div>
              <h3 className="mb-3 mt-5 text-capitalize">bootstrap-start</h3>
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
                      src={require("../../images/travel.jpg")}
                      alt="bootstrap screenshot"
                    />
                  </figure>
                </a>
              </div>
              <h3 className="mb-3 mt-5 text-capitalize">mountain travel</h3>
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
                      src={require("../../images/eqra.jpg")}
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
                      src={require("../../images/landing__design.jpg")}
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
                      src={require("../../images/memory.jpg")}
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
                      src={require("../../images/classic__game.jpg")}
                      alt="bootstrap screenshot"
                    />
                  </figure>
                </a>
              </div>
              <h3 className="mb-3 mt-5 text-capitalize">classic arcade game</h3>
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
                      src={require("../../images/picker.jpg")}
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
  );
}
