import React from "react";

export default function ResumeContainer() {
  return (
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
          If you would like to learn more about me or have PDF copy of my resume
          please feel free to click the download button, The resume provides
          detailed information about me and more contact information.
        </p>
        <a
          className="custom__button p-a-h-style"
          aria-label="Download Resume"
          download
          href={require("../../download/Resume-Ahmad Dalao.pdf")}
          rel="noopener "
          target="_blank "
        >
          <i className="fas fa-download"></i> download resume
        </a>
      </div>
    </section>
  );
}
