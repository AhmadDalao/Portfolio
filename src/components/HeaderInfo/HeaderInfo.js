import React from "react";
import "./HeaderInfo.css";
import { footerSocialData } from "../../portfolioData";
import FooterSocial from "../FooterSocial/FooterSocial";
/*
 *
 * @param {props} is getting it's data through the HeaderInfoContainer.js
 *
 */
export default function HeaderInfo(props) {
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
    <>
      <h1 className="mt-0 mb-0">{props.name}</h1>
      <p className="">{props.job}</p>
      <div className="p-1 header__social">{social}</div>
      <a
        className="custom__button"
        aria-label="Download Resume"
        download
        href={props.resumeLink}
        rel="noopener "
        target="_blank "
      >
        <i className={`${props.fontIcon}`}></i> {props.AnchorText}
      </a>
    </>
  );
}
