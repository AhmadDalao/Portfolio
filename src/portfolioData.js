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
  AnchorText: "download resume",
};
const projectsData = [
  {
    id: 1,
    liveDemo: "https://axit-dalao.netlify.app/",
    projectName: "AXIT",
    imgURL: require("./images/axit.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    filter__word: "bootstrap",
  },
  {
    id: 2,
    liveDemo: "https://general-power.netlify.app/",
    projectName: "general power lightning",
    imgURL: require("./images/general.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    filter__word: "bootstrap",
  },
  {
    id: 3,
    liveDemo: "https://graphy.netlify.app/",
    projectName: "graphy",
    imgURL: require("./images/graphy.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Graphy ",
    filter__word: "bootstrap",
  },
  {
    id: 4,
    liveDemo: "https://ahmaddalao.github.io/Bootstrap-Start/",
    projectName: "bootstrap-start",
    imgURL: require("./images/bootstrap_start.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Bootstrap-Start ",
    filter__word: "bootstrap",
  },
  {
    id: 5,
    liveDemo: "https://dalaotravel.netlify.app/",
    projectName: "mountain travel",
    imgURL: require("./images/travel.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Mountain-Travel ",
    filter__word: "bootstrap",
  },
  {
    id: 6,
    liveDemo: "https://eqrateam.netlify.app/",
    projectName: "eqrateam",
    imgURL: require("./images/eqra.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    filter__word: "bootstrap",
  },
  {
    id: 7,
    liveDemo: "https://dalao2.netlify.app/",
    projectName: "landing page",
    imgURL: require("./images/landing__design.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/project-3 ",
    filter__word: "",
  },
  {
    id: 8,
    liveDemo: "https://github.com/AhmadDalao/MemoryGame ",
    projectName: "memory game",
    imgURL: require("./images/memory.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/MemoryGame",
    filter__word: "javaScript",
  },
  {
    id: 9,
    liveDemo: "https://ahmaddalao.github.io/ClassicArcadeGame/ ",
    projectName: "classic arcade game",
    imgURL: require("./images/classic__game.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/ClassicArcadeGame ",
    filter__word: "javaScript",
  },
  {
    id: 10,
    liveDemo: "https://ahmaddalao.github.io/Linear-Gradient-picker/ ",
    projectName: " linear-gradient-picker",
    imgURL: require("./images/picker.jpg"),
    liveDemoText: "Live Demo",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Linear-Gradient-picker",
    filter__word: "javaScript",
  },
];

const portfolioSection = {
  title: "portfolio",
  paragraph: `Here are some of my projects. You can check the projects out using
          live preview, and most of these projects are open source code feel
          free to take a copy of your own. I would love to receive your feedback
          about my work through an email or contact section.`,
};

const portfolioList = [
  { id: 1, filtering: ".all", list__word: "All", active: "custom__active" },
  { id: 2, filtering: ".bootstrap", list__word: "Bootstrap", active: "" },
  { id: 3, filtering: ".javaScript", list__word: "JavaScript", active: "" },
];

const SkillsImages = [
  {
    id: 1,
    imgURL: require("./images/html5.svg"),
    skillName: "HTML5",
  },
  {
    id: 2,
    imgURL: require("./images/css-5.svg"),
    skillName: "CSS3",
  },
  {
    id: 3,
    imgURL: require("./images/javascript.svg"),
    skillName: "JavaScript",
  },
  {
    id: 4,
    imgURL: require("./images/bootstrap-4.svg"),
    skillName: "Bootstrap",
  },
  {
    id: 5,
    imgURL: require("./images/git-icon.svg"),
    skillName: "Git",
  },
  {
    id: 6,
    imgURL: require("./images/github-brands.svg"),
    skillName: "Github",
  },
  {
    id: 7,
    imgURL: require("./images/jquery.svg"),
    skillName: "jQuery",
  },
  {
    id: 8,
    imgURL: require("./images/json.svg"),
    skillName: "JSON",
  },
  {
    id: 9,
    imgURL: require("./images/api.svg"),
    skillName: "API",
  },
];
const SkillsSection = {
  title: "Skills",
};

export {
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillsImages,
  SkillsSection,
};
