import { BiLogoGmail } from "react-icons/bi";


const MailButton = () => {
    return (
        <button className="w-full h-ful cursor-ponter" onClick={()=> window.open("vinxkumar178@gmail.com")}>
            <BiLogoGmail className="w-full h-full"/>
        </button>
    )
}

export default MailButton