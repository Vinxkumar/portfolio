import React, { useState } from "react";
import TextType from "../components/ui/TextType";
import GitHubButton from "../components/GitHubButton";
import MailButton from "../components/MailButton";
import LinkedInButton from "../components/LinkedInButton";

interface command {
  name: string;
}

interface button {
  btn: React.ComponentType;
  col?: string;
  name?: string;
}

interface QuickStat {
  txt: string;
  num: number | string;
  col?: string;
}

const status = [
  { text: "status: [" },
  { text: "> Open to Work", color: "white", pl: "2%" },
  { text: "> Available to Freelance", color: "white", pl: "2%" },
  { text: "> Open to Collaborations", color: "white", pl: "2%" },
  { text: "]" },
];

const SocialButtons: button[] = [
  {
    btn: GitHubButton,
    col: "#f0fdf4",
    name: "GitHub",
  },
  {
    btn: MailButton,
    col: "#EA4335",
    name: "Mail",
  },
  {
    btn: LinkedInButton,
    col: "#0472ad",
    name: "LinkedIn",
  },
];

const QuickStats: QuickStat[] = [
  {
    txt: "> Projects Completed",
    num: 3,
  },
  {
    txt: "> Ongoing Projects",
    num: 1,
  },
  {
    txt: "> GitHub Contributions",
    num: 600,
  },
  {
    txt: "> Internship Experience",
    num: "3 M",
  },
];

const Termux = ({ name }: command) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="felx items-center font-mono text-gh-accent justify-center">
        vinx.dev@folio$
      </span>
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
  );
};

const ContactMe = () => {
  const [Clicked, setClicked] = useState(false);
  return (
    <div
      id="contact"
      className="w-screen h-screen bg-gh-surface flex items-center justify-center"
    >
      <div
        onClick={() => setClicked(true)}
        className="w-[90%] mt-[2.5%] h-[85%] bg-gh-bg rounded-t-xl flex flex-col overflow-hidden items-center rounded-b-md border-gh-border border "
      >
        <div className="w-full h-[8%] border-b shadow-2xl border-gh-border flex-items-center justify-between bg-gh-border/60 ">
          <div className="flex gap-8 h-full items-center pl-[1.5%]  ">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <div className="text-gh-accent/80 font-mono flex items-center justify-center text-sm">
              <span className="flex items-center justify-center">
                vinx.dev@folio
              </span>
            </div>
          </div>
        </div>

        <div className="h-[6%] w-full  flex mt-[2%] items-start pl-8 ">
          <Termux name={"./vinod.profile.sh && status.txt"} />
        </div>

        <div className="w-full h-[80%]  mt-[1%] flex items-center justify-between ">
          <div className="w-[50%] h-full flex flex-col  ">
            {Clicked && (
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
                    text={["# SWE Intern @ Blue Santos Technologies Pvt Ltd"]}
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
                        color: sts.color ? sts.color : "",
                        paddingLeft: sts.pl ? sts.pl : "",
                      }}
                      className="flex items-center text-xl text-gh-accent-2 justify-center"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="w-[50%] flex flex-col justify-between h-full ">
            <div className="flex w-full h-[50%] ">
              <div className="w-[50%] flex flex-col h-full ">
                <span className="text-gh-accent font-bold"> #Reach Out</span>
                <div className="flex gap-2   w-full h-full">
                  {SocialButtons.map((item, idx) => {
                    const Item = item.btn;
                    return (
                      <div
                        key={idx}
                        className="w-1/3 p-[5%] flex flex-col items-center h-[38%] hover:-translate-y-2 transition-all ease-in-out delay-75 "
                        style={{ color: item.col }}
                      >
                        <Item />
                        <span className="text-white m-1">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-[50%] pl-[5%] flex flex-col h-full  ">
                <span className="text-gh-accent font-bold"> #Quick Stats</span>
                <div className="flex flex-col  h-full  w-full">
                  {QuickStats.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="w-full h-1/3 m-2 flex gap-2 text-gh-text hover:scale-108 transition-all  ease-in-out delay-75 "
                      >
                        <span> {item.txt} </span>
                        <span className="text-gh-accent font-bold">
                          {" "}
                          +{item.num}{""}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col  gap-2 h-[50%] pr-[6%] ">
                <span className="text-gh-accent w-full h-[12%] text-[19px] font-bold"># Found Me Needed ?</span>
                <div className="w-full h-[22%] p-1 gap-2 flex items-center ">
                    <input placeholder="your name" 
                    className="h-full pl-[1%] w-1/2 m-[1%]
                        bg-black/80 
                        text-gh-text 
                        border-gh-border border 
                        rounded-md     
                        border-zinc-700
                        px-4 py-3
                        placeholder:text-zinc-500
                        outline-none
                        transition-all duration-300
                        focus:border-green-500
                        focus:ring-2
                        focus:ring-green-500/40
                    "/>

                    <input placeholder="your_mail@gmail.com" 
                    className="h-full pl-[1%] w-1/2 m-[1%]
                        bg-black/80 
                        text-gh-text 
                        border-gh-border border 
                        rounded-md     
                        border-zinc-700
                        px-4 py-3
                       
                        placeholder:text-zinc-500
                        outline-none
                        transition-all duration-300
                        focus:border-green-500
                        focus:ring-2
                        focus:ring-green-500/40
                    "/>
                </div>
                <div className="h-[66%] p-1  w-full ">
                  <textarea  placeholder="your message.." className="w-full h-full  flex items-start 
                  resize-none mb-[2%] p-1
                  bg-black/80 
                        text-gh-text 
                        border-gh-border border 
                        rounded-md     
                        border-zinc-700
                        px-4 py-3
                        placeholder:text-zinc-500
                        outline-none
                        transition-all duration-300
                        focus:border-green-500
                        focus:ring-2
                        focus:ring-green-500/40
                  " />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
