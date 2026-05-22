import { LuLinkedin } from "react-icons/lu";


const LinkedInButton = () => {
    return (
        <button className="w-full h-full cursor-pointer" onClick={()=> window.open("https://www.linkedin.com/in/vinod-kumar-s-/")}>
            <LuLinkedin className="w-full h-full"/>
        </button>
    )
}

export default LinkedInButton