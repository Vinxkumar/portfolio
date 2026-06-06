import { motion} from "motion/react";

import HomeNav from "../components/HomeNavBar";
import LandingPage from "../components/LandingContent"


type ScrollPosition = {
  scrolly: number;
};



const HomePage = ({scrolly} : ScrollPosition) => {


  return (
    <>
      <motion.div id="landing"

      className={`relative w-full min-h-screen flex pt-4 bg-[url('/landingBg.svg')] bg-cover bg-center bg-no-repeat
        justify-between transition-colors duration-700 overflow-hidden`}
      >

        <HomeNav scrolly={scrolly}/>

        <div className="absolute w-3/5 h-[70%] z-10 mt-20">
          <LandingPage/>
        </div>

        <motion.div 
          initial={{ z: 0, opacity: 0 }}
          animate={{ z: 10, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute left-1/2 bottom-24 z-10 text-xl transition-all ease-in-out duration-150 animate-bounce"  
        >
            <span className={`animate-pulse h-0.5 w-1 items-center justify-center  rounded-full bg-white`}>.</span>
            
        </motion.div>
        
      </motion.div>
    </>
  );
};

export default HomePage;
