import ProjectCard from "../components/ProjectCards"
import { motion } from "framer-motion"
import BlurText from "../components/ui/BlurText"
import DotField from "../components/ui/DotField"

const Projects = () => {

    return (
        <>
        <div id="projects" className="relative w-screen h-screen flex justify-center items-center bg-[#0E2D2E] text-[#8edb8f]">

                <div
          style={{ width: "100%", height: "100%", position: "relative" }}
          className="absolute top-0 flex flex-col items-center justify-center"
        >
          <DotField
            dotRadius={2}
            dotSpacing={14}
            bulgeStrength={43}
            glowRadius={50}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={150}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="transparent"
          />
        </div>

        <div className="absolute justify-start items-start flex flex-col w-32 left-[1%] top-0 mt-[6%] text-[#0E2D2E]">
          <BlurText
            text="Projects"
            delay={800}
            animateBy="words"
            direction="top"
            className="font-poppins text-3xl font-bold text-[#8edb8f]"
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="absolute -bottom-1 h-0.75 w-full origin-left rounded-full bg-[#8edb8f]"
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