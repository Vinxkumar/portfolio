import SplitText from "./ui/SplitText";
// import {BlurText} from "motion"
import BlurText from "./ui/BlurText";
import RotatingText from "./ui/RotatingText";
import { motion } from "framer-motion";




const LandingPage = () => {
  return (
    <>
      <div className="absolute w-full h-full flex flex-col m-1  justify-start text-[#eee8d8] ">


        <div className=" flex gap-2">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
            className="mt-9 ml-8 h-0.5 w-18 rounded-full left-0 bottom-1 bg-[#c05c40] "
          />


          <span className="mt-5    ml-4 bottom-1 font-mono text-xl font-bold font-dm text-[#c05c40]">
            <BlurText
              text="FULL STACK DEVELOPER"
              delay={200}
              animateBy="words"
              direction="top"
            />
          </span>
        </div>


        
        <div className="mt-6 ml-8 gap-1 felx flex-col text-8xl font-semibold font-poppins">
          <div className="">
            <SplitText
              text="Building things"
              className=" text-center selection:text-[#c05c40] selection:bg-[#eee8d8]"
              startDelay={1}
              delay={100}
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
          <div className="m-2 gap-6 flex">
            <SplitText
              text="that"
              className=" text-center selection:text-[#c05c40] selection:bg-[#eee8d8]"
              startDelay={1}
              delay={100}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text=" Actually"
              className=" text-center  text-[#c05c40] selection:text-[#eee8d8] selection:bg-[#c05c40]"
              startDelay={1}
              delay={100}
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
          <div  className="m-2">
              <motion.div layout
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1.25, ease: "anticipate" }}
    className=" inline-flex"
  >
    <RotatingText
      texts={['works .', 'matter .', 'lasts .', 'ships .']}
      mainClassName="px-2  text-white rounded-lg"
      rotationInterval={2000}
      auto
      loop
      className="bg-[#c05c40] transition-transform ease-in-out rounded-2xl translate-x-1 selection:text-[#c05c40] selection:bg-[#eee8d8]"
    />
  </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
