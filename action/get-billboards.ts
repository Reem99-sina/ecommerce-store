import { Billboard } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}`
 const getBillboards = async (id?:string,idStore?:string): Promise<Billboard|void> => {
      
      const res= await fetch(`${URL}/${idStore}/billboards/${id}`)
     
      if (res.status==200) {return  res.json()}
      else {
       return
     }
          
}
export default getBillboards