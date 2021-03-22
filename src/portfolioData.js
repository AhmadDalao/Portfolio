/* this file contains all the objects ,
 one object or an array for each container (section) */

const colorContainerData = {
  fontIcon: "fas fa-cog",
  paragraphOne: `Choose your favorite color`,
  paragraphTwo: `default color`,
};

const defaultColor = {
  defaultColor: "#2ecc71",
};

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
const headerImage = {
  headerImage_src: require("./images/header_image-Recovered-Recovered.png"),
};
const projectsData = [
  {
    id: 1,
    liveDemo: "https://eqra2.netlify.app/",
    projectName: "eqrateam",
    imgURL: require("./images/eqra.png"),
    liveDemoText: "Live Demo",
    project__info:
      "I designed and built 7 responsive pages and a landing page for eqraTeam and it is built using pure HTML CSS and JavaScript.",
    sourceCodeText: "Source Code",
    filter__word: "bootstrap",
  },
  {
    id: 2,
    liveDemo: "https://graphy.netlify.app/",
    projectName: "graphy",
    imgURL: require("./images/graphy.png"),
    liveDemoText: "Live Demo",
    project__info:
      "I built and designed a responsive page for photographers and it is built using HTML, CSS, JavaScript, jQuery and Bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Graphy ",
    filter__word: "bootstrap",
  },
  {
    id: 3,
    liveDemo: "https://general-power.netlify.app/",
    projectName: "general power lightning",
    imgURL: require("./images/general.png"),
    liveDemoText: "Live Demo",
    project__info:
      "I designed and built a responsive landing page for general power lightning. Technologies used HTML5 CSS3 Bootstrap jQuery.",
    sourceCodeText: "Source Code",
    filter__word: "bootstrap",
  },
  {
    id: 4,
    liveDemo: "https://ahmaddalao.github.io/Bootstrap-Start/",
    projectName: "bootstrap-start",
    imgURL: require("./images/bootstrap_start.png"),
    liveDemoText: "Live Demo",
    project__info:
      "I built a responsive page for portfolio projects and it is built using HTML CSS Bootstrap and JavaScript.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Bootstrap-Start ",
    filter__word: "bootstrap",
  },
  {
    id: 5,
    liveDemo: "https://dalaotravel.netlify.app/",
    projectName: "mountain travel",
    imgURL: require("./images/travel.png"),
    liveDemoText: "Live Demo",
    project__info:
      "I designed and built a responsive page for a travel agency and it is built using HTML CSS Bootstrap and JavaScript.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/Mountain-Travel ",
    filter__word: "bootstrap",
  },
  {
    id: 6,
    liveDemo: "https://axit-dalao.netlify.app/",
    projectName: "AXIT",
    imgURL: require("./images/axit.png"),
    liveDemoText: "Live Demo",
    project__info:
      "I built a responsive landing page for a startup, Technologies used HTML5 CSS3 Bootstrap jQuery.",
    sourceCodeText: "Source Code",
    filter__word: "bootstrap",
  },
  // {
  //   id: 7,
  //   liveDemo: "https://dalao2.netlify.app/",
  //   projectName: "landing page",
  //   imgURL: require("./images/landing__design.jpg"),
  //   liveDemoText: "Live Demo",
  //   sourceCodeText: "Source Code",
  //   sourceURL: "https://github.com/AhmadDalao/project-3 ",
  //   filter__word: "",
  // },
  {
    id: 8,
    liveDemo: "https://github.com/AhmadDalao/MemoryGame ",
    projectName: "memory game",
    imgURL: require("./images/memory.png"),
    liveDemoText: "Live Demo",
    project__info:
      "This is a complete browser-based card matching game. Built using HTML CSS Bootstrap and JavasScript",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AhmadDalao/MemoryGame",
    filter__word: "javaScript",
  },
  // {
  //   id: 9,
  //   liveDemo: "https://ahmaddalao.github.io/ClassicArcadeGame/ ",
  //   projectName: "classic arcade game",
  //   imgURL: require("./images/classic__game.jpg"),
  //   liveDemoText: "Live Demo",
  //   sourceCodeText: "Source Code",
  //   sourceURL: "https://github.com/AhmadDalao/ClassicArcadeGame ",
  //   filter__word: "javaScript",
  // },
  // {
  //   id: 10,
  //   liveDemo: "https://ahmaddalao.github.io/Linear-Gradient-picker/ ",
  //   projectName: " linear-gradient-picker",
  //   imgURL: require("./images/picker.jpg"),
  //   liveDemoText: "Live Demo",
  //   sourceCodeText: "Source Code",
  //   sourceURL: "https://github.com/AhmadDalao/Linear-Gradient-picker",
  //   filter__word: "javaScript",
  // },
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
const SkillsSection = {
  id: "skills",
  title: "Skills",
  skillsImage: require("./images/skills.png"),
};

const SkillsImages = [
  {
    id: 1,
    // imgURL: require("./images/html5.svg"),
    skillName: "HTML5",
  },
  {
    id: 2,
    skillName: "CSS3",
  },
  {
    id: 3,
    skillName: "JavaScript",
  },
  {
    id: 4,
    skillName: "Bootstrap",
  },
  {
    id: 5,
    skillName: "Git",
  },
  {
    id: 6,
    skillName: "PHP",
  },
  {
    id: 7,
    skillName: "JSON",
  },
  {
    id: 8,
    skillName: "API",
  },
];

const AboutSection = {
  id: "about",
  title: "about me",
  paragraph: ` I'm a Software Engineer / Developer who loves building and developing
          applications and websites. I'd love to combine my passion for
          programming and learning with my software engineering skills to
          continue building more personalized applications and websites for
          people. I have a passion to learn everything new, contributing to the
          progress of mankind, and show creativity and possibilities in
          everything I do.`,
};
const AboutServices = {
  title: "services",
};

const servicesData = [
  {
    id: 1,
    serviceName: "Web development",
    serviceImg: require("./images/undraw_version_control_9bpv.svg"),
    serviceDescription:
      "I can build your ideal website from scratch with the newest technologies.",
  },
  {
    id: 2,
    serviceName: "GRAPHIC DESIGN",
    serviceImg: require("./images/undraw_design_notes_8dmv.svg"),
    serviceDescription:
      "I can design your website and make it beautiful to right fit your test.",
  },
  {
    id: 3,
    serviceName: "UX & UI DESIGN",
    serviceImg: require("./images/undraw_design_tools_42tf.svg"),
    serviceDescription:
      "I can make the user interface and experience more appealing to users.",
  },
  {
    id: 4,
    serviceName: "SEO",
    serviceImg: require("./images/undraw_file_searching_duff.svg"),
    serviceDescription: "Can make your website appears on top when searching.",
  },
];

const resumeData = {
  id: "resume",
  resumeInfo: ` If you would like to learn more about me or have PDF copy of my resume
          please feel free to click the download button, The resume provides
          detailed information about me and more contact information.`,
  resumeAnchorText: "Download Resume",
  resumeURL: require("./download/Software-Developer-Ahmad-Dalao.pdf"),
};

const contactData = {
  id: "contact",
  contactText: "contact me",
  submitButton: "Submit",
  inputName: " Your name",
  inputEmail: "Email",
  inputSubject: "Subject",
  textArea: "message",
};

const FooterData = {
  FooterText: "find me on",
};

const footerSocialData = [
  {
    id: 1,
    socialName: "twitter",
    socialImg: "fab fa-twitter",
    socialURL: "https://twitter.com/AhmadDalao/",
  },
  {
    id: 2,
    socialName: "Linkedin",
    socialImg: "fab fa-linkedin",
    socialURL: "https://www.linkedin.com/in/ahmad-dalao/",
  },
  {
    id: 3,
    socialName: "Github",
    socialImg: "fab fa-github",
    socialURL: "https://github.com/AhmadDalao",
  },
  {
    id: 4,
    socialName: "stackoverflow",
    socialImg: "fab fa-stack-overflow",
    socialURL: "https://stackoverflow.com/users/9283958/ahmad-dalao",
  },
];

const copyright = {
  first__word: "Copyright",
  second__word: "AhmadDalao 2020",
};

export {
  defaultColor,
  colorContainerData,
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  headerImage,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillsImages,
  SkillsSection,
  AboutSection,
  AboutServices,
  servicesData,
  resumeData,
  contactData,
  FooterData,
  footerSocialData,
  copyright,
};
