import type { darkModeProp } from "../types/DarkModeInterface";
import Shuffle from './Shuffle';


const HomeNav = ({darkMode} : darkModeProp) => {

    return (
        <>
        <div className={`relative flex text-md  w-screen h-11 justify-between items-center backdrop-blur-md pl-4 pr-4 ${
              darkMode
                ? "bg-[#09090b]/70 text-white"
                : "bg-[#DDDDDD]/50 text-black"
        }`}>
            <Shuffle
              text="Folio OS"
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
              className="absolute text-xl"
            />
        </div>
        </>
    )

}

export default HomeNav