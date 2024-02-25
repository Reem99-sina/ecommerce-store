import {create}from "zustand"
import {persist,createJSONStorage}from "zustand/middleware"

import {Product} from "@/types"
import toast from "react-hot-toast";
interface CartProps{
    items:Product[];
    addItem:(data:Product)=>void;
    removeItem:(id:string)=>void;
    removeAll:()=>void
}
const useCart=create(persist<CartProps>((set,get)=>({
items:[],
addItem:(data:Product)=>{
    const currentItems=get().items
    const existItems=currentItems.find((item)=>item.id===data?.id)
    if(existItems){
        return toast("Item already exist")
    }
    set({items:[...get().items,data]})
    toast.success("item is added to cart")
},
removeItem:(id:string)=>{
    set({items:[...get().items.filter((ele)=>ele.id!==id)]})
    toast.success("item is removed from cart")

},removeAll:()=>{
    set({items:[]})
}
}),{
    name:"cart-storage",
    storage:createJSONStorage(()=>localStorage)
}))
export default useCart