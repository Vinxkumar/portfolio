import {motion} from "framer-motion"

import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
// appscript
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
// c/c++
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
// software engineer
import { MdDeveloperMode } from "react-icons/md";

import type { IconType } from "react-icons/lib";



type skillSize = 1 | 2 | 3

type skill = {
    name: string,

    size: skillSize,
    top: string,
    bg?: string,
    icon?: IconType,
    link?:string,
    color?:string,

    right: string,
    dur: number,
    delay: number
}

const skills: skill[] = [

{ name: "React",  size: 3, top: "1%", right: "50%", dur: 2.1, delay: 0.8, bg:"#61DAFB", icon:FaReact,
    link:"https://react.dev/reference/react"
 },

{ name: "TypeScript",   size: 3, top: "8%",  right: "70%", dur: 1.8, delay: 1.5, bg:"#3178C6", color:"white", icon:BsTypescript,
    link:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
},

{ name: "SpringBoot",size: 3, top: "0%",  right: "18%", dur: 2.4, delay: 0.3, bg:"#6DB33F", color:"white", icon:BiLogoSpringBoot,
    link:"https://www.geeksforgeeks.org/advance-java/spring-boot/"
},

{ name: "tailwindCSS",size: 3, top: "18%", right: "60%", dur: 1.9, delay: 2.1, bg:"#38BDF8", icon:RiTailwindCssFill,
    link:"https://tailwindcss.com/docs/installation/using-vite"
 },

{ name: "Vite",size: 3, top: "28%", right: "43%", dur: 2.2, delay: 1.0, bg:"#646CFF", icon:TbBrandVite,
    link:"https://vite.dev/guide/"
 },

{ name: "GitHub",size: 3, top: "30%", right: "70%", dur: 1.7, delay: 2.6, bg:"black", color:"white", icon:FaGithub,
    link:"https://docs.github.com/en/get-started/git-basics"
 },

{ name: "Git",size: 3, top: "35%", right: "30%", dur: 2.5, delay: 0.5, bg:"#F05032", icon:FaGitAlt,
    link:"https://git-scm.com/about"
 },

{ name: "AppScript",size: 3, top: "60%", right: "18%", dur: 2.0, delay: 3.1, bg:"#34A853", color:"white", 
    link:"https://developers.google.com/workspace/guides/get-started"
 },

{ name: "PostgreSQL", size: 3, top: "10%", right: "5%", dur: 1.8, delay: 1.8, bg:"#336791", color:"white", icon:SiPostgresql,
    link:"https://www.postgresql.org/docs/"
 },

{ name: "mongoDB", size: 3, top: "23%", right: "16%", dur: 2.3, delay: 0.7, bg:"#47A248", color:"white", icon:SiMongodb,
    link:"https://www.mongodb.com/docs/get-started/?language=nodejs"
 },

{ name: "flask", size: 3, top: "30%", right: "5%",  dur: 1.9, delay: 2.4, bg:"#FFFFFF", icon:SiFlask ,
    link:"https://flask.palletsprojects.com/en/stable/"
},

{ name: "Java", size: 3, top: "45%", right: "70%", dur: 2.1, delay: 1.3, bg:"#E76F00", icon:FaJava ,
    link:"https://dev.java/learn/getting-started/"
},

{ name: "Python", size: 3, top: "40%", right: "5%", dur: 2.4, delay: 0.4, bg:"#3776AB", color:"white", icon:FaPython,
    link:"https://www.python.org/about/gettingstarted/"
 },

{ name: "C/C++", size: 3, top: "62%", right: "68%", dur: 1.7, delay: 2.9, bg:"#00599C", color:"white",
    link:"https://www.geeksforgeeks.org/cpp/c-plus-plus/"
 },

{ name: "JavaScript", size: 3, top: "12%", right: "35%", dur: 2.0, delay: 0.2, bg:"#F7DF1E", icon:IoLogoJavascript,
    link:"https://devdocs.io/javascript/"
 },

{ name: "HTML/5", size: 3, top: "55%", right: "45%", dur: 2.3, delay: 1.6, bg:"#E34F26", icon:FaHtml5,
    link:"https://www.w3schools.com/html/html_intro.asp"
 },

{ name: "CSS/3", size: 3, top: "43%", right: "42%", dur: 1.8, delay: 3.2, bg:"#1572B6", color:"white", icon:FaCss3Alt,
    link:"https://www.w3schools.com/css/"
 },

{ name: "Linux", size: 3, top: "75%", right: "12%", dur: 2.3, delay: 2.2, bg:"#FCC624", icon:FaLinux,
    link:"https://www.linux.org/forums/linux-beginner-tutorials.123/"
 },

{ name: "Research Work", size: 3, top: "85%", right: "50%", dur: 2.1, delay: 1.0, bg:"#9B8FD4", icon:GiArchiveResearch,
    link:""
 },

{ name: "Software Engineer",  size: 3, top: "50%", right: "5%",  dur: 2.3, delay: 4.0, bg:"#FFD700", link:"https://www.geeksforgeeks.org/software-engineering/software-engineering/" },

{ name: "Full-Stack Developer", size: 3, top: "70%", right: "32%", dur: 2.2, delay: 2.0, bg:"#e8805e", icon:MdDeveloperMode, link:""},

]

const Skills = () => {

    return (
        <>
            <motion.div 

            className="relative w-full h-full items-center justify-center">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{y:100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:0.5, delay:skill.delay * 0.3}}
                            className="absolute flex items-center justify-center gap-2 rounded-3xl px-3 h-8 border transition-transform ease-linear duration-75 border-[#c8bfa8] bg-[#c05c40] hover:rotate-6 hover:scale-110 "
                            style={{ top: skill.top, right: skill.right, background: skill.bg, color:skill.color }}
                        >
                            <a href={skill.link? skill.link : "/blank"} className="flex text-sm gap-2 items-center justify-center w-full h-full " >
                            {(() => { const Icon = skill.icon as IconType; return Icon ? <Icon size={14}/> : null })()} {skill.name} </a>
                        </motion.div>
                    ))
                }
            </motion.div>
        </>
    )
}

export default Skills

