import {create}from "zustand"
import {Product} from "@/types"
interface PreviewModelProps{
    isOpen:boolean;
    data?:Product;
    onOpen:(data:Product)=>void;
    onClose:()=>void
}
const usePreviewModel=create<PreviewModelProps>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Product)=>set({data:data,isOpen:true}),
    onClose:()=>set({isOpen:false})
}))
export default usePreviewModel