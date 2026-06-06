import { motion } from "framer-motion";
import BlurText from "../components/ui/BlurText";
import PatentsCards from "../components/PatentCards";
const Patents = () => {
  return (
    <>
      <div id="research-works" className="relative z-10  w-screen h-[80vh] bg-[#2c2c2c] overflow-hidden ">
         

        <div className="absolute justify-start items-start flex flex-col w-32 left-[2%] top-0 mt-[4%] text-[#e8805e]">
          <BlurText
            text="Patents"
            delay={800}
            animateBy="words"
            direction="top"
            className="font-poppins text-3xl font-bold "
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-1 h-0.75 w-full origin-left rounded-full bg-[#e8805e]"
          />
        </div >

        <div className="absolute top-[18%] left-[2%] w-[95%] h-[76%] flex justify-center items-center ">
          <PatentsCards/>
        </div>

      </div>

    </>
  );
};

export default Patents;
