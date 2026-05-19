import Shuffle from './ui/Shuffle';
import {motion} from "framer-motion"
import { useState, useEffect } from 'react';
type ScrollPosition = {
  scrolly: number;
};


const HomeNav = ({scrolly}: ScrollPosition) => {
    //   const [scrolly, setScrollY] = useState(0);
  
    // useEffect(() => {
    //   const handleScroll = () => setScrollY(window.scrollY);
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    // const navWidth = useTransform(scrollY, [0, 100], ['100%', '80%'])
    // const navPadding = useTransform(scrollY, [0, 100], ['0px', '16px'])
    return (
        <>
<motion.div
  initial={{ y: -100, opacity: 0 }}
  transition={{ duration: 0.8 }}
  animate={{ y: 0, opacity: 1 }}

  className="fixed z-30 top-0 left-0 w-full flex justify-center"
>
  <div className={`flex items-center justify-between p-2 border-b shadow-lg bg-[#18181b]/70 text-white border-[#27272a] backdrop-blur-lg transition-all duration-300 ease-in-out
          ${scrolly > 25
      ? "mt-2 rounded-3xl w-[80%]"
      : "w-full rounded-none"
    }
  `}>
            <motion.span
              initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-bold text-md w-38"
            >
                          <Shuffle
              text="Vinod Kumar S"
              shuffleDirection="up"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="text-md"
            />
            </motion.span>
         
            <motion.div
            className=" absolute left-1/2 flex  gap-12 items-center justify-center w-25"
            >


            <div className=" flex  ">
              <motion.button 
                            initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group cursor-pointer text-gray-400 hover:text-gray-200 hover:scale-130 transition-all ease-in-out`}>
              <Shuffle
              text="projects"
              shuffleDirection="up"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className=" text-md"
              />
            
              </motion.button>
              
            </div>    




            <div className=" flex ">
              <motion.button 
                            initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group cursor-pointer transition-all ease-in-out text-gray-400 hover:text-gray-200 hover:scale-130 `}>
              <Shuffle
              text="about"
              shuffleDirection="up"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className=" text-md hover:scale-x-1.1"
              />
            
              </motion.button>
              
            </div>

            

            <div className="flex ">
              <motion.button 
                            initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className={`group cursor-pointer text-gray-400 hover:text-gray-200 hover:scale-130 transition-all ease-in-out`}>
              <Shuffle
              text="skills"
              shuffleDirection="up"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className=" text-md"
              />
            
              </motion.button>
            </div>

            <div className="flex  ">
              <motion.button 
                            initial={{ z: 0, opacity: 0 }}
              animate={{ z: 10, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className={`group cursor-pointer text-gray-400 hover:text-gray-200 hover:scale-130 transition-all ease-in-out`}>
              <Shuffle
              text="contact"
              shuffleDirection="up"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className=" text-md"
              />
            
              </motion.button>
              
            </div>

          </motion.div>

          <motion.button
            initial={{ z: 0, opacity: 0 }}
            animate={{ z: 10, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`flex items-center justify-center mr-3 gap-2 text-sm w-18 h-8 rounded-xl cursor-pointer  text-gray-300  border border-gray-300 `}
            // onClick={() => setDarkMode(!darkMode)}
          >
            Hire ME
          </motion.button>
          </div>
        </motion.div>
        </>
    )

}

export default HomeNav