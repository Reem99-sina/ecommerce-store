import getCategories from "@/action/get-category";
import getColors from "@/action/get-color";
import getProducts from "@/action/get-product";
import getSizes from "@/action/get-size";
import BillboardPage from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filter";

export const revalidate=0
const CategoryIdPage = async({params,searchParams}:{params:{categorId:string},searchParams:{colorId:string,sizeId:string}}) => {
    const products=await getProducts({
        categoryId:params.categorId,
        sizeId:searchParams.sizeId,
        colorId:searchParams.colorId,
    })
    const sizes= await getSizes()
    const colors=await getColors()
    const category=await getCategories(params.categorId)
  console.log(searchParams,"searchParams")
    return (<div className="bg-white">
        <Container>
        <BillboardPage data={category?.billboard}/>
        <div className="px-4 sm:px-4 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                <MobileFilters sizes={sizes} colors={colors}/>
                <div className="hidden lg:block">
                    <Filter valueKey="sizeId"name="sizes"data={sizes}/>
                    <Filter valueKey="colorId"name="colors"data={colors}/>

                </div>
                <div className="mt-6 lg:col-span-4 lg:mt-0">
                    {products.length==0&&<NoResults/>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product)=>(
                            <ProductCard key={product.id} data={product}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </Container>
    </div>);
}
 
export default CategoryIdPage;