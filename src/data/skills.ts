import html5 from "../assets/skills-logos/html5.png";
import css3 from "../assets/skills-logos/css3.png";
import javascript from "../assets/skills-logos/java-script.png";
import react from "../assets/skills-logos/react.png";
import figma from "../assets/skills-logos/figma.png";

import nodejs from "../assets/skills-logos/nodejs.png";
import mongodb from "../assets/skills-logos/mongodb.png";
import expressjs from "../assets/skills-logos/expressjs.png";

import git from "../assets/skills-logos/git.png";
import github from "../assets/skills-logos/github.png";

import photoshop from "../assets/skills-logos/photoshop.png";
import illustrator from "../assets/skills-logos/illustrator.png";
import premierepro from "../assets/skills-logos/premiere-pro.png";
import blender3d from "../assets/skills-logos/blender3d.png";

type Skill = {
  imgSrc: string;
  label: string;
};

type TechSkills = {
  title: string;
  skills: Skill[];
};

type SoftSkills = string[];

type Experience = {
  role: string;
  organization: string;
  location: string;
  date: string;
};

const techSkills: TechSkills[] = [
  {
    title: "Frontend",
    skills: [
      { imgSrc: html5, label: "html5" },
      { imgSrc: css3, label: "css3" },
      { imgSrc: javascript, label: "Javascript" },
      { imgSrc: react, label: "React" },
      { imgSrc: figma, label: "Figma" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { imgSrc: nodejs, label: "Nodejs" },
      { imgSrc: mongodb, label: "MongoDB" },
      { imgSrc: expressjs, label: "ExpressJs" },
    ],
  },
  {
    title: "Version Control & Collaboration",
    skills: [
      { imgSrc: git, label: "Git" },
      { imgSrc: github, label: "Git-Hub" },
    ],
  },
  {
    title: "Design & Creative Tools",
    skills: [
      { imgSrc: figma, label: "Figma" },
      { imgSrc: photoshop, label: "Photoshop" },
      { imgSrc: illustrator, label: "Illustrator" },
      { imgSrc: premierepro, label: "Premire Pro" },
      { imgSrc: blender3d, label: "Blender" },
    ],
  },
];

const softSkills: SoftSkills = [
  "Strong leadership abilitie, fostering teamwork.",
  "Effective communication skills, including active listening and delivering engaging presentations.",
  "Creativity",
  "Time Management",
  "Problem-Solving",
];

const experience: Experience[] = [
  {
    role: "Backend Developer Intern",
    organization: "Meltwater Entrepreneurial School of Technology (MEST)",
    location: "Accra, Ghana",
    date: "05/2025 – Present",
  },
  {
    role: "Compliance Officer - National Service",
    organization: "Social Security and National Insurance Trust (SSNIT)",
    location: "Accra, Ghana",
    date: "01/2024 – 10/2024",
  },
  {
    role: "Registration Officer - National Service",
    organization: "Social Security and National Insurance Trust (SSNIT)",
    location: "Accra, Ghana",
    date: "11/2023 – 12/2023",
  },
  {
    role: "Quality Control Analyst - Intern",
    organization: "Volta Star Textiles Limited",
    location: "Juapong, Ghana",
    date: "11/2023 – 12/2023",
  },
];

export { techSkills, softSkills, experience };
