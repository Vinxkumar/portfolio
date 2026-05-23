import DotField from "../components/ui/DotField";
import BlurText from "../components/ui/BlurText";
import GitHubButton from "../components/GitHubButton";
import LinkedInButton from "../components/LinkedInButton";
import MailButton from "../components/MailButton";
import ResumeButton from "../components/ResumeButton";
import TextType from "../components/ui/TextType";
import { motion } from "framer-motion";
import SplitText from "../components/ui/SplitText";
import FrontendSkills from "../components/FrontendSkills";
const AboutMe = () => {
  return (
    <>
      <div
        id="about"
        className="relative flex items-center  justify-center z-10 bg-[#8edb8f] w-screen h-screen overflow-hidden"
      >
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

        <div className="absolute justify-start items-start flex flex-col w-36 left-4 top-0 mt-18 text-[#0E2D2E]">
          <BlurText
            text="AboutMe"
            delay={500}
            animateBy="words"
            direction="top"
            className="font-poppins text-3xl font-bold text-[#0E2D2E]"
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="absolute -bottom-1 h-0.75 w-full origin-left rounded-full bg-[#0E2D2E]"
          />
        </div>

        <div className="absolute items-center w-full justify-center flex">
          <motion.div 
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}

          className="absolute p-4 bg-[#0E2D2E]/65 backdrop-blur-md mt-12 w-[30%] border-l-[#0E2D2E] border-l-4 left-8 rounded-r-4xl h-44 flex flex-col text-white">
            <motion.div
            whileHover={{
              x:20
            }}
            className="w-full h-full"
            >
              I'm a final-year BCA student at New Horizon College passionate about building clean, scalable software. I enjoy working across the full stack — from designing APIs in Spring Boot to crafting smooth UIs in React. I thrive on turning complex problems into simple, elegant solutions.
            </motion.div>
            
          </motion.div>


          <div className="absolute w-[30%] flex flex-col items-center justify-center">
            <motion.div className="flex items-center justify-center w-full h-full">
              <TextType
                text={["Vinod Kumar S"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                initialDelay={500}
                loop={false}
                deletingSpeed={0}
                cursorBlinkDuration={0.5}
                startOnVisible
                className="font-poppins font-bold text-[#0E2D2E] text-5xl"
              />
            </motion.div>

            <div className="mt-4 w-full flex items-center justify-center">
              <SplitText
                text="B.C.A @ New Horizon College"
                className="text-2xl  font-poppins text-[#0E2D2E]"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>

            <div className="mt-1 w-full flex items-center justify-center">
              <SplitText
                text="Software Engineer"
                className="text-2xl  font-poppins text-[#0E2D2E]"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-8">
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="cursor-pointer w-8"
              >
                <GitHubButton />
              </motion.div>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="cursor-pointer w-8"
              >
                <LinkedInButton />
              </motion.div>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="cursor-pointer w-8"
              >
                <MailButton />
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex items-center justify-center border transition-all ease-in-out border-[#0E2D2E] w-42 h-12 mt-6 rounded-2xl overflow-hidden hover:scale-105"
            >
              <ResumeButton />
            </motion.div>
          </div>

          <div className="absolute right-8 w-131 items-center justify-between h-118 flex flex-col">
            
            <div className="w-full h-full ">
              <FrontendSkills/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutMe;
