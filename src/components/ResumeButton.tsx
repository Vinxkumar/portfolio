import { FiFileText } from "react-icons/fi";

const ResumeButton = () => {
  return (
    <div
      className="w-full h-full flex items-center justify-between bg-[#c05c40] px-4 cursor-pointer"
      onClick={() => window.open("https://www.linkedin.com/in/vinod-kumar-s-/")}
    >
      <span className="font-poppins text-[#eee8d8]">Resume</span>
      <FiFileText className="w-5 h-5 text-[#eee8d8]" />
    </div>
  );
};

export default ResumeButton;