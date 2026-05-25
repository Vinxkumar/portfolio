import DotField from "../components/ui/DotField";
import BlurText from "../components/ui/BlurText";
import ShapeGrid from "../components/ui/ShapeGrid";
import GitHubButton from "../components/GitHubButton";
import LinkedInButton from "../components/LinkedInButton";
import MailButton from "../components/MailButton";
import ResumeButton from "../components/ResumeButton";
import TextType from "../components/ui/TextType";
import { easeInOut, motion } from "framer-motion";
import SplitText from "../components/ui/SplitText";
import FrontendSkills from "../components/FrontendSkills";
import profilePic from "../assets/profilepic.png";
const AboutMe = () => {
  return (
    <div
      id="about"
      className="relative flex items-center justify-between px-16 z-10 bg-[#eee8d8] w-screen h-screen overflow-hidden"
    >
      {/* <div className="absolute left-4 top-18 flex flex-col items-start w-36">
        <BlurText
          text="AboutMe"
          delay={500}
          animateBy="words"
          direction="top"
          className="font-poppins text-3xl font-bold text-[#c05c40]"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="absolute -bottom-1 h-0.5 w-full origin-left rounded-full bg-[#c05c40]"
        />
      </div> */}

      <div className=" flex flex-col mt-[5%] h-4/5  items-start justify-center gap-5 w-2/5">
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
          className="font-poppins font-bold text-[#1e1e1e] text-5xl"
        />

        <SplitText
          text="B.C.A @ New Horizon College"
          className="text-xl font-semibold font-poppins text-[#c05c40]"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />

        <SplitText
          text="Software Engineer"
          className="text-xl font-semibold font-poppins text-[#5a5248]"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="bg-[#ddd6c4] p-4 text-[#5a5248] border h-1/2 rounded-2xl w-[70%]"
        >
          I'm a final-year BCA student at New Horizon College passionate about
          building clean, scalable software. I enjoy working across the full
          stack — from designing APIs in Spring Boot to crafting smooth UIs in
          React. I thrive on turning complex problems into simple, elegant
          solutions.
        </motion.div>

        <div className="flex items-center gap-6 mt-1">
          {[GitHubButton, LinkedInButton, MailButton].map((Btn, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
              className="cursor-pointer w-8 text-[#c05c40]"
            >
              <Btn />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex items-center justify-center border border-[#c05c40] w-42 h-12 rounded-2xl overflow-hidden hover:scale-105 transition-all ease-in-out"
        >
          <ResumeButton />
        </motion.div>
      </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center">
  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#c05c40]">
    <img
      src={profilePic}
      alt="Vinod Kumar S"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>

      <div className=""></div>
      <div className="flex items-center w-110  justify-center   h-[73%]">
        <FrontendSkills />
      </div>
    </div>
  );
};

export default AboutMe;
