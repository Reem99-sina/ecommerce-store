// "use client"
import BillboardPage from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboards from "@/action/get-billboards"
import getProducts from "@/action/get-product"
import Image from "next/image";
import getStore from "@/action/get-store"
// import useStore,{StoreProps} from "@/hooks/use-store"
import ProductList from "@/components/product-list";
import getBillboardsAll from "@/action/getAllBillboards"
export const revalidate=0
export default async function Home() {
  const store=await getStore()
  const indexStore=store && Array.isArray(store) && store?.length > 0 ? store[store?.length - 1]?.id : store?.length == 0?store[0]?.id:undefined

  const billall=await getBillboardsAll(indexStore)
  const indexBill=billall && Array.isArray(billall) && billall?.length > 0 ? billall[billall?.length - 1]?.id : billall?.length == 0?billall[0]?.id:undefined

  const billboards=await getBillboards(indexBill,indexStore)
  const products=await getProducts({isFeatured:true,id:indexStore})
  return (
    <Container>
    <div className="space-y-10 pb-10">
      <BillboardPage data={billboards}/>
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <ProductList title="featured product" items={products}/>
    </div>
    </div>
    </Container>
     );
}
