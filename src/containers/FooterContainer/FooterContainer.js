import React from "react";
import { FooterData, footerSocialData } from "../../portfolioData";
import FooterSocial from "../../components/FooterSocial/FooterSocial";

export default function FooterContainer() {
  const social = footerSocialData.map((item) => {
    return (
      <FooterSocial
        key={item.id}
        socialName={item.socialName}
        socialURL={item.socialURL}
        socialImg={item.socialImg}
      />
    );
  });

  return (
    <footer className="footer py-5 text-center" role="contentinfo">
      <section className="container">
        <h2
          className="h2__style footer__h2 text-uppercase d-inline-block position-relative custom__underline mb-4"
          data-title={FooterData.FooterText}
        >
          {FooterData.FooterText}
        </h2>
        <div className="p-1">{social}</div>
      </section>
    </footer>
  );
}
