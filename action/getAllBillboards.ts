import { Billboard } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}`
 const getBillboardsAll = async (idStore?:string): Promise<Billboard[]|void> => {
      
      const res= await fetch(`${URL}/${idStore}/billboards/`)
     
      if (res.status==200) {return  res.json()}
      else {
       return
     }
          
}
export default getBillboardsAll