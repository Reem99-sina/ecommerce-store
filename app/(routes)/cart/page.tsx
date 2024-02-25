"use client"

import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import useCart from "@/hooks/use-cart";
import { useState,useEffect } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
    const cart=useCart()
    const[isMounted,setMounted]=useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    if(!isMounted) return null;
    
    return (<div className="bg-white">
        <Container>
            <div className="px-4 py-16 sm:py-6 lg:py-8">
                <h1 className="text-3xl font-bold text-black">
                    Shopping Cart
                    </h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length==0&&<NoResults/>}
                            <ul>
                                {cart.items.map((ele)=>(
                                    <CartItem key={ele.id} data={ele}/>
                                ))}
                            </ul>
                        </div>
                        <Summary/>
                    </div>
            </div>
        </Container>
    </div>  );
}
 
export default CartPage;