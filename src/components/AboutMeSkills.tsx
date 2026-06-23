import { motion } from "framer-motion";

import type { IconType } from "react-icons/lib";

import {
  AppScript,
  C_Cpp,
  Css,
  Flask,
  FullStack,
  Git,
  GitHub,
  Html,
  Java,
  JavaScript,
  Linux,
  mongoDB,
  PostgreSQL,
  Python,
  React,
  ResearchWork,
  SoftwareEngineer,
  SpringBoot,
  TailwindCss,
  TypeScript,
  Vite,
  type skill,
} from "../types/Skills";

interface SkillBlob {
  name: skill;
  right: string;
  dur: number;
  delay: number;
  top: string;
}

const skills: SkillBlob[] = [
  {
    name: React,
    top: "1%",
    right: "50%",
    dur: 2.1,
    delay: 0.8,
  },

  {
    name: TypeScript,
    top: "8%",
    right: "70%",
    dur: 1.8,
    delay: 1.5,
  },

  {
    name: SpringBoot,
    top: "0%",
    right: "18%",
    dur: 2.4,
    delay: 0.3,
  },

  {
    name: TailwindCss,
    top: "18%",
    right: "60%",
    dur: 1.9,
    delay: 2.1,
  },

  {
    name: Vite,
    top: "28%",
    right: "43%",
    dur: 2.2,
    delay: 1.0,
  },

  { name: GitHub, top: "30%", right: "70%", dur: 1.7, delay: 2.6 },

  {
    name: Git,
    top: "35%",
    right: "30%",
    dur: 2.5,
    delay: 0.5,
  },

  {
    name: AppScript,
    top: "60%",
    right: "18%",
    dur: 2.0,
    delay: 3.1,
  },

  {
    name: PostgreSQL,
    top: "10%",
    right: "5%",
    dur: 1.8,
    delay: 1.8,
  },

  {
    name: mongoDB,
    top: "23%",
    right: "16%",
    dur: 2.3,
    delay: 0.7,
  },

  { name: Flask, top: "30%", right: "5%", dur: 1.9, delay: 2.4 },

  { name: Java, top: "45%", right: "70%", dur: 2.1, delay: 1.3 },

  { name: Python, top: "40%", right: "5%", dur: 2.4, delay: 0.4 },
  { name: C_Cpp, top: "62%", right: "68%", dur: 1.7, delay: 2.9 },
  { name: JavaScript, top: "12%", right: "35%", dur: 2.0, delay: 0.2 },
  { name: Html, top: "55%", right: "45%", dur: 2.3, delay: 1.6 },
  { name: Css, top: "43%", right: "42%", dur: 1.8, delay: 3.2 },
  { name: Linux, top: "75%", right: "12%", dur: 2.3, delay: 2.2 },
  { name: ResearchWork, top: "85%", right: "50%", dur: 2.1, delay: 1.0 },
  { name: SoftwareEngineer, top: "50%", right: "5%", dur: 2.3, delay: 4.0 },
  { name: FullStack, top: "70%", right: "32%", dur: 2.2, delay: 2.0 },
];

const Skills = () => {
  return (
    <>
      <motion.div className="relative w-full h-full items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: skill.delay * 0.3 }}
            className="absolute flex items-center justify-center gap-2 rounded-3xl px-3 h-8  transition-transform ease-linear duration-75  hover:rotate-6 hover:rounded-none hover:shadow-2xl hover:border-0 hover:scale-110 "
            style={{
              top: skill.top,
              right: skill.right,
              background: skill.name.bg,
              color: skill.name.color,
            }}
          >
            <a
              href={skill.name.link ? skill.name.link : "/blank"}
              className="flex text-sm gap-2 items-center justify-center w-full h-full "
            >
              {(() => {
                const Icon = skill.name.icon as IconType;
                return Icon ? <Icon size={14} /> : null;
              })()}{" "}
              {skill.name.name}{" "}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
