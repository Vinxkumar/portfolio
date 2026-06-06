import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

import blockchain from "../assets/BlockChain.png";
import portfolio from "../assets/portfolio.png";
import autoattend from "../assets/autoAttendance.png";
import visionCaption from "../assets/visionCaption.png"
import DocCare from "../assets/DocCare.png"
// import docCare from "../assets/DocCare.png"



import type { projectProp } from "../types/project";

const ProjectCard = () => {
  const projects: projectProp[] = [
    {
      title: "BlockChain Based Voting System",
      description:
        "A tamper-proof college election platform built on blockchain, ensuring transparent and verifiable voting with immutable records and secure student authentication",
      tech: [
        { name: "HTML/5",      bg: "#e34f26", icon: <FaHtml5 /> },
        { name: "CSS/3",       bg: "#1572b6", icon: <FaCss3Alt /> },
        { name: "JavaScript",  bg: "#f7df1e", icon: <FaJs /> },
        { name: "Solidity",    bg: "#a855f7", icon: <SiSolidity /> },
        { name: "Metamask",    bg: "#f6851b", icon: <FaMask /> },
        { name: "Remix",       bg: "#7c3aed", icon: <FaMix /> },
      ],
      status: "complete",
      link: "http://github.com/Vinxkumar/Blockchain-Based-Voting-System",
      img: blockchain,
      // top: "0%",
      // left: "0%",
      // delay: 0.1,
    },
    {
      title: "Folio",
      description:
        "A modern developer portfolio built with React, TypeScript, and Tailwind CSS — featuring scroll-based animations, dynamic UI components, and a dark aesthetic that reflects my design sensibility",
      tech: [
        { name: "TypeScript",  bg: "#3178c6", icon: <SiTypescript /> },
        { name: "React",       bg: "#61dafb", icon: <FaReact /> },
        { name: "TailwindCSS", bg: "#38bdf8", icon: <SiTailwindcss /> },
        {name:"FramerMotion" , bg: "yellow", icon:<FaDailymotion/>}
      ],
      status: "complete",
      link: "https://github.com/Vinxkumar/portfolio",
      img: portfolio,
      // top: "0%",
      // left: "33.34%",
      // delay: 0.7,
    },
 {
    title: "VisionCaption",
    description: "An AI-powered image captioning tool that uses Salesforce BLIP via Hugging Face to automatically generate natural language descriptions from uploaded images",
    status: "complete",
    gitlink: "https://github.com/Vinxkumar/VisionCaption",
    img: visionCaption,
    tech: [
      { name: "Python",      bg: "#3b82f6", icon: <FaPython /> },
      { name: "Tkinter",     bg: "#64748b", icon: <FaPython /> },
      { name: "HuggingFace", bg: "#f59e0b", icon: <SiHuggingface /> },
      { name: "torch",       bg: "#ee4c2c", icon: <SiPytorch /> },
      { name: "BLIP",        bg: "#8b5cf6", icon: <SiHuggingface /> },
    ],
    delay: 1
  },
  {
    title: "Doc@Care",
    description: "A fullstack healthcare management system enabling patients to book appointments, view prescriptions, and track medical history — while doctors and pharmacists manage records and medicine inventory in real time",
    status: "ongoing",
    gitlink: "https://github.com/Vinxkumar/Hospital-CRM",
    img: DocCare,
    tech: [
      { name: "React",       bg: "#61dafb", icon: <FaReact /> },
      { name: "TailwindCSS", bg: "#38bdf8", icon: <SiTailwindcss /> },
      { name: "TypeScript",  bg: "#3178c6", icon: <SiTypescript /> },
      { name: "Vite",        bg: "#a855f7", icon: <SiVite /> },
      { name: "SpringBoot",  bg: "#6db33f", icon: <SiSpringboot /> },
      { name: "Java",        bg: "#f89820", icon: <FaJava /> },
    ],
    delay: 1.3
  },
  {
    title: "AutoAttendance",
    description: "An automated attendance tracking system that streamlines student attendance management with real-time updates and reporting for teachers",
    status: "ongoing",
    gitlink:"https://github.com/Vinxkumar/AutoAttendance_FE",
    gitlink_:"https://github.com/Vinxkumar/AutoAttendance_BE",
    liveLink: "https://auto-attendance-three.vercel.app/",
    img: autoattend,
    tech: [
      { name: "React",       bg: "#61dafb", icon: <FaReact /> },
      { name: "TailwindCSS", bg: "#38bdf8", icon: <SiTailwindcss /> },
      { name: "TypeScript",  bg: "#3178c6", icon: <SiTypescript /> },
      { name: "Vite",        bg: "#a855f7", icon: <SiVite /> },
      { name: "Flask",       bg: "#94a3b8", icon: <SiFlask /> },
      { name: "Python",      bg: "#3b82f6", icon: <FaPython /> },
    ],
    delay: 1.8
  },
  {
    title: "loading in Future",
    description: "Something is cooking — stay tuned.",
    status: "future",
    gitlink:"",
    gitlink_:"",
    liveLink: "",

    tech: [
      { name: "React",       bg: "#61dafb",  },
      { name: "TailwindCSS", bg: "#38bdf8", },
      { name: "TypeScript",  bg: "#3178c6", },
      { name: "Vite",        bg: "#a855f7", },
      { name: "Flask",       bg: "#94a3b8",  },
      { name: "Python",      bg: "#3b82f6",  },
    ],
    delay: 1.9
  },
]


  return (
    <>
      <div className="gap-3 flex w-full h-full ">
        <motion.div 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once:true}}
            transition={{
                delay: 0.4, duration:0.5
            }}
        className="w-[30%] h-full p-4 bg-[#2c2c2c] border transition-normal ease-in  rounded-2xl border-[#3a3a3a]">
          <div className="grid grid-cols-1 ">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className={`w-full cursor-pointer flex items-center h-12 border-b border-[#3a3a3a] transition-all ease-in-out text-[#eee8d8] hover:ml-[3%] hover:border-b-white hover:border-b-2 
                ${currentProject == idx ? "ml-[3%] border-b-3 border-b-[#c05c40] " : ""}`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </motion.div>

          </div>

          <div
            className="absolute bottom-0 opacity-0 h-[50%] left-0 w-full z-10 bg-[#1e1e1e]/98 rounded-b-2xl p-6 flex flex-col gap-4
  translate-z-full group-hover:translate-z-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            <div className="w-full p-4 rounded-2xl bg-[#2c2c2c] text-[#eee8d8] text-sm leading-relaxed">
              {selected.description}
            </div>

            <div className="flex flex-wrap gap-2">
              {selected.tech.map((stack, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 rounded-full bg-[#c05c40] text-white hover:scale-110"
                >
                  {stack}
                </span>
              ))}
            </div>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#eee8d8] hover:text-[#e8805e] transition-colors w-fit"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
