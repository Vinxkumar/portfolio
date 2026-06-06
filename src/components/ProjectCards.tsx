import { FaJava } from "react-icons/fa6";

import portfolio from "../assets/portfolio.png";
import autoattend from "../assets/autoAttendance.png";
import visionCaption from "../assets/visionCaption.png"
import DocCare from "../assets/DocCare.png"

import { motion } from "framer-motion";

import type { projectProp } from "../types/project";
import { FaCss3Alt, FaDailymotion, FaHtml5, FaJs, FaMask, FaMix, FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiHuggingface, SiLivewire,  SiPytorch, SiSolidity, SiSpringboot, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

import { FiGithub, } from "react-icons/fi";

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
      gitlink: "http://github.com/Vinxkumar/Blockchain-Based-Voting-System",
      delay: 0.5
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
      gitlink: "https://github.com/Vinxkumar/portfolio",
      img: portfolio,
      delay: 0.8
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
      <div className="grid grid-cols-3  w-full relative">
  {projects.map((project, idx) => (
    <div key={idx}>
      <motion.div 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        transition={{ delay: project.delay, duration:0.5, ease:"easeInOut"}}
        className={`
          group relative
          flex flex-col gap-2
          border-gh-border
          transition-all duration-300 ease-out
          
          p-4
          hover:rounded-t-xl
          hover:bg-gh-surface
          hover:z-20
          hover:-translate-y-2
          hover:scale-105
          hover:border-none
          ${idx < 2 ? "border-b-2 border-r-2" : idx === 2 ? "border-b-2" : ""}
          ${idx > 2 && idx !=5 ?  "border-r-2" : ""}
        `}
      >

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between ">          
            <h1 className="text-3xl font-extrabold group-hover:animate-bounce text-transparent [-webkit-text-stroke:2px_#3fb950]">
              {project.status==="future"? (
                <span className="items-center ">{project.title}</span>
              ): (
                <span>{idx+1}</span>
              ) }
  
           
            </h1>
            <div className="flex gap-1">
             {project.gitlink && <a href={project.gitlink} className="flex cursor-pointer hover:translate-y-1 items-center bg-black text-white gap-1.5 text-xs px-3 py-1 hover:rounded-full border-gh-border transition-all duration-300"> <FiGithub/> GitHub </a>}
             {project.gitlink_ && <a href={project.gitlink_} className="flex cursor-pointer hover:translate-y-1 items-center bg-black text-white gap-1.5 text-xs px-3 py-1 hover:rounded-full border-gh-border transition-all duration-300"> <FiGithub/> GitHub </a>}
             {project.liveLink && <a href={project.liveLink} className="flex animate-pulse hover:translate-y-1 cursor-pointer items-center bg-yellow-300/30 border-yellow-300 border text-white gap-1.5 text-xs px-3 py-1 rounded-full border-gh-border transition-all duration-300"> <SiLivewire/> live </a>}

            </div>

          </div>

          <span className="text-xl text-white">
            {project.status === "future" ? (
              <span></span>
            ) : (
              project.title
            )}
          </span>
        </div>


        <div className="flex flex-wrap gap-2">
          {project.status !== "future" &&
            project.tech.map((t, dx) => (
              <span
                key={dx}
                style={{
                  backgroundColor: t.bg,
                  borderColor: t.bg + "33",
                }}
                className="flex items-center hover:translate-y-1 gap-1.5 text-xs cursor-auto px-3 py-1 rounded-full border transition-all duration-200"
              >
                {t.icon && (
                  <span style={{ color: "white" }} className="text-sm">
                    {t.icon}
                  </span>
                )}
                <span style={{ color: "black" }}>{t.name}</span>
              </span>
            ))}
        </div>

        <div
          className="
            absolute left-0 right-0 top-full z-20
            bg-gh-surface rounded-b-xl
            px-4 py-3
            opacity-0 group-hover:opacity-100
            -translate-y-4 group-hover:translate-y-0
            transition-all duration-400 ease-out
            pointer-events-none group-hover:pointer-events-auto
          "
        >
          <p className="text-sm text-zinc-400 p-2 bg-gh-bg rounded-xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  ))}
</div>
    </>
  );
};

export default ProjectCard;
