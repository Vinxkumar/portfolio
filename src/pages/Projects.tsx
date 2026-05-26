import ProjectCard from "../components/ProjectCards"
import { motion } from "framer-motion"
import BlurText from "../components/ui/BlurText"


const Projects = () => {

    return (
        <>
        <div id="projects" className="relative w-screen h-screen flex justify-center items-center bg-[#1e1e1e] text-[#eee8d8]">



        <div className="absolute justify-start items-start flex flex-col w-32 left-[1%] top-0 mt-[6%] text-[#eee8d8]">
          <BlurText
            text="Projects"
            delay={800}
            animateBy="words"
            direction="top"
            className="font-poppins text-3xl font-bold text-[#e8805e]"
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="absolute -bottom-1 h-0.75 w-full origin-left rounded-full bg-[#e8805e]"
          />
        </div >

          <div className="absolute w-[95%] mt-[8%] h-[75%] text-[#8edb8f]">
          <ProjectCard/>
        </div>
        </div>
        </>
    )
}

export default Projects