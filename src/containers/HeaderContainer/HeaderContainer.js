import React from "react";
import NavbarLinks from "../../components/Navbar/NavbarLinks/NavbarLinks";
import NavbarIcon from "../../components/Navbar/NavbarIcon/NavbarIcon";
import NavbarLogo from "../../components/Navbar/NavbarLogo/NavbarLogo";
import { navbarLinks, logoData } from "../../portfolioData";

export default function HeaderContainer() {
  const navbar_anchor = navbarLinks.map((item) => {
    return (
      <NavbarLinks
        key={item.id}
        id={item.label__span__title}
        navigateTo={item.navigateTo}
        label__span__title={item.label__span__title}
      />
    );
  });
  const logoDetails = logoData.map((item) => {
    return (
      <NavbarLogo
        key={item.id}
        first__word={item.first__word}
        inspan={item.inspan}
        name__ariaLabel={item.name__ariaLabel}
      />
    );
  });

  return (
    <header className="header  fixed-top w-100">
      {/* <!-- Navigation bar   fixed-top --> */}
      <nav className="navbar navbar-expand-md  navbar-dark py-3" id="navbar">
        <div className="container">
          {logoDetails}
          {/* hamburger icon */}
          <NavbarIcon />
          <div
            className="collapse navbar-collapse mt-3 mt-sm-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto text-center">{navbar_anchor}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
