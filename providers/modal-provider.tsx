"use client"
import PreviewModel from "@/components/preview-modal"
import {useState,useEffect} from "react"

const ModalProvider = () => {
  const[isMounted,setIsMounted]=useState(false)
  useEffect(()=>{
        setIsMounted(true)
  },[])
  if(!isMounted){
        return null
  }
  return(<>
        <PreviewModel/>
 </> )
       
    
}
 
export default ModalProvider