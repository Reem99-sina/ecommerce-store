import { Product } from "@/types"
import Currency from "./ui/currency"
import Button from "./ui/Button"
import { ShoppingCart } from "lucide-react"

function Info({ data }: { data: Product }) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900">{data?.name}</h2>
            <div className="mt-3 flex item-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold">Size:</h3>
                <div>{data?.size?.name}</div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold">Color:</h3>
                <div className="w-6 h-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }}>

                </div>
            </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add to cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    )
}
export default Info