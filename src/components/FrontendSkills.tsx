import {motion} from "framer-motion"

type skillSize = 1 | 2 | 3

type skill = {
    name: string,

    size: skillSize,
    top: string,
    right: string,
    dur: number,
    delay: number
}

const skills: skill[] = [

{ name: "React",  size: 3, top: "1%", right: "50%", dur: 2.1, delay: 0.8 },

{ name: "TypeScript",   size: 3, top: "8%",  right: "70%", dur: 1.8, delay: 1.5 },

{ name: "SpringBoot",size: 3, top: "0%",  right: "20%", dur: 2.4, delay: 0.3 },

{ name: "tailwindCSS",size: 3, top: "18%", right: "58%", dur: 1.9, delay: 2.1 },

{ name: "Vite",size: 3, top: "28%", right: "43%", dur: 2.2, delay: 1.0 },

{ name: "GitHub",size: 3, top: "30%", right: "70%", dur: 1.7, delay: 2.6 },

{ name: "Git",size: 3, top: "33%", right: "30%", dur: 2.5, delay: 0.5 },

{ name: "AppScript",size: 3, top: "60%", right: "18%", dur: 2.0, delay: 3.1 },

{ name: "PostgreSQL", size: 3, top: "10%", right: "10%", dur: 1.8, delay: 1.8 },

{ name: "mongoDB", size: 3, top: "23%", right: "16%", dur: 2.3, delay: 0.7 },

{ name: "flask", size: 3, top: "30%", right: "5%",  dur: 1.9, delay: 2.4 },

{ name: "Java", size: 3, top: "45%", right: "60%", dur: 2.1, delay: 1.3 },

{ name: "Python", size: 3, top: "40%", right: "12%", dur: 2.4, delay: 0.4 },

{ name: "C/C++", size: 3, top: "60%", right: "65%", dur: 1.7, delay: 2.9 },

{ name: "JavaScript", size: 3, top: "12%", right: "35%", dur: 2.0, delay: 0.2 },

{ name: "HTML/5", size: 3, top: "55%", right: "45%", dur: 2.3, delay: 1.6 },

{ name: "CSS/3", size: 3, top: "43%", right: "42%", dur: 1.8, delay: 3.2 },

{ name: "Linux", size: 3, top: "75%", right: "12%", dur: 2.3, delay: 2.2 },

{ name: "Research Work", size: 3, top: "85%", right: "50%", dur: 2.1, delay: 1.0 },

{ name: "Software Engineer",  size: 3, top: "50%", right: "5%",  dur: 2.3, delay: 4.0 },

{ name: "Full-Stack Developer", size: 3, top: "70%", right: "32%", dur: 2.2, delay: 2.0 },

]

const Skills = () => {

    return (
        <>
            <motion.div 
            initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{
                delay: 1.5, duration:1.2
            }}
            viewport={{once:true}}
            className="relative w-full h-full items-center justify-center">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{}}
                        animate={{y:[0, -10, 0], opacity:1}}
                        transition={{repeat:Infinity, duration:skill.dur, delay:skill.delay}}
                            className="absolute flex items-center justify-center gap-2 rounded-3xl px-3 h-8 border text-[#eee8d8] border-[#c8bfa8] bg-[#c05c40] transition-all ease-in-out hover:scale-110 "
                            style={{ top: skill.top, right: skill.right }}
                        >{skill.name}</motion.div>
                    ))
                }
            </motion.div>
        </>
    )
}

export default Skills

