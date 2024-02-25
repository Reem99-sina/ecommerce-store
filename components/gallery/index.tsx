"use client"
import { Image as ImageType } from "@/types"
import {Tab}from "@headlessui/react"
import GalleryItem from "./gallery-item"
import Image from "next/image"
const Gallery=({images}:{images:ImageType[]})=>{
 
return(
    <Tab.Group className="flex flex-col-reverse" as="div">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
                {images?.map((ele)=>(
                    <GalleryItem key={ele.id} image={ele}/>
                ))}
            </Tab.List>
        </div>
        <Tab.Panels className="aspect-square w-full">
        {images?.map((ele)=>(
                   <Tab.Panel key={ele.id}>
                    <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
                        <Image fill alt="" src={ele.url} className="object-cover object-center"/>
                    </div>
                   </Tab.Panel>
                ))}      
        </Tab.Panels>
    </Tab.Group>
)
}
export default Gallery