import { motion } from "framer-motion"
import { CgProfile } from "react-icons/cg";
import profilepic from "../assets/profilepic.png"
import { useNavigate } from "react-router-dom";
import type { darkModeProp } from "../types/DarkModeInterface";
import Shuffle from './Shuffle';

const preloadLogin = ()=> import("../pages/HomeScreen")


const LoginProfile = ({darkMode}: darkModeProp) => {
    const navigate = useNavigate()
    return (
      <>
        <motion.button
          whileHover={{
            boxShadow: "0px 0px 12px 2px rgba(139, 92, 246, 0.6)",
            scale: 1.01,
          }}
          onClick={() => {
            preloadLogin;
            navigate("/home");
          }}
          className={`absolute p-4 justify-left items-center flex  gap-2 transition-all ease-in-out w-92 h-28 rounded-3xl shadow-lg ${
            darkMode
              ? "bg-[#18181b] border border-[#27272a] text-white"
              : "bg-[#f4f4f5] border border-[#c8c8c8]"
          }`}
        >
          <div className="absolute items-center h-20 w-20 rounded-full">
            <img
              src={profilepic}
              alt={`${(<CgProfile />)}`}
              className="h-full w-full  rounded-full"
            />
          </div>
          <div className="absolute ml-22 w-54 h-12  flex pl-3 flex-col items-start justify-left">
            <Shuffle
              text="Vinod Kumar S"
              shuffleDirection="down"
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
              className="absolute text-md"
            />
            <h5 className="absolute mt-8 text-xl text-gray-400">
              Software Engineer
            </h5>
          </div>
        </motion.button>
      </>
    );
}

export default LoginProfile