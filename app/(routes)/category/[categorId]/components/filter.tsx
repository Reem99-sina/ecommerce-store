"use client"

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Size,Color } from "@/types";
import { useSearchParams,useRouter } from "next/navigation";
import qs from "query-string"
const Filter = ({valueKey,name,data}:{valueKey:string,name:string,data:(Size|Color)[]}) => {
    const searchParams=useSearchParams()
    const router=useRouter()
    const selectValue=searchParams.get(valueKey)
    const onClick=(id:string)=>{
        const current=qs.parse(searchParams.toString())
        const query={
            ...current,
            [valueKey]:id
        }
        if(current[valueKey]==id){
            query[valueKey]=null
        }
        const url=qs.stringifyUrl({
            url:window.location.href,
            query
        },{skipNull:true})
        router.push(url)
    }
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">{
                name
            }</h3>
            <hr className="my-4"/>
            <div className="flex flex-wrap gap-2">
                {data.map((item)=>(
                    <div className="flex items-center" key={item.id}>
                        <Button onClick={()=>onClick(item.id)} className={cn("rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",selectValue==item.id&&"bg-black text-white")}>
                            {item.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      );
}
 
export default Filter;