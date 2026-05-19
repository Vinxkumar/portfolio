import { StickyScroll } from "./sticky-scroll-reveal"
import {easeInOut, motion} from "framer-motion"
import portfolio from "../assets/portfolio.png"
import BlockChain from "../assets/BlockChain.png"
import PixelTransition from './ui/PixelTransition';
import { MdHistoryToggleOff } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const content = [
  {
    title: (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        BlockChain Based Voting System
      </motion.span>
    ),
    description:
      "A tamper-proof college election platform built on blockchain, ensuring transparent and verifiable voting with immutable records and secure student authentication.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white font-bold text-xl">
        <PixelTransition
          firstContent={
            <img
              src={BlockChain}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="w-full h-full"
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#8b5cf6",
              }}
            >
              <div className="flex flex-col p-5gap-2 items-center justify-center">
                <label className=" mt-4 ">Tech Stack</label>
                <div className="flex items-center justify-center flex-col mt-8 gap-4">
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-24 h-7 px-2 rounded-2xl border items-center flex justify-center text-[18px] bg-white text-black hover:scale-x-110 transition-transform">
                      {" "}
                      HTML/5
                    </label>
                    <label className="shadow-xl w-20 h-7 px-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      CSS/3
                    </label>
                    <label className="shadow-xl w-30 h-7 px-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      JavaScript{" "}
                    </label>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-24 h-7 px-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Solodity
                    </label>
                    <label className="shadow-xl w-18 h-7 px-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Remix
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "http://github.com/Vinxkumar/Blockchain-Based-Voting-System",
                        "_blank",
                      );
                    }}
                    className="bg-[#0d1117] flex gap-2 items-center justify-center text-white mt-25 w-15 h-8 rounded-xl shadow-2xl cursor-pointer"
                  >
                    <FaGithub className="rounded-full" />
                  </button>
                </div>
              </div>
            </div>
          }
          gridSize={10}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.2}
          className="custom-pixel-card w-full h-full"
        />
      </div>
    ),
  },
  {
    title: (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="pt-12"
      >
        Personal Portfolio
      </motion.span>
    ),
    description:
      "A modern developer portfolio built with React, TypeScript, and Tailwind CSS — featuring scroll-based animations, dynamic UI components, and a dark aesthetic that reflects my design sensibility.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white font-bold text-xl">
        <PixelTransition
          firstContent={
            <img
              src={portfolio}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="w-full h-full"
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#8b5cf6",
              }}
            >
              <div className="flex flex-col p-5gap-2 items-center justify-center">
                <label className=" mt-4 ">Tech Stack</label>
                <div className="flex items-center justify-center flex-col mt-8 gap-4">
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-18 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      React
                    </label>
                    <label className="shadow-xl w-30 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Type Script
                    </label>
                    <label className="shadow-xl w-33 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Tailwind CSS
                    </label>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-37 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Framer-Motion
                    </label>
                    <label className="shadow-xl w-14 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Vite
                    </label>
                  </div>
                  <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "#",
                        "_blank",
                      );
                    }}
                    className="bg-[#0d1117] flex gap-2 items-center justify-center text-white mt-25 w-15 h-8 rounded-xl shadow-2xl cursor-pointer"
                  >
                    <FaGithub className="rounded-full" />
                  </button>
                </div>
                </div>
              </div>
            </div>
          }
          gridSize={10}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.2}
          className="custom-pixel-card w-full h-full"
        />
      </div>
    ),
  },
  {
    title: (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="pt-12"
      >
        VisionCaption
      </motion.span>
    ),
    description:
      "An AI-powered image captioning tool that uses Salesforce BLIP via Hugging Face to automatically generate natural language descriptions from uploaded images.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white font-bold text-xl">
        <PixelTransition
          firstContent={
            <img
              src=""
              alt="Image Not Available 😅"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="w-full h-full"
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#8b5cf6",
              }}
            >
              <div className="flex flex-col p-5gap-2 items-center justify-center">
                <label className=" mt-4 ">Tech Stack</label>
                <div className="flex items-center justify-center flex-col mt-8 gap-4">
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-20 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Python
                    </label>
                    <label className="shadow-xl w-20 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      TKinter
                    </label>
                    <label className="shadow-xl w-33 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      HuggingFace
                    </label>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-17 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      torch
                    </label>
                    <label className="shadow-xl w-14 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      BLIP
                    </label>
                  </div>
                  <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "https://github.com/Vinxkumar/VisionCaption",
                        "_blank",
                      );
                    }}
                    className="bg-[#0d1117] flex gap-2 items-center justify-center text-white mt-25 w-15 h-8 rounded-xl shadow-2xl cursor-pointer"
                  >
                    <FaGithub className="rounded-full" />
                  </button>
                </div>
                </div>
              </div>
            </div>
          }
          gridSize={10}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.2}
          className="custom-pixel-card w-full h-full"
        />
      </div>
    ),
  },
  {
    title: (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        Hospital CRM
      </motion.span>
    ),
    description:
      "A featured fullstack healthcare management system enabling patients to book appointments, view prescriptions, and track medical history — while doctors and pharmacists manage records and medicine inventory in real time.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white font-bold text-xl">
        <PixelTransition
          firstContent={
            <div className=" p-8 w-full h-full bg-black text-white items-center flex gap-4 justify-center">
              <p className="bg-amber-400 w-1.5 h-1.5 rounded-full">
                <MdHistoryToggleOff />
              </p>{" "}
              In Developement
            </div>
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#8b5cf6",
              }}
            >
              <div className="flex flex-col p-5gap-2 items-center justify-center">
                <label className=" mt-4 ">Tech Stack</label>
                <div className="flex items-center justify-center flex-col mt-8 gap-4">
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-xl w-18 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      React
                    </label>
                    <label className="shadow-xl w-30 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Type Script
                    </label>
                    <label className="shadow-xl w-33 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Tailwind CSS
                    </label>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <label className="shadow-5xl w-14 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Vite
                    </label>
                    <label className="shadow-xl w-16 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      Java
                    </label>
                    <label className="shadow-xl w-30 h-7 pl-2 rounded-2xl border items-center justify-center text-[18px] bg-white text-black  ">
                      {" "}
                      SpringBoot
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "https://github.com/Vinxkumar/Hospital-CRM-FE-Admin",
                        "_blank",
                      );
                    }}
                    className="bg-[#0d1117] flex gap-2 items-center justify-center text-white mt-25 w-15 h-8 rounded-xl shadow-2xl cursor-pointer"
                  >
                    <FaGithub className="rounded-full" />
                  </button>
                </div>
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        "https://github.com/Vinxkumar/Hospital-CRM",
                        "_blank",
                      );
                    }}
                    className="bg-[#0d1117] flex gap-2 items-center justify-center text-white mt-25 w-15 h-8 rounded-xl shadow-2xl cursor-pointer"
                  >
                    <FaGithub className="rounded-full" />
                  </button>
                </div>
                  </div>
                </div>
              </div>
            </div>
          }
          gridSize={10}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.2}
          className="custom-pixel-card w-full h-full"
        />
      </div>
    ),
  },
];

const ProjectCard = () => {
  return (
  
  <div className="absolute w-full h-full"><StickyScroll content={content} /></div>  
  )

}

export default ProjectCard