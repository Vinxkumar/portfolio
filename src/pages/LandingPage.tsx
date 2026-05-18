import { motion } from "motion/react";
import ShapeGrid from "../components/ui/ShapeGrid";
import { useState } from "react";
import HomeNav from "../components/HomeNavBar";
import LandingPage from "../components/LandingContent"
import MetaBalls from "../components/ui/MetalBalls";

type ScrollPosition = {
  scrollY: number;
};

// const preloadLogin = () => import("../pages/HomeScreen")

const HomePage = ({scrollY}: ScrollPosition) => {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <>
      <div
      className={`relative w-full min-h-screen flex pt-4  justify-between transition-colors duration-700  bg-[#09090b] overflow-hidden
}`}
      >
        <div className="absolute z-10 w-full h-full">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
              borderColor={"#383838"}
            hoverFillColor={"#222"}
            shape="square"
            hoverTrailAmount={0}
          />
        </div>

        {/*  Home Secren Nav */}
        <HomeNav scrollY={scrollY}/>

        
        <div className="absolute w-3/5 h-[70%] z-10 mt-25">
          <LandingPage/>
        </div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1.25, ease: "anticipate" }}
  className="absolute right-0 top-24 w-1/2 h-[70%] z-30 overflow-hidden"
>
  <MetaBalls
    color="#8b5cf6"
    cursorBallColor="#8b5cf6"
    cursorBallSize={2}
    ballCount={22}
    animationSize={20}
    enableMouseInteraction
    enableTransparency={true}
    hoverSmoothness={0.088}
    clumpFactor={0.9}
    speed={0.3}
  />
</motion.div>

        <motion.div 
                    initial={{ z: 0, opacity: 0 }}
            animate={{ z: 10, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
        
        className="fixed left-1/2 bottom-24 z-10 text-xl transition-all ease-in-out duration-150 animate-bounce">
            <span className={`animate-pulse ${darkMode? " text-gray-400":"text-black"} h-0.5 w-1 items-center justify-center  rounded-full bg-white`}>.</span>
            
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
