import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const GitHubButton = () => {
    return (
<a 
  href="https://github.com/Vinxkumar" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full h-full cursor-pointer"
>
  <FaGithub className="w-full h-full" />
</a>
    )
}

export default GitHubButton