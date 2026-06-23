import { useState } from "react";
import TextType from "../components/ui/TextType";

interface command  {
    name: string
}

const status = [
    {text: "status: ["},
    {text: "> Open to Work", color: "white", pl:"2%"},
    {text: "> Available to Freelance", color: "white",pl:"2%"},
    {text: "> Open to Collaborations", color: "white", pl:"2%"},
    {text: "]"},
]

// const SocialButtons = [

// ]

const Termux = ({name}: command) => {
    return(
        <div className="flex gap-2 items-center">

            <span className="felx items-center font-mono text-gh-accent justify-center">vinx.dev@folio$</span>
            <TextType
                text={name}
                typingSpeed={95}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                initialDelay={50}
                loop={false}
                deletingSpeed={0}
                cursorBlinkDuration={0.5}
                startOnVisible
                className="flex items-center text-gh-text justify-center"
            />

        </div>
    )
}


const ContactMe = () => {
    const [Clicked, setClicked] = useState(false);
  return (
    <div
      id="contact"
      className="w-screen h-screen bg-gh-surface flex items-center justify-center"
    >
      <div 
      onClick={()=>setClicked(true)}
      className="w-[90%] mt-[2.5%] h-[85%] bg-gh-bg rounded-t-xl flex flex-col overflow-hidden items-center rounded-b-md border-gh-border border ">
        <div className="w-full h-[8%] border-b shadow-2xl border-gh-border flex-items-center justify-between bg-gh-border/60 ">

            <div className="flex gap-8 h-full items-center pl-[1.5%]  ">

                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="text-gh-accent/80 font-mono flex items-center justify-center text-sm">
                    <span className="flex items-center justify-center">vinx.dev@folio</span>
                </div>
            </div>
        </div>

        <div className="h-[6%] w-full  flex mt-[2%] items-start pl-8 ">

            <Termux name={"./vinod.profile.sh && status.txt"}/>

        </div>

        <div className="w-full h-[60%]  mt-[1%] flex items-center justify-between ">
            <div className="w-[50%] h-full flex flex-col  ">

            {Clicked &&(
            <>
                <div className=" flex flex-col font-sans gap-1  h-[20%]  pl-8">

                    <TextType
                        text={["Vinod Kumar S"]}
                        typingSpeed={80}
                        pauseDuration={1500}
                        cursorCharacter=""
                        initialDelay={100}
                        loop={false}
                        deletingSpeed={0}
                        cursorBlinkDuration={0.5}
                        startOnVisible
                        className="flex items-center text-gh-accent font-bold text-4xl justify-center"
                    />

                    <TextType
                        text={["# SWE @ Blue Santos Technologies Pvt Ltd"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        cursorCharacter=""
                        initialDelay={200}
                        loop={false}
                        deletingSpeed={0}
                        cursorBlinkDuration={0.5}
                        startOnVisible
                        className="flex items-center text-xl text-gh-accent-2 justify-center"
                    />
                    <TextType
                        text={["# B.C.A Graduate - Bengaluru"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        cursorCharacter=""
                        initialDelay={200}
                        loop={false}
                        deletingSpeed={0}
                        cursorBlinkDuration={0.5}
                        startOnVisible
                        className="flex items-center text-xl text-gh-accent-2 justify-center"
                    />
                    {status.map((sts, idx) => (
                                            <TextType
                                            key={idx}
                        text={sts.text}
                        typingSpeed={75}
                        pauseDuration={1500}
                        cursorCharacter=""
                        initialDelay={200}
                        loop={false}
                        deletingSpeed={0}
                        cursorBlinkDuration={0.5}
                        startOnVisible
                        style={{
                            color: sts.color ? sts.color:"",
                            paddingLeft: sts.pl? sts.pl:""
                        }}
                        className="flex items-center text-xl text-gh-accent-2 justify-center"
                    />
                    ))}

                </div>       
            </>            
            )}
            </div>
            <div className="w-[50%] flex flex-col h-full border">
            <div className="w-[50%] flex flex-col h-full border">
                <span className="text-gh-accent"> #Reach Out</span>
                <div className="flex gap-2 h-[20%] border w-full">

                </div>
            </div> 
        </div>

      </div>
    </div></div>
  );
};

export default ContactMe;
