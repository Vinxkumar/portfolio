import Shuffle from './ui/Shuffle';
import {useMemo } from "react"
import { motion, } from "framer-motion"

type ScrollPosition = {
  scrolly: number;
};

const navItems = [
  { label: "about", id: "about" },
  { label: "projects", id: "projects" },
  { label: "skills", id: "skills" },
  { label: "contact", id: "contact" },
]

const HomeNav = ({ scrolly }: ScrollPosition) => {

  const navClass = useMemo(() => `flex items-center justify-between p-2 bg-[#eee8d8]/80 border-b-2 border-[#3a3a3a] shadow-lg backdrop-blur-sm text-[#eee8d8] transition-all duration-300 ease-in-out ${
    scrolly > 25 ? "mt-2.5 pl-4 rounded-2xl w-[80%]" : "w-full rounded-none"
  }`, [scrolly])

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed z-30 top-0 left-0 w-full flex justify-center"
    >
      <div className={navClass}>

        {/* Logo */}
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
          className="font-bold text-md text-[#c05c40] w-38"
        />

        {/* Nav Items */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-12 items-center justify-center">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer transition-all ease-in-out hover:scale-110"
            >
              <Shuffle
                text={label}
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
                className="text-md text-[#c05c40]"
              />
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <button className="flex items-center justify-center mr-3 gap-2 text-sm w-18 h-8 rounded-xl cursor-pointer bg-[#c05c40] text-white">
          Hire ME
        </button>

      </div>
    </motion.div>
  )
}

export default HomeNav