import DotField from "../components/ui/DotField";
import ShinyText from "../components/ui/ShinyText";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";




const preloadLogin = () => import('./LandingPage')



const PageLoader = () => {
    const navigate = useNavigate()
    //   const navigate = useNavigate()

  useEffect(() => {
    preloadLogin()

    const t = setTimeout(() => navigate('/home'), 5000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-[#120F17]">
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        className="flex flex-col items-center justify-center"
      >
        <DotField
          dotRadius={2}
          dotSpacing={14}
          bulgeStrength={43}
          glowRadius={50}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={150}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
              <ShinyText
        text="init()"
        speed={3.3}
        delay={0}
        color="#4a4949"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
        className="absolute text-4xl font-bold"
      />
      <span className="absolute text-3 font-light text-gray-600 mt-20">
        A portfolio website .
      </span>
      {/* {timeout} */}
      </div>
    </div>
  );
};

export default PageLoader;
