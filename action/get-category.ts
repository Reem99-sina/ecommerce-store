import { Category } from "@/types";

const URL =`${process.env.NEXT_PUBLIC_API_URL}`
 const getCategories = async (id:string,idstore?:string): Promise<Category> => {
       const res= await fetch(`${URL}/${idstore}/categories/${id}`)
        return res.json()
}
export default getCategories