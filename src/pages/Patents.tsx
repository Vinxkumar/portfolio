import { motion } from "framer-motion";
import BlurText from "../components/ui/BlurText";
import SmartMotionPreview from "../assets/SmartMotionPreview.png"
const Patents = () => {
  return (
    <>
      <div className="relative z-10 py-18  min-w-screen min-h-screen bg-[#09090b] text-white border-t border-[#2d1f5e] overflow-hidden ">
        <div className="absolute z-10 flex gap-2">
          <motion.div
            initial={{ z: -100, opacity: 0 }}
            whileInView={{ z: 0, opacity: 1 }}
            viewport={{ once: true }}
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
          initial={{ z: -10, opacity: 0 }}
          whileInView={{ z: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="z-10 mt-10 absolute font-poppins text-4xl font-bold px-8 py-2"
        >
          Patents
        </motion.div>

          <div className="absolute mt-30 ml-18 gap-8 w-[90%] h-[65%] flex justify-between items-center">
        <motion.div 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{
            delay:0.8, duration:0.5
        }}
        className="flex flex-col bg-black rounded-4xl  text-white w-1/2 h-full shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <div className="flex relative flex-col w-full rounded-t-4xl pt-4 pl-4 pr-4 h-[60%] border border-[#27272a]">
            <img src={SmartMotionPreview}  alt="Image not found" className="w-full h-full rounded-t-4xl"/>
            <div className="absolute bottom-0 ml-4 mr-4 left-0 right-0 h-1/3 bg-linear-to-t from-white to-transparent" />
         </div>
          <div className="w-full h-[40%] p-4 rounded-b-4xl border-[#27272a] border">

          </div>
        </motion.div>
        <motion.div 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{
            delay:0.8, duration:0.5
        }}
        className="flex flex-col bg-black rounded-4xl  text-white w-1/2 h-full shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <div className="flex relative flex-col w-full rounded-t-4xl pt-4 pl-4 pr-4 h-[60%] border border-[#27272a]">
            <img src={SmartMotionPreview}  alt="Image not found" className="w-full h-full rounded-t-4xl"/>
            <div className="absolute bottom-0 ml-4 mr-4 left-0 right-0 h-1/3 bg-linear-to-t from-white to-transparent" />
         </div>
          <div className="w-full h-[40%] p-4 rounded-b-4xl border-[#27272a] border"></div>
        </motion.div>


      </div>

      </div>


      {/* </div> */}
    </>
  );
};

export default Patents;
