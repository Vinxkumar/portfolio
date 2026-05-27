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