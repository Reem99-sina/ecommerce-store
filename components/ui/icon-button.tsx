import { cn } from "@/lib/utils"
import Button from "./Button"
import { MouseEventHandler } from "react"

function IconButton({onClick,className,icon}:{
    onClick:MouseEventHandler<HTMLButtonElement>|undefined,
    className?:string,
    icon:React.ReactElement
}) {
  return (
    <Button onClick={onClick}
    className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scall-110 transition",className)}
    >{icon}</Button>
  )
}
export default IconButton