import ProjectCard from "../components/ProjectCards"
import { motion } from "framer-motion"
import BlurText from "../components/ui/BlurText"

const Projects = () => {
    return (
        <>
        <div id="projects" className="relative bg-[#09090b] pt-12  pb-30 text-white w-screen h-screen">
                    <div className="absolute z-10 flex gap-2">
          <motion.div
            initial={{ z: -100, opacity: 0 }}
            whileInView={{ z: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="mt-9 ml-8 h-0.5 w-18 rounded-full left-0 bottom-1 bg-[#8b5cf6] "
          />
                      <span className="mt-5 ml-4 bottom-1 font-mono text-xl font-bold font-dm text-[#8b5cf6]">
            <BlurText
              text="works"
              delay={200}
              animateBy="words"
              direction="top"
            />
          </span>
          </div>
          <motion.div 
          initial={{z:-10, opacity:0}}
          whileInView={{z:0, opacity:1}}
          transition={{
            delay: 0.8, duration:0.5
          }}
          className="z-10 mt-10 absolute font-poppins text-4xl font-bold px-8 py-2">Projects</motion.div>
                    <motion.div 
          initial={{y:100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          viewport={{once: true}}
          transition={{
            delay: 0.5, duration:0.5
          }}><ProjectCard /></motion.div>
            
        </div>
        </>
    )
}

export default Projects