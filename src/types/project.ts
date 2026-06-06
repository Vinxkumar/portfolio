import type React from "react"

interface techStack {
    name: string,
    bg: string,
    icon ?: string | React.ReactNode
}


export interface projectProp {
    title: string,
    description: string,
    tech : string[],
    img?: string,
    link: string
    status: "ongoing" | "complete"  

    delay?: number,
    top?:string,
    left?:string
}