import { motion } from "motion/react";
import ShapeGrid from "../components/ShapeGrid";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import LoginProfile from "../components/LoginProfile";





const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(true);
const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(new Date());
        }, 16);
        return () => clearTimeout(timer);
    }, []);

  return (
    <>
      <div
      className={`relative w-screen h-screen flex items-center justify-center transition-colors duration-700 ${
  darkMode
    ? "bg-[#09090b]"
    : "bg-[#DDDDDD]"
}`}
      >
        <div className="absolute w-full h-full">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
              borderColor={darkMode ? "#383838" : "#d4d4a8"}
            hoverFillColor={darkMode ? "#222" : "#c8cddf"}
            shape="square"
            hoverTrailAmount={0}
            
          />
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute z-10 top-0 transition-all ease-in-out"
        >
          <div className={` w-screen h-10 flex items-center justify-between p-2   border-b shadow-lg
                ${darkMode ? "bg-[#18181b] text-white border-[#27272a] ": " bg-zinc-100 backdrop-blur-sm border-gray-300 text-gray-800"}
            
            `}>
            <motion.span
              initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="font-bold text-md"
            >
              Folio OS
            </motion.span>

            <motion.div
              initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className={`flex justify-center items-center gap-3 font-medium ${darkMode ? "text-gray-300" : ""}`}
            >
            <span>{currentTime.toLocaleTimeString()}</span>
            
            </motion.div>
          

          <motion.button
            initial={{ z: 0, opacity: 0 }}
            animate={{ z: 10, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`flex items-center justify-center mr-3 gap-2 text-sm w-12 h-6 rounded-full cursor-pointer border border-[#27272a] ${darkMode ? "text-gray-800 bg-gray-300" : "text-gray-300  bg-gray-800"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <span className="text-lg">
                <MdDarkMode className="w-full h-full" />
              </span>
            ) : (
              <span>
                <MdOutlineDarkMode className="w-full h-full" />
              </span>
            )}
          </motion.button>
          </div>
        </motion.div>
        
        <motion.div
            initial={{ z: 0, opacity: 0 }}
            animate={{ z: 10, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`absolute flex top-2/5 items-center justify-center`}
        
        >
          <LoginProfile darkMode={darkMode}/>
        </motion.div>
        <motion.div 
                    initial={{ z: 0, opacity: 0 }}
            animate={{ z: 10, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
        
        className="absolute bottom-24 z-10 text-xl transition-all ease-in-out duration-150 animate-bounce">
            <span className={`animate-pulse ${darkMode? " text-gray-400":"text-black"}`}>click on profile to continue</span>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
