
import { Store } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}/stores`
 const getStore = async (): Promise<Store[]|void> => {
   

       const res=await fetch(URL)
       if (res.status==200) {
        return  res.json()
    }
       else {
        return
      }
       
   
    
}
export default getStore