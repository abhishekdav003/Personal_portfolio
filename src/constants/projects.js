import youtube from "../assets/images/Projects/youtube.png";
import cart from "../assets/images/Projects/cart.jpg";
import vsms from "../assets/images/Projects/vsms.jpg";
import port from "../assets/images/Projects/port.jpeg";
import igc from "../assets/images/Projects/igc.png";
import kigc from "../assets/images/Projects/kigc.png";
import todo from "../assets/images/Projects/todo.png";
import spt from "../assets/images/Projects/spt.jpeg";
import sa from "../assets/images/Projects/sa.jpeg";
import ir from "../assets/images/Projects/ir.jpeg";

import {
  SiFlask,
  SiMongodb,
  SiReact,
  SiExpress,
  SiGithub,
  SiPython,
  SiTailwindcss,
  SiFigma,
  SiSlack,
  SiVite,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiNumpy,
} from "react-icons/all";

export const PROJECTS = [
  {
    id: "project-1",
    title: "Youtube Clone",
    github: "https://github.com/abhishekdav003/Youtube_clone",
    link: "",
    image: youtube,
    content: "Developed a YouTube clone using the MERN stack",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "ReactJs",
      },
      {
        id: "icon-2",
        icon: SiMongodb,
        name: "Mongodb",
      },
      {
        id: "icon-2",
        icon: SiGithub,
        name: "Github",
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJs",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwindcss",
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
    ],
  },
  {
    id: "project-2",
    title: "E-commerce",
    github: "",
    link: "",
    image: cart,
    content:
      "Developed an E-commerce web-app with admin panel using the MERN stack",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "ReactJs",
      },
      {
        id: "icon-2",
        icon: SiMongodb,
        name: "Mongodb",
      },
      {
        id: "icon-2",
        icon: SiGithub,
        name: "Github",
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJs",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwindcss",
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
    ],
  },
  {
    id: "project-3",
    title: "VRaS",
    github: "https://github.com/abhishekdav003/VRaS",
    link: "",
    image: vsms,
    content: "Recognize voice and send Sms",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "icon-1",
        icon: SiFlask,
        name: "Flask",
      },
    ],
  },
  {
    id: "project-5",
    title: "Implica Website Revamping",
    github: "",
    link: "",
    image: igc,
    content: "Web Elements Designing",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "icon-2",
        icon: SiSlack,
        name: "Slack",
      },
    ],
  },
  {
    id: "project-4",
    title: "Portfolio",
    github: "https://github.com/abhishekdav003/Personal_portfolio",
    link: "",
    image: port,
    content: "Personal Portfolio (This page only)",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "ReactJs",
      },
      {
        id: "icon-2",
        icon: SiGithub,
        name: "Github",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwindcss",
      },
      {
        id: "icon-2",
        icon: SiVite,
        name: "Vite",
      },
    ],
  },

  {
    id: "project-6",
    title: "Implica's Product Knocksy",
    github: "",
    link: "",
    image: kigc,
    content: "Product Elements Designing",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "icon-2",
        icon: SiSlack,
        name: "Slack",
      },
    ],
  },
  {
    id: "project-7",
    title: "To Do List",
    github: "https://github.com/abhishekdav003/Todo_List",
    link: "",
    image: todo,
    content: "This app can do all CRUD operations",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
    ],
  },

  {
    id: "project-9",
    title: "Sentiment Analysis",
    github: "",
    link: "",
    image: sa,
    content: "Sentiment Analysis on hindi language",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "python",
      },
      {
        id: "icon-2",
        icon: SiPandas,
        name: "pandas",
      },
      {
        id: "icon-2",
        icon: SiScikitlearn,
        name: "Scikitlearn",
      },
    ],
  },
  {
    id: "project-8",
    title: "Spotify Clone",
    github: "https://github.com/abhishekdav003/spotify_clone",
    link: "",
    image: spt,
    content: "You can listen your personalize playlist there.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "javascript",
      },
    ],
  },
  {
    id: "project-10",
    title: "Image Text Reader",
    github: "",
    link: "",
    image: ir,
    content: "Reads Text from image",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "python",
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "Tensorflow",
      },
      {
        id: "icon-2",
        icon: SiNumpy,
        name: "Numpy",
      },
    ],
  },
];
