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
      // top: "0%",
      // left: "0%",
      // delay: 0.1,
    },
    {
      title: "Folio",
      description:
        "A modern developer portfolio built with React, TypeScript, and Tailwind CSS — featuring scroll-based animations, dynamic UI components, and a dark aesthetic that reflects my design sensibility",
      tech: ["React", "TailwindCSS", "TypeScript", "Framer-Motion"],
      status: "complete",
      link: "https://github.com/Vinxkumar/portfolio",
      img: portfolio,
      // top: "0%",
      // left: "33.34%",
      // delay: 0.7,
    },
    {
      title: "VisionCaption",
      description:
        "An AI-powered image captioning tool that uses Salesforce BLIP via Hugging Face to automatically generate natural language descriptions from uploaded images",
      tech: ["Python", "Tkinter", "HuggingFace", "torch", "BLIP"],
      status: "complete",
      link: "https://github.com/Vinxkumar/VisionCaption",
      img: visionCaption
      // top: "0%",
      // left: "66.68%",
      // delay: 0.4,
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
      img:DocCare,
      status: "ongoing",
      link: "https://github.com/Vinxkumar/Hospital-CRM",
      // top: "50%",
      // left: "0%",
      // delay: 0.2,
    },
    {
      title: "AutoAttendance",
      description:
        "An automated attendance tracking system that streamlines student attendance management with real-time updates and reporting for teachers",
      tech: ["React", "TailwindCSS", "TypeScript", "Vite", "Flask", "python"],
      status: "ongoing",
      img: autoattend,
      link: "https://auto-attendance-three.vercel.app/",
      // top: "50%",
      // left: "33.34%",
      // delay: 0.5,
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const selected = projects[currentProject];


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

        <motion.div 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{
                delay: 0.8, duration:0.5
            }}
            viewport={{once:true}}
        className="relative group w-[70%] group flex  flex-col z-10 h-full p-4 bg-[#2c2c2c] rounded-2xl border border-[#3a3a3a]">
          <h3 className="absolute top-[3%] text-[#c05c40] font-bold font-poppins text-2xl">
            {selected.title}
          </h3>
          <div
            className={`absolute w-full left-0  mt-[4.5%] rounded-b-2xl transition-all ease-in-out h-[85%] bg-amber-600`}
          >
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-full rounded-b-2xl"
            />
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
