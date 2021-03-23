import React from "react";
import { resumeData } from "../../portfolioData";
import "./ResumeContainer.css";

export default function ResumeContainer() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-once="true"
      className="resume padding-top-bottom text-center position-relative custom__background custom__outline"
      id={resumeData.id}
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={resumeData.id}
        >
          {resumeData.id}
        </h2>
        <p className="lead">{resumeData.resumeInfo}</p>
        <a
          className="custom__button p-a-h-style"
          aria-label={resumeData.resumeAnchorText}
          download
          href={resumeData.resumeURL}
          rel="noopener "
          target="_blank "
        >
          <i className="fas fa-download"></i> {resumeData.resumeAnchorText}
        </a>
      </div>
    </section>
  );
}
