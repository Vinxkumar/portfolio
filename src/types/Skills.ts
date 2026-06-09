import { BiLogoSpringBoot } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinux,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import type { IconType } from "react-icons/lib";
import { MdDeveloperMode } from "react-icons/md";
import { RiShieldKeyholeFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiMongodb, SiFlask, SiMysql, SiSqlite, SiSpring, SiPostman, SiOllama } from "react-icons/si";
import { TbApi, TbBrandVite } from "react-icons/tb";


export interface skill {
  name: string;
  bg?: string;
  icon?: IconType;
  link?: string;
  color?: string;
  profecient?:string | "learning";
}



export const React: skill = {
  name: "React",
  bg: "#61DAFB",
  icon: FaReact,
  link: "https://react.dev/reference/react",
  profecient:"60%"
};

export const MySql: skill = {
  name: "MySql",
  bg: "#61DAFB",
  icon: SiMysql,
  link: "https://dev.mysql.com/doc/",
  profecient:"55%"
};

export const SqLite: skill = {
  name: "SqLite",
  bg: "#61DAFB",
  icon: SiSqlite,
  link: "https://sqlite.org/docs.html",
  profecient:"50%"
};
export const SpringJPA: skill = {
  name: "SPring JPA",
  bg: "#61DAFB",
  icon: SiSpring,
  link: "https://docs.spring.io/spring-data/jpa/reference/",
  profecient:"45%"
};

export const TypeScript: skill = {
  name: "TypeScript",

  bg: "#3178C6",
  color: "white",
  icon: BsTypescript,
  link: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",
  profecient:"50%"
};

export const SpringBoot: skill = {
  name: "SpringBoot",
  bg: "#6DB33F",
  color: "white",
  icon: BiLogoSpringBoot,
  link: "https://www.geeksforgeeks.org/advance-java/spring-boot/",
  profecient:"55%"
};

export const TailwindCss: skill = {
  name: "tailwindCSS",
  bg: "#38BDF8",
  icon: RiTailwindCssFill,
  link: "https://tailwindcss.com/docs/installation/using-vite",
  profecient:"65%"
};

export const Vite: skill = {
  name: "Vite",
  bg: "#646CFF",
  icon: TbBrandVite,
  link: "https://vite.dev/guide/",

};

export const GitHub: skill = {
  name: "GitHub",
  bg: "black",
  color: "white",
  icon: FaGithub,
  link: "https://docs.github.com/en/get-started/git-basics",
  profecient:"65%"
};

export const Git: skill = {
  name: "Git",

  bg: "#F05032",
  icon: FaGitAlt,
  link: "https://git-scm.com/about",
  profecient:"60%"
};

export const AppScript: skill = {
  name: "AppScript",
  bg: "#34A853",
  color: "white",
  link: "https://developers.google.com/workspace/guides/get-started",
};

export const PostgreSQL: skill = {
  name: "PostgreSQL",
  bg: "#336791",
  color: "white",
  icon: SiPostgresql,
  link: "https://www.postgresql.org/docs/",
  profecient:"50%"
};

export const mongoDB: skill = {
  name: "mongoDB",
  bg: "#47A248",
  color: "white",
  icon: SiMongodb,
  link: "https://www.mongodb.com/docs/get-started/?language=nodejs",
  profecient:"learning"
};

export const Flask: skill = {
  name: "flask",
  bg: "#FFFFFF",
  icon: SiFlask,
  link: "https://flask.palletsprojects.com/en/stable/",
  profecient:"50%"
};

export const Java: skill = {
  name: "Java",
  bg: "#E76F00",
  icon: FaJava,
  link: "https://dev.java/learn/getting-started/",
  profecient:"75%"
};

export const Python: skill = {
  name: "Python",
  bg: "#3776AB",
  color: "white",
  icon: FaPython,
  link: "https://www.python.org/about/gettingstarted/",
  profecient:"75%"
};

export const C_Cpp: skill = {
  name: "C/C++",
  bg: "#00599C",
  color: "white",
  link: "https://www.geeksforgeeks.org/cpp/c-plus-plus/",
  profecient:"50%"
};

export const JavaScript: skill = {
  name: "JavaScript",
  bg: "#F7DF1E",
  icon: IoLogoJavascript,
  link: "https://devdocs.io/javascript/",
  profecient:"60%"
};

export const Html: skill = {
  name: "HTML/5",
  bg: "#E34F26",
  icon: FaHtml5,
  link: "https://www.w3schools.com/html/html_intro.asp",
  profecient:"75%"
};

export const Css: skill = {
  name: "CSS/3",
  bg: "#1572B6",
  color: "white",
  icon: FaCss3Alt,
  link: "https://www.w3schools.com/css/",
  profecient:"75%"
};

export const Linux: skill = {
  name: "Linux",
  bg: "#FCC624",
  icon: FaLinux,
  link: "https://www.linux.org/forums/linux-beginner-tutorials.123/",
  profecient:"45%"
};

export const ResearchWork: skill = {
  name: "Research Work",
  bg: "#9B8FD4",
  icon: GiArchiveResearch,
  link: "",
};

export const SoftwareEngineer: skill = {
  name: "Software Engineer",
  bg: "#FFD700",
  link: "https://www.geeksforgeeks.org/software-engineering/software-engineering/",
};

export const FullStack: skill = {
  name: "Full-Stack Developer",
  bg: "#e8805e",
  icon: MdDeveloperMode,
  link: "",
};

export const SQL: skill = {
  name: "SQL",
  icon: FaDatabase,
  bg: "#336791",
  color: "white",
  link: "https://www.w3schools.com/sql/",
  profecient: "68%",
};



export const Postman: skill = {
  name: "Postman",
  icon: SiPostman,
  bg: "#FF6C37",
  color: "white",
  link: "https://www.postman.com/",
  profecient: "75%",
};


export const Ollama: skill = {
  name: "Ollama",
  icon: SiOllama,
  bg: "#000000",
  color: "white",
  link: "https://ollama.com/",
  profecient: "35%",
};

export const RestAPI: skill = {
  name: "REST API",
  icon: TbApi,
  bg: "#009688",
  color: "white",
  link: "https://restfulapi.net/",
  profecient: "65%",
};

export const JWTAuth: skill = {
  name: "JWT Auth",
  icon: RiShieldKeyholeFill,
  bg: "#4CAF50",
  color: "white",
  link: "https://jwt.io/",
  profecient: "50%",
};