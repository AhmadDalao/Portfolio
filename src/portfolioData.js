/* this file contains all the objects ,
 one object for each container (section) */

const colorList = [
  { id: 1, color: "#fb7813" },
  { id: 2, color: "#f54291" },
  { id: 3, color: "#0779e4" },
  { id: 4, color: "#efa8e4" },
  { id: 5, color: "#fd5e53" },
];

const navbarLinks = [
  { id: 1, navigateTo: "#portfolio", label__span__title: "Portfolio" },
  { id: 2, navigateTo: "#skills", label__span__title: "Skills" },
  { id: 3, navigateTo: "#about", label__span__title: "About" },
  { id: 4, navigateTo: "#resume", label__span__title: "Resume" },
  { id: 5, navigateTo: "#contact", label__span__title: "Contact" },
];

const logoData = [
  {
    id: 1,
    name__ariaLabel: "Ahmad Dalao",
    first__word: "Ahmad",
    inspan: "Dalao",
  },
];

const headerInfo = {
  name: "I'm Ahmad",
  job: "A Software developer",
  resumeLink: require("./download/Software-Developer-Ahmad-Dalao.pdf"),
  fontIcon: "fas fa-download",
};

export { colorList, navbarLinks, logoData, headerInfo };
