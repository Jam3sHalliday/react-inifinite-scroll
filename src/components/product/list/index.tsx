import React from "react";
import { Product } from "../../../interfaces/product";
import ProductItem from "../item";

type ProductListProps = {
    products: Product[]
    ref: React.MutableRefObject<HTMLDivElement | null>
}

const ProductList = React.forwardRef<
    HTMLDivElement,
    ProductListProps
>(({ products }, ref ) => {
    return (
        <div
            className="flex flex-col gap-2 h-[400px] overflow-y-auto overflow-x-hidden mt-2"
            ref={ref}
        >
            {
                products.map((p) => (
                    <ProductItem
                        key={p.id}
                        product={p}
                    />
                ))
            }
        </div>
    )
})

export default ProductList
