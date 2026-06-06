import ProjectCard from "../components/ProjectCards"
import { motion } from "framer-motion"
import BlurText from "../components/ui/BlurText"

const Projects = () => {
    return (
        <div id="projects" className="w-screen h-screen flex flex-col bg-gh-bg text-[#eee8d8] px-[4%] py-[6%]">



<div className="w-full mt-[1%] h-[60vh] text-[#8edb8f]">
  <ProjectCard/>
</div>

        </div>
    )
}

export default Projects