import { motion} from "motion/react";
import ShapeGrid from "../components/ui/ShapeGrid";
import HomeNav from "../components/HomeNavBar";
import LandingPage from "../components/LandingContent"
import MetaBalls from "../components/ui/MetalBalls";

type ScrollPosition = {
  scrolly: number;
};

// const preloadLogin = () => import("../pages/HomeScreen")

const HomePage = ({scrolly} : ScrollPosition) => {


  return (
    <>
      <motion.div

      className={`relative w-full min-h-screen flex pt-4  justify-between transition-colors duration-700  bg-[#1e1e1e] overflow-hidden 
      `}
      >
        {/* <div className="absolute z-10 w-full h-full">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
              borderColor={"#383838"}
            hoverFillColor={"#222"}
            shape="square"
            hoverTrailAmount={0}
          />
        </div> */}

        <HomeNav scrolly={scrolly}/>

        
        <div className="absolute w-3/5 h-[70%] z-10 mt-20">
          <LandingPage/>
        </div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1.25, ease: "anticipate" }}
  
  className="absolute right-0 top-24 w-1/2 h-[70%] z-30 overflow-hidden"
>
  <MetaBalls
    color="#c05c40"
    cursorBallColor="#c05c40"
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
        
        className="absolute left-1/2 bottom-24 z-10 text-xl transition-all ease-in-out duration-150 animate-bounce">
            <span className={`animate-pulse h-0.5 w-1 items-center justify-center  rounded-full bg-white`}>.</span>
            
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomePage;
