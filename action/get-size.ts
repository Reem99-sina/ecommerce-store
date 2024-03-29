import { Size } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}`
 const getSizes = async (id?:string): Promise<Size[]> => {
    
       const res= await fetch(URL+id+"/sizes")
        
         return res.json()
       
   
    
}
export default getSizes