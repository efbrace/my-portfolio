import type { IconType } from "react-icons";
import { FaCode, FaPencilRuler } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

type Service = {
  title: string;
  description: string;
   Icon:IconType;
}[];

const services: Service = [
  {
    title: "Design",
    description: `I create intuitive, visually engaging layouts that align with your brand and goals. Whether starting from scratch or improving existing designs, I ensure the result is both functional and aesthetically pleasing.`,
    Icon: FaPencilRuler
  },
  {
    title: "Development",
    description: `I build responsive and accessible websites using HTML, CSS, JavaScript, and React. I focus on performance, clean code, and seamless user interaction to bring designs to life.`,
    Icon: FaCode 
  },
  {
    title: "Maintenance",
    description: `I offer ongoing support to keep your website up-to-date, optimized, and running smoothly. From bug fixes to content updates, I help ensure your site evolves with your needs.`,
     Icon: FaScrewdriverWrench 
  },
];

export { services };
