import React from "react";

export default function HeaderContainer() {
  return (
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
                  <span data-title="portfolio" className="custom__underline">
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
          <h1 className="mt-0 mb-0">I'm Ahmad</h1>
          <p className="">A Software developer</p>
          <a
            className="custom__button"
            aria-label="Download Resume"
            download
            href={require("../../download/Resume-Ahmad Dalao.pdf")}
            rel="noopener "
            target="_blank "
          >
            <i className="fas fa-download"></i> download resume
          </a>
        </section>
      </div>
    </header>
  );
}
