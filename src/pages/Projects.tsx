import ProjectCard from "../components/ProjectCards"
import { motion } from "framer-motion"
import BlurText from "../components/ui/BlurText"

const Projects = () => {
    return (
        <div id="projects" className="w-screen min-h-screen flex flex-col bg-[#1e1e1e] text-[#eee8d8] px-[4%] py-[6%]">

          <div className="relative flex flex-col w-fit mb-10">
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
              className="absolute -bottom-1 h-0.5 w-full origin-left rounded-full bg-[#e8805e]"
            />
          </div>



<div className="w-full mt-[1%] h-[60vh] text-[#8edb8f]">
  <ProjectCard/>
</div>

        </div>
    )
}

export default Projects