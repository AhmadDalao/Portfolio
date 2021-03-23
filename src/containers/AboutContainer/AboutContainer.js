import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import { AboutSection, AboutServices, servicesData } from "../../portfolioData";

export default function AboutContainer() {
  const services = servicesData.map((item) => {
    return (
      <ServiceComponent
        key={item.id}
        serviceName={item.serviceName}
        serviceImg={item.serviceImg}
        serviceDescription={item.serviceDescription}
      />
    );
  });

  return (
    <section
      className="about-me padding-top-bottom text-center custom__outline"
      id={AboutSection.id}
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={AboutSection.title}
        >
          {AboutSection.title}
        </h2>
        <p className="lead mb-5">{AboutSection.paragraph}</p>
        <h3
          className="h2__style mt-5 text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={AboutServices.title}
        >
          {AboutServices.title}
        </h3>
        <section className="row services__holder justify-content-center">
          {services}
        </section>
      </div>
    </section>
  );
}
