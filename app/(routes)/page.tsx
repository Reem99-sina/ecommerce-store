import BillboardPage from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboards from "@/action/get-billboards"
import getProducts from "@/action/get-product"
import Image from "next/image";
import ProductList from "@/components/product-list";
export const revalidate=0
export default async function Home() {
  const billboards=await getBillboards("6e19dedb-56df-4c1f-8b00-85ec1134fb36")
  const products=await getProducts({isFeatured:true})
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
