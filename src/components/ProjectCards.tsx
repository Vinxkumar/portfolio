import { easeInOut, motion } from "framer-motion";
import portfolio from "../assets/portfolio.png";
import BlockChain from "../assets/BlockChain.png";
import PixelTransition from "./ui/PixelTransition";
import { MdHistoryToggleOff } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
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
      top: "0%",
      left: "33.34%",
      delay: 0.3,
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
      delay: 0.5,
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
      delay: 0.7,
    },
    {
      title: "AutoAttendance",
      description:
        "An automated attendance tracking system that streamlines student attendance management with real-time updates and reporting for teachers",
      tech: ["React", "TailwindCSS", "TypeScript", "Vite", "Express.js"],
      status: "ongoing",
      link: "",
      top: "50%",
      left: "33.34%",
      delay: 0.9,
    },
  ];

  return (
    <>
      <div className="relative  gap-3 flex  w-full h-full text-[#eee8d8]">
        {projects.map((project, indx) => (
          <motion.div
            key={indx}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            transition={{
              delay: project.delay,
              duration: 0.5,
            }}
            className="absolute flex m-2  items-center  rounded-3xl justify-between w-[33%] h-[50%]"
            style={{
              top: project.top,
              left: project.left,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              // viewport={{once:true}}
              transition={{
                default: { duration: 1, delay: 0.6 },
                scale: { duration: 0.2 },
                boxShadow: { duration: 0.2 },
              }}
              className=" group flex flex-col w-full h-[90%] m-1 cursor-pointer items-start border border-[#3a3a3a] rounded-xl pt-4 pl-2 font-poppins font-semibold text-[#eee8d8] bg-[#2c2c2c] hover:text-[#2c2c2c] hover:bg-[#eee8d8] overflow-hidden"
            >
              <motion.h2
              viewport={{once:true}}
              className="relative group w-full h-5 flex flex-col">
                <span className="group font-bold text-md text-[#e8805e] group-hover:text-[#2c2c2c] w-fit  h-fit ">
                  {project.title}
                  <motion.div className="absolute rounded-full mt-0.5 left-0 origin-left scale-x-0 h-[2px] w-full transition-transform ease-in-out duration-500 delay-75 bg-[#e8805e] group-hover:scale-x-100 group-hover: text-[#2c2c2c]" />
                </span>
                <span className="font-light mt-[4%] text-muted-[#2a3f5f] ">{project.description}</span>

                <div className="flex flex-wrap gap-2 items-stretch">
                  {project.tech.map((stack, indx) => (
                    <span 
                    key={indx}
                    className=" pl-1 pr-1 text-sm w-fit text-[#2c2c2c] h-fit rounded-3xl hover:border group-hover:border-[#c8bfa8] group-hover:text-[#eee8d8] group-hover:bg-[#c05c40]">{stack}</span>
                  ))}
                </div>

              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
