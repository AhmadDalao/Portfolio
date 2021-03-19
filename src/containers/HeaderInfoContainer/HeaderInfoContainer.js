import React from "react";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import HeaderInfoImage from "../../components/HeaderInfoImage/HeaderInfoImage";
import { headerInfo } from "../../portfolioData";
import { headerImage } from "../../portfolioData";

import "./HeaderInfoContainer.css";

export default function HeaderInfoContainer() {
  return (
    <section className="header-info">
      <div className="container ">
        <div className="row  align-content-center">
          <div className="col-12 col-lg-5 text-center">
            <HeaderInfo
              name={headerInfo.name}
              job={headerInfo.job}
              resumeLink={headerInfo.resumeLink}
              fontIcon={headerInfo.fontIcon}
              AnchorText={headerInfo.AnchorText}
            />
          </div>
          <div className="d-none d-lg-block col-lg-7 text-center">
            <HeaderInfoImage headerImage_src={headerImage.headerImage_src} />
          </div>
        </div>
      </div>
    </section>
  );
}
