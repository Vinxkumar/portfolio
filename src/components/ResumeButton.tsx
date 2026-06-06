import { FiFileText } from "react-icons/fi";

const ResumeButton = () => {
  return (
    <div
      className="w-full h-full flex items-center justify-between transition-all ease-in-out bg-gh-accent-3 px-4 rotate-2 hover:rotate-0 cursor-pointer"
      onClick={() => window.open("https://www.linkedin.com/in/vinod-kumar-s-/")}
    >
      <span className="font-poppins text-[#eee8d8]">Resume</span>
      <FiFileText className="w-5 h-5 text-[#eee8d8]" />
    </div>
  );
};

export default ResumeButton;