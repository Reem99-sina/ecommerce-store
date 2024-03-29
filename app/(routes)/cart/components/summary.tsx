"use client"
import axios from "axios"
import {useEffect} from "react"

import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import {toast} from "react-hot-toast"
import Button from "@/components/ui/Button"
import {useSearchParams}from "next/navigation"
const Summary=()=>{
    const searchParams=useSearchParams()
    const items=useCart((state)=>state.items)
    const removeAll=useCart((state)=>state.removeAll)
    const totalPrice=items.reduce((total,item)=>total+Number(item.price),0)
    const checkout=async()=>{
        const response= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productIds:items.map((ele)=>ele.id)
        })
        window.location=response.data.url
    }
    useEffect(()=>{
        if(searchParams.get("success")){
            toast.success("checkout completed")
            removeAll()
        }if(searchParams.get("canceled")){
            toast.error("something was wrong")

        }
    },[searchParams,removeAll])
return(
    <div className="
    ml-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8
    ">
        <h2 className="text-lg font-medium text-gray-900">
            order summary
        </h2>
        <div className="mt-6 space-y-4 ">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="text-base font-medium text-gray-900">
                    order toat
                </div>
                <Currency value={totalPrice}/>
            </div>
        </div>
        <Button className="w-full mt-6 " onClick={checkout} disabled={items.length==0}>
            checkout 
        </Button>
    </div>
)
}
export default Summary