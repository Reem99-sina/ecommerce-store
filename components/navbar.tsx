
import Container from "@/components/ui/container"
import Link from "next/link"
import MainNav from "./main-nav"
import getCategories from "@/action/get-categories"
import NavbarAction from "./navbar-action"
import { Store } from "@/types";
import getStore from "@/action/get-store"

const Navbar= async()=>{

  const store=await getStore()
  const indexStore=store && Array.isArray(store) && store?.length > 0 ? store[store?.length - 1]?.id : store?.length == 0?store[0]?.id:undefined
    
    const categories=await getCategories(indexStore)
  
return(
    <div className="border-b">
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <Link href="/"className="ml-4 flex lg:ml-0 gap-x-2">
                <p className="font-bold text-xl">STORE</p>
            </Link>
           {Array.isArray(categories)&&categories?.length>0? <MainNav data={categories}/>:<></>}
            <NavbarAction/>
            </div>
        </Container>
    </div>
)
}
export default Navbar