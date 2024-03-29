import { Color } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}`
 const getColors = async (id?:string): Promise<Color[]> => {
    
       const res= await fetch(URL+id+"/colors")
        
         return res.json()
       
   
    
}
export default getColors