import igc from "../assets/images/Experience/igc.png";
import nits from "../assets/images/Experience/nits.png";
import ef from "../assets/images/Experience/ef.png";

import {
  SiFigma,
  SiSlack,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
} from "react-icons/all";

export const EXPERIENCES = [
  {
    organisation: "Implica Global Corporation",
    logo: igc,
    link: "",
    positions: [
      {
        title: "Assitant Graphic Designer Intern (Remote)",
        duration: "Oct 2023 - July 2024",
        content: [
          {
            text: "Worked on revamping Company's Website Element.",
            tech: [
              {
                id: "f-2",
                icon: SiFigma,
                name: "Figma",
              },
              {
                id: "f-1",
                icon: SiSlack,
                name: "Slack",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "NIT Silchar",
    logo: nits,
    link: "",
    positions: [
      {
        title: "Data Science Intern",
        duration: "Jun 2024 - July 2024",
        content: [
          {
            text: "Worked on Sentiment Analysis of Hindi Languages.",
            link: "",
            tech: [
              {
                id: "f-1",
                icon: SiPython,
                name: "Python",
              },
              {
                id: "f-2",
                icon: SiScikitlearn,
                name: "Scikitlearn",
              },
              {
                id: "f-2",
                icon: SiPandas,
                name: "Pandas",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "Edunet Foundation",
    logo: ef,
    link: "",
    positions: [
      {
        title: "Frontend Developer Intern",
        duration: "Jun 2023 - July 2023",
        content: [
          {
            text: "Developed Various Mini Projects using Frontend Technologies.",
            link: "",
            tech: [
              {
                id: "f-1",
                icon: SiHtml5,
                name: "HTML",
              },
              {
                id: "f-2",
                icon: SiCss3,
                name: "CSS",
              },
              {
                id: "f-2",
                icon: SiJavascript,
                name: "JavaScript",
              },
              {
                id: "f-2",
                icon: SiGithub,
                name: "Github",
              },
            ],
          },
        ],
      },
    ],
  },
];
