import { Category } from "@/types";
const URL =`${process.env.NEXT_PUBLIC_API_URL}`
 const getCategories = async (id?:string): Promise<Category[]|void> => {
       const res=await fetch(URL+id+"/categories")
       if (res.status==200) {return  res.json()}
       else {
        return
      }
       
   
    
}
export default getCategories