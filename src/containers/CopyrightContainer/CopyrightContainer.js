import React from "react";
import { copyright } from "../../portfolioData";
import "./CopyrightContainer.css";

export default function CopyrightContainer() {
  return (
    <section className="copyright p-3 text-center text-capitalize">
      <div className="container lead">
        {copyright.first__word} &copy; {copyright.second__word}
      </div>
    </section>
  );
}
