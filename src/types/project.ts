import type React from "react"

interface techStack {
    name: string,
    bg: string,
    icon ?: string | React.ReactNode
}


export interface projectProp {
    title: string,
    description: string,
    tech : techStack[],
    img?: string |React.ReactNode,
    gitlink: string,
    gitlink_?: string,
    liveLink?: string,
    status: "ongoing" | "complete"  | "live" | "future"

    delay?: number,
    top?:string,
    left?:string
    border?: "t" | "b" | "l" | "r"
}