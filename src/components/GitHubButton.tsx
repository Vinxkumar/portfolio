import { FaGithub } from "react-icons/fa";


const GitHubButton = () => {
    return (
        <button className="w-full h-full cursor-pointer" onClick={()=> window.open("https://github.com/Vinxkumar")}>
            <FaGithub className="w-full h-full"/>
        </button>
    )
}

export default GitHubButton