import getProducts from "@/action/get-product"
import getProductId from "@/action/get-product-id"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"
const ProductPage=async({params}:{params:{productId:string}})=>{
 
    const product=await getProductId(params.productId)
    const suggestedProduct=await getProducts({
        categoryId:product?.category?.id
    })
  
return(
    <div>
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <Gallery images={product?.images}/>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data={product}/>
                    </div>
                </div>
                <hr className="my-10"/>
                <ProductList title="related Products" items={suggestedProduct}/>
            </div>
        </Container>
    </div>
)
}
export default ProductPage