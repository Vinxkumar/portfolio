// HomeNav.tsx
import Shuffle from './ui/Shuffle';
import { useMemo } from "react"
import { motion } from "framer-motion"
import { useActiveSection } from '../hooks/useActiveSection';

type ScrollPosition = {
  scrolly: number;
};

const navItems = [
  { label: "", id: "landing" },
  { label: "about", id: "about" },
  { label: "projects", id: "projects" },
  {label: "research works", id:"research-works"},
  { label: "skills", id: "skills" },
  { label: "contact", id: "contact" },
]

const HomeNav = ({ scrolly }: ScrollPosition) => {
  const activeSection = useActiveSection() 

  const navClass = useMemo(() => `flex items-center justify-between p-2  transition-all duration-100 ease-in-out ${
    scrolly > 25 ? "mt-2.5 pl-4 text-[#eee8d8] rounded-2xl w-[80%] border-0 bg-gh-bg" : "text-gh-bg w-full rounded-none"
  }`, [scrolly])

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed z-30 top-0 left-0 w-full flex justify-center"
    >
      <div className={navClass}>
        <div onClick={() => document.getElementById("landing")?.scrollIntoView({ behavior: 'smooth' })}><Shuffle
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
          
          className="font-bold text-md text-white w-38 cursor-pointer"
        /></div>
        

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-12 items-center justify-center">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`relative cursor-pointer w-fit flex flex-col transition-all ease-in-out hover:translate-y-1 ${
                activeSection === id
                  ? "text-gh-accent font-medium"   
                  : "hover:text-gh-accent"
              }`}
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
                className="text-[18px]"
              />
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gh-accent transition-all duration-300 ease-in-out origin-left ${
                activeSection === id ? "w-full" : "w-0"
              }`}/>
            </button>
          ))}
        </div>

        <button className="flex transition-all ease-in-out items-center hover:translate-y-0.5 justify-center mr-3 gap-2 text-sm w-18 h-8 rounded-xl hover:rounded-none cursor-pointer border bg-gh-accent-3 border-gh-border text-gh-text">
          Hire ME
        </button>

      </div>
    </motion.div>
  )
}

export default HomeNav