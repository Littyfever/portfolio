/* Tech Stack */
import CSS3 from "../assets/TechStack/CSS3.png";
import ExpressJS from "../assets/TechStack/ExpressJS.png";
import Git from "../assets/TechStack/Git.png";
import GitHub from "../assets/TechStack/GitHub.png";
import HTML5 from "../assets/TechStack/HTML5.png";
import JavaScript from "../assets/TechStack/Javascript.png";
import MongoDB from "../assets/TechStack/MongoDB.png";
import NodeJS from "../assets/TechStack/NodeJS.png";
import PostgreSQL from "../assets/TechStack/PostgreSQL.png";
import ReactJS from "../assets/TechStack/ReactJS.png";
import Redux from "../assets/TechStack/Redux.png";

/*Profile Pic*/
import profilePic from "../assets/profilePic.jpg";

/* Logo nav */
import logoNav from "../assets/logo.png";

/* img about me */
import typingBro from "../assets/Code typing-bro.png";

/* formation */
import obraje from "../assets/logoObraje.jpg";
import henry1 from "../assets/LogoHenry.png";

import FCEFyN from "../assets/FCEFyN.png";
import oxford from "../assets/oxford.png";

/* utils */
import externalLink from "../assets/externalLink.png";

/*Projects*/
import HypeShop from "../assets/HypeShop.png";

const images = {
  profilePic,
  logoNav,
  typingBro,
  externalLink,

  techStack: [
    { JavaScript: JavaScript },
    { ReactJS: ReactJS },
    { Redux: Redux },
    { HTML5: HTML5 },
    { CSS3: CSS3 },
    { NodeJS: NodeJS },
    { ExpressJS: ExpressJS },
    { MongoDB: MongoDB },
    { PostgreSQL: PostgreSQL },
    { Git: Git },
    { GitHub: GitHub },
  ],
};

const formation = [
  {
    title: "Professional and Personal Computer Technician",
    site: "El Obraje Parochial Technical Institute",
    type: "Secondary education",
    state: "Graduate",
    logo: obraje,
    diplomaLink: "/diplomaObraje_ValentinMorardo.pdf",
    webLink: "https://www.elobraje.edu.ar/",
  },

  {
    title: "Full stack web developer",
    site: "SoyHenry Bootcamp",
    type: "Bootcamp",
    state: "Graduate",
    logo: henry1,
    diplomaLink: "/diplomaSoyHenry_ValentinMorardo.pdf",
    webLink: "https://www.soyhenry.com/",
  },

  {
    title: "Computer engineer",
    site: "Faculty of Exact, Physical and Natural Sciences - National University of Córdoba",
    type: "University education",
    state: "Paused",
    logo: FCEFyN,

    webLink: "https://fcefyn.unc.edu.ar/",
  },

  {
    title: "Advanced knowledge of English",
    site: "Oxford Institute - Alta Gracia, Cordoba",
    type: "English academy",
    state: "In progress",
    logo: oxford,

    webLink: "https://www.instagram.com/oxfordaltagracia/",
  },
];

const projects = [
  {
    id: 1,
    title: "HypeShop",
    description:
      "Final project of SoyHenry's full stack development bootcamp. HypeShop is Online shoe store simulator application",
    techStack: [
      JavaScript,
      ReactJS,
      Redux,
      HTML5,
      CSS3,
      NodeJS,
      ExpressJS,
      PostgreSQL,
    ],
    logo: HypeShop,
    repositoryLink: "https://github.com/Littyfever/PF-Hype-Shop",
    demoLink: "https://hype-kappa.vercel.app/",
    videoLink: "https://youtu.be/JowFmyuF_c0",
  },


];

export { images, formation, projects };
