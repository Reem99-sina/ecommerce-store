import { Product,Store } from "@/types";
import qs from "query-string"
const URL =`${process.env.NEXT_PUBLIC_API_URL}`
interface  QueryProps{
  categoryId?:string;
  sizeId?:string;
  colorId?:string;
  isFeatured?:boolean;
  id?:string
}
 const getProducts = async (query:QueryProps): Promise<Product[]|void> => {
    const url=qs.stringifyUrl({
      url:URL+query?.id+"/products",
      query:{
        categoryId:query.categoryId,
  sizeId:query.sizeId,
  colorId:query.colorId,
  isFeatured:query.isFeatured
      }
    })
      const res= await fetch(url)
      if (res.status==200) {
        return  res.json()
      }
       else {
        return
      }   
}
export default getProducts