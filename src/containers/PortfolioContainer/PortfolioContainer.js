import React from "react";
import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";
import PortfolioFilterComponent from "../../components/PortfolioFilterComponent/PortfolioFilterComponent";
import {
  projectsData,
  portfolioList,
  portfolioSection,
} from "../../portfolioData";
import "./PortfolioContainer.css";

export default function PortfolioContainer() {
  const projects = projectsData.map((item) => {
    return (
      <PortfolioComponent
        key={item.id}
        liveDemo={item.liveDemo}
        projectName={item.projectName}
        imgURL={item.imgURL}
        liveDemoText={item.liveDemoText}
        sourceCodeText={item.sourceCodeText}
        sourceURL={item.sourceURL}
        filter__word={item.filter__word}
      />
    );
  });

  const filterList = portfolioList.map((item) => {
    return (
      <PortfolioFilterComponent
        key={item.id}
        filtering={item.filtering}
        list__word={item.list__word}
        active={item.active}
      />
    );
  });

  return (
    <section
      className="portfolio padding-top-bottom text-center custom__outline"
      id={portfolioSection.title}
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={portfolioSection.title}
        >
          {portfolioSection.title}
        </h2>
        <p className="lead mb-5">{portfolioSection.paragraph}</p>
        <ul className="gallery__list list-inline  text-center mb-5">
          {filterList}
        </ul>
        <section className="card-holder row justify-content-md-center justify-content-lg-start align-items-center">
          {projects}
        </section>
      </div>
    </section>
  );
}
