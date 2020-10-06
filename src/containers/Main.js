import React, { Component } from "react";
import ColorContainer from "./ColorContainer/ColorContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import SkillContainer from "./SkillContainer/SkillContainer";
import AboutContainer from "./AboutContainer/AboutContainer";
import ResumeContainer from "./ResumeContainer/ResumeContainer";
import ContactContainer from "./ContactContainer/ContactContainer";
import FooterContainer from "./FooterContainer/FooterContainer";
import CopyrightContainer from "./CopyrightContainer/CopyrightContainer";
import HeaderInfoContainer from "./HeaderInfoContainer/HeaderInfoContainer";

export default class Main extends Component {
  render() {
    return (
      <>
        {/*  جرب تعمل كومبوننت للست وتعمل لوب عليها وتستدعيها بصفحة الكولر كونتينار */}
        <ColorContainer />
        <HeaderContainer />
        <HeaderInfoContainer />
        <main>
          <PortfolioContainer />
          <SkillContainer />
          <AboutContainer />
          <ResumeContainer />
          <ContactContainer />
        </main>
        <FooterContainer />
        <CopyrightContainer />
      </>
    );
  }
}
