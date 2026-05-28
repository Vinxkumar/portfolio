import { motion } from "framer-motion";
import SmartMotionPreview from "../assets/SmartMotionPreview.png";
import deletedFilePreview from "../assets/deletedFilePreview.png";
import { FaExternalLinkAlt } from "react-icons/fa";

import SmartMotionIndicatorHelmet from "../assets/SmartMotionIndicatorHelmet.pdf";
import deletedFilePreviewSystem from "../assets/DeletedFilePreviewSystem.pdf"


const PatentsCards = () => {
  return (
    <>
      <motion.div 
      initial={{y:100, opacity:0}}  
      whileInView={{y:0, opacity:1}}
      viewport={{once:true}}
      transition={{
        delay:0.8, duration:0.8
      }}
      className="flex items-center justify-between gap-8 w-full h-full">
        {/* left  */}

        <motion.div

      animate={{ y: [0, 5, 0],  opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
          className="group p-4 w-1/2 h-full pl-4 pr-4 flex items-center transition-all ease-in-out justify-center cursor-pointer"
          onClick={() => window.open(SmartMotionIndicatorHelmet)}
        >
          <div className="relative group flex items-center m-4 rounded-xl w-full  h-full bg-[#1e1e1e] hover:bg-[#eee8d8]">
            <h2 className="absolute font-bold pl-4 pr-4 flex gap-12 justify-between w-full text-md top-[5%] text-[#e8805e] group-hover:text-[#c05c40] ">
              SMART MOTION INDICATOR HELMET <FaExternalLinkAlt />
            </h2>
            <div className="absolute -bottom-0.5 top-[12%] left-0 origin-left scale-x-0 h-0.5 w-full rounded-full bg-[#e8805e] transition-transform duration-500 delay-75 group-hover:scale-x-100" />
            <img
              src={SmartMotionPreview}
              alt="no image"
              className="absolute w-full h-[87%] rounded-b-xl overflow-hidden top-[13%] hover:opacity-0"
            />
            <div className="absolute bg-[#eee8d8] w-full flex p-4  h-[87%] rounded-b-xl overflow-hidden top-[13%] opacity-0 hover:opacity-100 ">
              <p className="w-full h-fit p-4 rounded-xl text-[#5a5248] bg-[#ddd6c4]">
                The smart motorcycle indicator helmet enhances safety by using
                motion sensors to detect head movements. A nod to the right or
                left activates the corresponding turn indicator, while a nod
                towards the front turns it off. This hands-free operation allows
                riders to signal intentions without removing their hands from
                the handlebars, improving overall road safety
              </p>
            </div>
          </div>
        </motion.div>


                {/*  right */}

        <motion.div
              animate={{ y: [0, 5, 0],  opacity: 1 }}
      transition={{
        delay: 1.5,
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
          className="group p-4 w-1/2 h-full pl-4 pr-4 flex items-center transition-all ease-in-out justify-center cursor-pointer"
          onClick={() => window.open(deletedFilePreviewSystem)}
        >
          <div className="relative group flex items-center m-4 rounded-xl w-full  h-full bg-[#1e1e1e] hover:bg-[#eee8d8]">
            <h2 className="absolute font-bold pl-4 pr-4 flex gap-12 justify-between w-full text-md top-[5%] text-[#e8805e] group-hover:text-[#c05c40] ">
              DELETED FILE PREVIEW SYSTEM <FaExternalLinkAlt />
            </h2>
            <div className="absolute -bottom-0.5 top-[12%] left-0 origin-left scale-x-0 h-0.5 w-full rounded-full bg-[#e8805e] transition-transform duration-500 delay-75 group-hover:scale-x-100" />
            <img
              src={deletedFilePreview}
              alt="no image"
              className="absolute w-full h-[87%] rounded-b-xl overflow-hidden top-[13%] hover:opacity-0"
            />
            <div className="absolute bg-[#eee8d8] w-full flex p-4  h-[87%] rounded-b-xl overflow-hidden top-[13%] opacity-0 hover:opacity-100 ">
              <p className="w-full h-fit p-4 rounded-xl text-[#5a5248] bg-[#ddd6c4]">
                QuickPeek: Keyboard Based Deleted File Preview System is a
                desktop-based utility tool which helps in previewing the files
                deleted by the user without the need for restoration. The core
                functionality relies on detecting when a user selects a file
                within the Recycle Bin interface through a single mouse click.
                Once a file is selected, the tool becomes responsive to a
                predefined keyboard shortcut (e.g., Ctrl + Alt + P). Upon
                triggering, the tool identifies the selected file’s type and
                renders a preview accordingly—images are displayed as
                thumbnails, PDFs are shown with their first page, and other
                formats may provide metadata or minimal content display.
              </p>
            </div>
          </div>
        </motion.div>


      </motion.div>
    </>
  );
};

export default PatentsCards;
