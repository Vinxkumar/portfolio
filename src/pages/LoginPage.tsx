import { motion } from "motion/react";
import ShapeGrid from "../components/ShapeGrid";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";



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
              borderColor={darkMode ? "#2727a" : "#d4d4a8"}
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
          <div className={` w-screen h-10 flex items-center justify-between p-2  backdrop-100% border-b shadow-lg
                ${darkMode ? "bg-[#18181b] text-white border-[#27272a] ": "bg-zinc-100"}
            
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
        <div>
            dwdwdwdwd
        </div>
      </div>
    </>
  );
};

export default LoginPage;
