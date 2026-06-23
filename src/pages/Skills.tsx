import type { IconType } from "react-icons/lib";
import { C_Cpp, Css, Flask, Git, GitHub, Html, Java, JavaScript, JWTAuth, Linux, mongoDB, MySql, Ollama, PostgreSQL, Postman, Python, React, RestAPI, SpringBoot, SpringJPA, SQL, SqLite, TailwindCss, TypeScript, type skill } from "../types/Skills";
import { useState } from "react";
import { motion } from "framer-motion";


interface skillCard {
  name: skill;
  right?: string;
  left?: string;
  dur?: number;
  delay?: number;
  top: string;
}


const FrontendSkills:skillCard[] = [
  {
    name:React,
    top:"5%",
    left:"1%",
    right:"98%"
  },

  {
    name:TailwindCss,
    top:"5%",
    left:"49%",
    right:"65%"
  },
  {
    name:TypeScript,
    top:"26%",
    left:"73%",
    right:"20%"
  },
  {
    name:Html,
    top:"26%",
    left:"25%",
    right:"98%"
  },
  {
    name:Css,
    top:"47%",
    left:"49%",
    right:"98%"
  },
  {
    name:JavaScript,
    top:"47%",
    left:"1%",
    right:"98%"
  },
 
]

const Database:skillCard[] = [
  {
    name:PostgreSQL,
    top:"5%",
    left:"1%",
    right:"98%"
  },

  {
    name:MySql,
    top:"5%",
    left:"49%",
    right:"65%"
  },
  {
    name:mongoDB,
    top:"26%",
    left:"73%",
    right:"20%"
  },
  {
    name:SqLite,
    top:"26%",
    left:"25%",
    right:"98%"
  },
  {
    name:SpringJPA,
    top:"47%",
    left:"49%",
    right:"98%"
  },

 
]

const BackEnd:skillCard[] = [
  {
    name:SpringBoot,
    top:"5%",
    left:"1%",
    right:"98%"
  },

  {
    name:Flask,
    top:"5%",
    left:"49%",
    right:"65%"
  },
  {
    name:JWTAuth,
    top:"26%",
    left:"73%",
    right:"20%"
  },
  {
    name:RestAPI,
    top:"26%",
    left:"25%",
    right:"98%"
  },


 
]
const Languages:skillCard[] = [
  {
    name:Java,
    top:"0%",
    left:"24%",
    right:"98%"
  },

  {
    name:Python,
    top:"0%",
    left:"60%",
    right:"65%"
  },
  {
    name:SQL,
    top:"36%",
    left:"42%",
    right:"20%"
  },
  {
    name:C_Cpp,
    top:"36%",
    left:"6%",
    right:"98%"
  },


 
]

const Others:skillCard[] = [
  {
    name:Git,
    top:"37%",
    right:"79%",

  },

  {
    name:GitHub,
    top:"0%",
    right:"98%",

  },
  {
    name:Linux,
    top:"0%",
    right:"60%",

  },
  {
    name:Ollama,
    top:"0%",
    right:"23%",
  
  },
  {
    name:Postman,
    top:"38%",
    right:"41%",
  
  },


 
]

const Skills = () => {

  const [hovered, setHovered] = useState(false);
  const [DataBasehovered, setDataBaseHovered] = useState(false);
  const [BackEndHoverd, setBackendHovered] = useState(false);
  const [LanguagesHovered, setLanguagesHovered] = useState(false);
  const [OthersHovered, setOthersHovered] = useState(false);

  return (
    <div
      id="skills"
      className="relative  w-screen h-screen pt-[4%] flex flex-col bg-gh-bg justify-center items-center text-white"
    >
            <span className="absolute top-1/2 left-0 text-sm text-gh-muted rotate-270">SKILLS</span>
      <div 
      
      onMouseEnter={()=>{
        setHovered(true)
        setDataBaseHovered(true)
        setBackendHovered(true)
        setLanguagesHovered(true)
        setOthersHovered(true)
      }}
      onMouseLeave={()=>{
        setHovered(false)
        setDataBaseHovered(false)
        setBackendHovered(false)
        setLanguagesHovered(false)
        setOthersHovered(false)
      }}
      
      className="group bottom-8 absolute cursor-pointer z-10  p-px hover:-translate-y-2 duration-100 transition-all ease-in-out hover:shadow-xl w-40 h-32">
        <div className="hexagon w-full text-gh-accent-2 h-full font-bold bg-[#fffffd] flex items-center justify-center  group-hover:shadow-gh-accent group-hover:shadow-xl ">
          skills
        </div>
      </div>

      <div className="absolute pl-[2%]  gap-4 pr-[2%] top-[15%]  w-full flex items-center justify-between h-[50%] ">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group w-1/3 h-full flex flex-col items-center p-4 mt-[5%] text-gh-accent-3 "
        >
          <span className=" flex w-[30%] border-gh-accent-2/50 border h-fit  p-1 rounded-xl items-center justify-center gap-2  text-gh-text">
            <div className="w-2 h-1 rounded-full bg-gh-accent group-hover:animate-pulse" />
            <p className=" "> FrontEnd</p>
          </span>

          <div className="relative w-full h-full">
            {FrontendSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                style={{
                  top: skill.top,
                  left: skill.left,
                  right: skill.right,
                  filter: "drop-shadow(0px 0px 0px transparent)", // ← starting state
                }}
                whileHover={{
                  y: -8,
                  filter: `drop-shadow(0px 8px 20px ${skill.name.bg})`,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <a 
                href={skill.name.link}
                className="absolute z-10  flex-col hexagon w-28 h-22 bg-[#f0fdf4] text-gh-accent-3 font-bold flex items-center justify-center transition-all duration-300 hover:-translate-y-2  hover:scale-105">
                  <div
                    className="absolute bottom-0 left-0 w-full transition-all duration-500"
                    style={{
                      height: hovered ? `${skill.name.profecient}` : "0%",
                      background: skill.name.bg,
                    }}
                  />
                  {(() => {
                    const Icon = skill.name.icon as IconType;
                    return Icon ? <Icon size={20} className="z-10" /> : null;
                  })()}{" "}
                  <span className={`z-5 ${hovered ? "text-black" : ""}`}>
                    {skill.name.name}{" "}
                  </span>
                  <span
                    className={`z-5 ${hovered ? "text-black opacity-100 text-xs text-gh-muted font-light" : "opacity-0"}`}
                  >
                    {skill.name.profecient}{" "}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>



        <div 
                  onMouseEnter={() => setDataBaseHovered(true)}
          onMouseLeave={() => setDataBaseHovered(false)}
        className="group w-1/3 h-full flex flex-col items-center p-4 mt-[2%] text-gh-accent-3 ">
          <span className=" flex w-[30%] border-gh-accent-2/50 border h-fit bg-gh-bg p-1 rounded-xl items-center justify-center gap-2  text-gh-text">
            <div className="w-2 h-1 rounded-full bg-gh-accent group-hover:animate-pulse" />
            <p className=" "> DataBase</p>
          </span>

          <div className="relative w-full h-full">
            {Database.map((skill, idx) => (
              <motion.div
                key={idx}
                style={{
                  top: skill.top,
                  left: skill.left,
                  right: skill.right,
                  filter: "drop-shadow(0px 0px 0px transparent)", 
                }}
                whileHover={{
                  y: -8,
                  filter: `drop-shadow(0px 8px 20px ${skill.name.bg})`,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <a 
                href={skill.name.link}
                className="absolute z-10  flex-col hexagon w-28 h-22 bg-[#f0fdf4] text-gh-accent-3 font-bold flex items-center justify-center transition-all duration-300 hover:-translate-y-2  hover:scale-105">
                  <div
                    className="absolute bottom-0 left-0 w-full transition-all duration-500"
                    style={{
                      height: DataBasehovered ? `${skill.name.profecient}` : "0%",
                      background: skill.name.bg,
                    }}
                  />
                  {(() => {
                    const Icon = skill.name.icon as IconType;
                    return Icon ? <Icon size={20} className="z-10" /> : null;
                  })()}{" "}
                  <span className={`z-5 ${DataBasehovered ? "text-black" : ""}`}>
                    {skill.name.name}{" "}
                  </span>
                  <span
                    className={`z-5 ${DataBasehovered ? "text-black opacity-100 text-xs text-gh-muted font-light" : "opacity-0"}`}
                  >
                    {skill.name.profecient}{" "}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>


        </div>

        <div 
        onMouseEnter={()=>setBackendHovered(true)}
        onMouseLeave={()=>setBackendHovered(false)}
        className="group w-1/3 h-full flex flex-col items-center p-4 mt-[5%] text-gh-accent-3 ">
          <span className=" flex w-[30%] border-gh-accent-2/50 border h-fit bg-gh-bg p-1 rounded-xl items-center justify-center gap-2  text-gh-text">
            <div className="w-2 h-1 rounded-full bg-gh-accent group-hover:animate-pulse" />
            <p className=" "> BackEnd</p>
          </span>

            <div className="relative w-full h-full">
            {BackEnd.map((skill, idx) => (
              <motion.div
                key={idx}
                style={{
                  top: skill.top,
                  left: skill.left,
                  right: skill.right,
                  filter: "drop-shadow(0px 0px 0px transparent)", 
                }}
                whileHover={{
                  y: -8,
                  filter: `drop-shadow(0px 8px 20px ${skill.name.bg})`,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <a 
                href={skill.name.link}
                className="absolute z-10  flex-col hexagon w-28 h-22 bg-[#f0fdf4] text-gh-accent-3 font-bold flex items-center justify-center transition-all duration-300 hover:-translate-y-2  hover:scale-105">
                  <div
                    className="absolute bottom-0 left-0 w-full transition-all duration-500"
                    style={{
                      height: BackEndHoverd ? `${skill.name.profecient}` : "0%",
                      background: skill.name.bg,
                    }}
                  />
                  {(() => {
                    const Icon = skill.name.icon as IconType;
                    return Icon ? <Icon size={20} className="z-10" /> : null;
                  })()}{" "}
                  <span className={`z-5 ${BackEndHoverd? "text-black" : ""}`}>
                    {skill.name.name}{" "}
                  </span>
                  <span
                    className={`z-5 ${BackEndHoverd? "text-black opacity-100 text-xs text-gh-muted font-light" : "opacity-0"}`}
                  >
                    {skill.name.profecient}{" "}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-[8%] flex justify-between items-center  w-full h-[25%] pl-[2%] gap-4 pr-[2%] ">

        <div 
        onMouseEnter={()=>setLanguagesHovered(true)}
        onMouseLeave={()=>setLanguagesHovered(false)}
        className="h-full flex flex-col p-2 w-2/6  text-gh-accent-3 ">
          <span className=" flex w-[40%] m-1 border-gh-accent-2/50 border h-fit bg-gh-bg p-1 rounded-xl items-center justify-center gap-2  text-gh-text">
            <div className="w-2 h-1 rounded-full bg-gh-accent group-hover:animate-pulse" />
            <p className=" ">Languages</p>
          </span>

          <div className="relative  h-full">
            {Languages.map((skill, idx) => (
              <motion.div
                key={idx}
                style={{
                  top: skill.top,
                  left: skill.left,
                  right: skill.right,
                  filter: "drop-shadow(0px 0px 0px transparent)", 
                }}
                whileHover={{
                  y: -8,
                  filter: `drop-shadow(0px 8px 20px ${skill.name.bg})`,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <a 
                href={skill.name.link}
                className="absolute z-10  flex-col hexagon pt-2 w-22 h-18 bg-[#f0fdf4] text-gh-accent-3 font-bold flex items-center justify-center transition-all duration-300 hover:-translate-y-2  hover:scale-105">
                  <div
                    className="absolute bottom-0 left-0 w-full transition-all duration-500"
                    style={{
                      height: LanguagesHovered ? `${skill.name.profecient}` : "0%",
                      background: skill.name.bg,
                    }}
                  />
                  {(() => {
                    const Icon = skill.name.icon as IconType;
                    return Icon ? <Icon size={20} className="z-10" /> : null;
                  })()}{" "}
                  <span className={`z-5 ${LanguagesHovered? "text-black" : ""}`}>
                    {skill.name.name}{" "}
                  </span>
                  <span
                    className={`z-5 ${LanguagesHovered? "text-black opacity-100 text-xs text-gh-muted font-light" : "opacity-0"}`}
                  >
                    {skill.name.profecient}{" "}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
            
        </div>
        <div
        onMouseEnter={()=>setOthersHovered(true)}
        onMouseLeave={()=>setOthersHovered(false)}
        className="h-full flex flex-col items-end p-2 w-2/6 text-gh-accent-3 ">
          <span className=" flex w-[20%]  border-gh-accent-2/50 border h-fit bg-gh-bg p-1 rounded-xl items-center justify-center gap-2  text-gh-text">
            <div className="w-2 h-1 rounded-full bg-gh-accent group-hover:animate-pulse" />
            <p className=" ">Others</p>
          </span>
         <div className="relative w-full h-full">
            {Others.map((skill, idx) => (
              <motion.div
                key={idx}
                style={{
                  top: skill.top,

                  right: skill.right,
                  filter: "drop-shadow(0px 0px 0px transparent)", 
                }}
                whileHover={{
                  y: -8,
                  filter: `drop-shadow(0px 8px 20px ${skill.name.bg})`,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-10"
              >
                <a 
                href={skill.name.link}
                className="absolute z-10  flex-col hexagon pt-2 w-22 h-18 bg-[#f0fdf4] text-gh-accent-3 font-bold flex items-center justify-center transition-all duration-300 hover:-translate-y-2  hover:scale-105">
                  <div
                    className="absolute bottom-0 left-0 w-full transition-all duration-500"
                    style={{
                      height: OthersHovered ? `${skill.name.profecient}` : "0%",
                      background: skill.name.bg,
                    }}
                  />
                  {(() => {
                    const Icon = skill.name.icon as IconType;
                    return Icon ? <Icon size={20} className="z-10" /> : null;
                  })()}{" "}
                  <span style={{
                    color: OthersHovered?skill.name.color:""
                  }} className={`z-5 ${OthersHovered? "text-black" : ""}`}>
                    {skill.name.name}{" "}
                  </span>
                  <span
                    className={`z-5 ${OthersHovered? "text-black opacity-100 text-xs text-gh-muted font-light" : "opacity-0"}`}
                  >
                    {skill.name.profecient}{" "}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>

    </div>
  );
};  

export default Skills;
  