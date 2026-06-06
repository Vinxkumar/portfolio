import { BiLogoGmail } from "react-icons/bi";


const MailButton = () => {
    return (
<a 
  href="vinxkumar178@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full h-full hover:text-[#EA4335] flex items-center justify-center"
>
  <BiLogoGmail className="w-full h-full" />
</a>
    )
}

export default MailButton