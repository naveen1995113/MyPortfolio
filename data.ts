import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IService, ISkill } from "./types";
export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Operating System",
    about: "Flexible to work on either windows or mac operating systems",
  },
];

export const skills: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: 85,
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: 80,
  },
  {
    Icon: BsCircleFill,
    name: "Webpack5",
    level: 75,
  },
  {
    Icon: BsCircleFill,
    name: "NodeJS",
    level: 63,
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: 85,
  },
  {
    Icon: BsCircleFill,
    name: "Html5",
    level: 88,
  },
  {
    Icon: BsCircleFill,
    name: "Css3",
    level: 85,
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: 55,
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "VSCode",
    level: 85,
  },
  {
    Icon: BsCircleFill,
    name: "Visual Studio",
    level: 75,
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: 80,
  },
  {
    Icon: BsCircleFill,
    name: "TFS",
    level: 70,
  },

  {
    Icon: BsCircleFill,
    name: "Figma",
    level: 77,
  },
  {
    Icon: BsCircleFill,
    name: "BitBucket",
    level: 45,
  },
  {
    Icon: BsCircleFill,
    name: "Windows",
    level: 88,
  },
  {
    Icon: BsCircleFill,
    name: "MacOS",
    level: 82,
  },
];
