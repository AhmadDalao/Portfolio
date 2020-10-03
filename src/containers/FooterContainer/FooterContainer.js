import React from "react";

export default function FooterContainer() {
  return (
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
  );
}
