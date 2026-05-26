import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa6";

import blockchain from "../assets/BlockChain.png";
import portfolio from "../assets/portfolio.png";
import autoattend from "../assets/autoAttendance.png";
// import visionCaption from "../assets/visionCaption.png"
// import docCare from "../assets/DocCare.png"

import type { projectProp } from "../types/project";
import GitHubButton from "./GitHubButton";
const ProjectCard = () => {
  const projects: projectProp[] = [
    {
      title: "BlockChain Based Voting System",
      description:
        "A tamper-proof college election platform built on blockchain, ensuring transparent and verifiable voting with immutable records and secure student authentication",
      tech: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Solidity",
        "MetaMask",
        "Remix",
      ],
      status: "complete",
      link: "http://github.com/Vinxkumar/Blockchain-Based-Voting-System",
      img: blockchain,
      top: "0%",
      left: "0%",
      delay: 0.1,
    },
    {
      title: "Folio",
      description:
        "A modern developer portfolio built with React, TypeScript, and Tailwind CSS — featuring scroll-based animations, dynamic UI components, and a dark aesthetic that reflects my design sensibility",
      tech: ["React", "TailwindCSS", "TypeScript", "Framer-Motion"],
      status: "complete",
      link: "https://github.com/Vinxkumar/portfolio",
      img: portfolio,
      top: "0%",
      left: "33.34%",
      delay: 0.7,
    },
    {
      title: "VisionCaption",
      description:
        "An AI-powered image captioning tool that uses Salesforce BLIP via Hugging Face to automatically generate natural language descriptions from uploaded images",
      tech: ["Python", "Tkinter", "HuggingFace", "torch", "BLIP"],
      status: "complete",
      link: "https://github.com/Vinxkumar/VisionCaption",
      top: "0%",
      left: "66.68%",
      delay: 0.4,
    },
    {
      title: "Doc@Care",
      description:
        "A fullstack healthcare management system enabling patients to book appointments, view prescriptions, and track medical history — while doctors and pharmacists manage records and medicine inventory in real time",
      tech: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Vite",
        "SpringBoot",
        "Java",
      ],
      
      status: "ongoing",
      link: "https://github.com/Vinxkumar/Hospital-CRM",
      top: "50%",
      left: "0%",
      delay: 0.2,
    },
    {
      title: "AutoAttendance",
      description:
        "An automated attendance tracking system that streamlines student attendance management with real-time updates and reporting for teachers",
      tech: ["React", "TailwindCSS", "TypeScript", "Vite", "Flask", "python"],
      status: "ongoing",
      img: autoattend,
      link: "https://auto-attendance-three.vercel.app/",
      top: "50%",
      left: "33.34%",
      delay: 0.5,
    },
  ];

  return (
    <>
      <div className="relative gap-3 flex w-full h-full text-[#eee8d8]">
  {projects.map((project, indx) => (
    <motion.div
      key={indx}
      initial={{ y: 100 }}
      animate={{ y: [0, 10, 5, 0], x: [0, 10, 5, 0],  opacity: 1 }}
      transition={{
        delay: project.delay,
        duration: 2.9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={()=> window.open(project.link, "_blank")}
      className="absolute flex  items-center transition-all rounded-3xl  justify-between w-[33%] h-[50%]"
      style={{ top: project.top, left: project.left }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        transition={{
          default: { duration: 1, delay: 0.6 },
          scale: { duration: 0.2 },
        }}
        className="group relative flex flex-col w-full h-[90%] m-1 cursor-pointer border border-[#3a3a3a] rounded-xl overflow-hidden font-poppins bg-[#2c2c2c] hover:bg-[#eee8d8]"
      >

        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-[90%] top-[20%] object-cover transition-opacity duration-300 group-hover:opacity-0 z-0"
        />

        <div className="absolute inset-0  group-hover:opacity-0 transition-opacity duration-300 z-10" />

        <div className="relative z-20 flex flex-col h-full p-4 gap-2">
          

          <div className="relative w-full">
            <h2 className="font-bold flex gap-12 justify-between w-full text-md top-[0%] text-[#e8805e] group-hover:text-[#c05c40] ">
              {project.title} <FaGithub/>
            </h2>
            <div className="absolute -bottom-0.5 left-0 origin-left scale-x-0 h-[2px] w-full rounded-full bg-[#e8805e] transition-transform duration-500 delay-75 group-hover:scale-x-100" />
          </div>
          <p className="text-sm font-light text-transparent group-hover:text-[#2c2c2c]">
            {project.description}
          </p>


          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((stack, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs rounded-3xl border border-transparent text-transparent group-hover:border-[#c8bfa8] group-hover:text-[#eee8d8] group-hover:bg-[#c05c40]"
              >
                {stack}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  ))}
</div>
    </>
  );
};

export default ProjectCard;
