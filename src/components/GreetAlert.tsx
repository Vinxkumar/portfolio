import { CheckCircle2Icon, InfoIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./alert"
import type { darkModeProp } from "../types/DarkModeInterface"


 const AlertDemo = ({darkMode}: darkModeProp)=> {
  return (
    <div className="absolute w-full max-w-md  items-start gap-4">
      <Alert className={`${darkMode? "bg-[#18181b]/65 border backdrop-blur-md border-[#27272a] text-white":""}`}>
        <InfoIcon />
        <AlertTitle>Welcome..!</AlertTitle>
        <AlertDescription>
          Folio OS is a OS themed portfolio website. Have a joyous day 
        </AlertDescription>
      </Alert>
    </div>
  )
}
export default AlertDemo