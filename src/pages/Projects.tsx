import ProjectCard from "../components/ProjectCards"


const Projects = () => {
    return (
        <div id="projects" className="relative w-screen h-screen flex flex-col bg-gh-bg text-[#eee8d8] px-[4%] py-[6%]">
             <span className="absolute top-1/2 left-0 text-sm text-gh-muted uppercase rotate-270">projects</span>
<div className="w-full mt-[2%] h-[85%] text-[#8edb8f]">
  <ProjectCard/>
</div>

        </div>
    )
}

export default Projects