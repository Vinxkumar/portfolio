import wallpaper1 from "../assets/wallaper1.jpg"
import HomeNav from "../components/HomeNavBar"
import type{ darkModeProp } from "../types/DarkModeInterface"
import {motion, AnimatePresence} from "framer-motion"
import GreetAlert from "../components/GreetAlert"
import { useState, useEffect } from "react"


const HomeScreen = ({darkMode}: darkModeProp) => {

    const [alertTime, setAlertTime] = useState(true)

    useEffect(()=> {
        const t = setTimeout(() => {
            setAlertTime(false)
        }, 5000);
        return ()=>clearTimeout(t)
    }, [])

    return (
        <>
        <motion.div className="realtive items-center justify-center w-screen h-screen">
            <img className="absolute w-full h-full" src={wallpaper1} alt="img not found"/>
            <div className="absolute top-0">
                <HomeNav darkMode={darkMode}/>
            </div>
            <AnimatePresence>
            { alertTime && (
            <motion.div
            initial={{z:-10, opacity:0}}
            animate={{z:10, opacity:1}}
            exit={{z:-10, opacity:0}}
            transition={{delay: 1.5, duration: 0.8}}
            className={`absolute right-0 mr-4 w-86 top-16 transition-all ease-in-out `}>
                <GreetAlert darkMode={darkMode}/>
            </motion.div>
            )}</AnimatePresence>
            <div>
            </div>
        </motion.div>
        </>
    )
}

export default HomeScreen