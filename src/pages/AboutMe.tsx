import GitHubButton from "../components/GitHubButton";
import LinkedInButton from "../components/LinkedInButton";
import MailButton from "../components/MailButton";
import ResumeButton from "../components/ResumeButton";
import TextType from "../components/ui/TextType";
import { motion } from "framer-motion";
import SplitText from "../components/ui/SplitText";
import FrontendSkills from "../components/FrontendSkills";
import profilePic from "../assets/profilepic.png";
import CountUp from "../components/CountUp";
const AboutMe = () => {
  return (
    <div
      id="about"
      className="relative flex items-center justify-between bg-gh- w-screen h-screen "
    >
<div
  className="
    absolute inset-0 z-2 w-full h-full
    bg-[linear-gradient(rgba(22,163,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.12)_1px,transparent_1px)]
    bg-[size:32px_32px]
  "
/>
      <div className="relative flex items-center rounded-2xl justify-between px-16 z-10  w-full h-full">

      
      <div className=" flex flex-col mt-[5%] h-4/5  items-start justify-center gap-5 w-2/5">
        <TextType
          text={["Vinod Kumar S"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          initialDelay={100}
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
          className="flex items-center justify-center border border-[#c05c40] w-42 h-12 hover:rounded-xl overflow-hidden hover:scale-105 transition-all ease-in-out"
        >
          <ResumeButton />
        </motion.div>
      </div>

      <motion.div
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="absolute left-1/2 flex-col -translate-x-1/2 top-1/2 -translate-y-1/2  flex items-center justify-center"
>

  <motion.div
    whileInView={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, delay: 0.9, duration: 4.5 }}

    className="w-64 h-64 rounded-full transition-transform ease-in-out overflow-hidden border-4 border-[#c05c40]"
  >
    <img src={profilePic} alt="Vinod Kumar S" className="w-full h-full object-cover object-top" />
  </motion.div>

  {/* Stats Row */}
  <div className="flex flex-row gap-3 mt-[5%]">

    {[
      { count: 5, label: "Projects", mar:"0%" },
      { count: 3, label: "Technologies", mar:"5%" },
      { count: 3, label: "Months of exp", mar:"2%" },
    ].map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ }}
        whileInView={{ y: [0, -10, 0], opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 + idx * 0.2, duration: 2.5, repeat: Infinity }}
        style={{marginTop: stat.mar}}
        className={`flex flex-col p-2 items-center justify-center rounded-xl hover:scale-110 transition-all ease-in-out`}
      >
        <div className="text-3xl items-center justify-center font-poppins font-semibold text-[#c05c40]">
          <span>+</span>
          <CountUp from={0} to={stat.count} direction="up" duration={0.1} delay={1} className="count-up-text" />
        </div>
        <span>{stat.label}</span>
      </motion.div>
    ))}

  </div>
</motion.div>

      <div className=""></div>
      <div className="flex items-center w-110  justify-center   h-[73%]">
        <FrontendSkills />
      </div>
      </div>
    </div>
  );
};

export default AboutMe;
