"use client"
import { cn } from "@/lib/utils"
import { Category } from "@/types"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface MainNavProps{
    data:Category[]
}
const MainNav:React.FC<MainNavProps>=({
    data
})=>{
  
    const pathname=usePathname()
    const routes=data.map((route)=>({
        href:`/category/${route?.id}`,
        label:route?.name,
        active:pathname==`/category/${route?.id}`
    }))
return(
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map((ele)=>(
            <Link href={ele?.href}  key={ele?.href} className={cn("text-sm font-medium transition-colors hover:text-black",ele?.active?"text-black":"text-neutral-500")}>
            {ele?.label}
            </Link>
        ))}
    </nav>
)
}
export default MainNav