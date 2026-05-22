import { FiFileText } from "react-icons/fi";

const ResumeButton = () => {
  return (
    <div
      className="w-full h-full flex items-center justify-between bg-[#0E2D2E] px-4 cursor-pointer"
      onClick={() => window.open("https://www.linkedin.com/in/vinod-kumar-s-/")}
    >
      <span className="font-poppins text-[#8edb8f]">Resume</span>
      <FiFileText className="w-5 h-5 text-[#8edb8f]" />
    </div>
  );
};

export default ResumeButton;