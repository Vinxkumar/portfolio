import ProjectCard from "../components/ProjectCards"
import { motion } from "framer-motion"
import BlurText from "../components/ui/BlurText"
import DotField from "../components/ui/DotField"
const Projects = () => {

  const projects = [
  {
    title: "ReachGRC Trust",
    desc: "Governance, risk & compliance platform with domain-control mapping.",
    stack: ["Spring Boot", "React", "PostgreSQL"],
    status: "In progress",
  },
  {
    title: "Classroom Allotment",
    desc: "Role-based room scheduling system for teachers and students.",
    stack: ["React", "TypeScript", "Tailwind"],
    status: "In progress",
  },
  {
    title: "HR Attrition Predictor",
    desc: "ML pipeline comparing models to predict employee churn.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    status: "Completed",
  },
  {
    title: "Portfolio",
    desc: "Personal dev portfolio with animated dot field background.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Completed",
  },
  {
    title: "Auth Service",
    desc: "JWT-based authentication microservice with role management.",
    stack: ["Spring Boot", "PostgreSQL", "JWT"],
    status: "Planned",
  },
  {
    title: "ererer",
    desc: "Governance, risk & compliance platform with domain-control mapping.",
    stack: ["Spring Boot", "React", "PostgreSQL"],
    status: "In progress",
  },
  {
    title: "Classroom Allotment",
    desc: "Role-based room scheduling system for teachers and students.",
    stack: ["React", "TypeScript", "Tailwind"],
    status: "In progress",
  },
  {
    title: "HR Attrition Predictor",
    desc: "ML pipeline comparing models to predict employee churn.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    status: "Completed",
  },
  {
    title: "Portfolio",
    desc: "Personal dev portfolio with animated dot field background.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Completed",
  },
  {
    title: "Auth Service",
    desc: "JWT-based authentication microservice with role management.",
    stack: ["Spring Boot", "PostgreSQL", "JWT"],
    status: "Planned",
  },
];

const statusColor: Record<string, string> = {
  "In progress": "bg-blue-500/10 text-blue-400",
  "Completed":   "bg-green-500/10 text-green-400",
  "Planned":     "bg-zinc-500/10 text-zinc-400",
};



    return (
        <>
        <div className="w-screen h-screen bg-[#0E2D2E] text-[#8edb8f]">Hello World</div>
        </>
    )
}

export default Projects