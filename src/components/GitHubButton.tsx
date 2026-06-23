import { FaGithub } from "react-icons/fa";



const GitHubButton = () => {
    return (
<a 
  href="https://github.com/Vinxkumar" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full hover:text-gh-text h-full  cursor-pointer"
>
  <FaGithub className="w-full h-full" />
</a>
    )
}

export default GitHubButton