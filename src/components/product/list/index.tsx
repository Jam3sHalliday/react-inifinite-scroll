import React from "react";
import ProductItem from "../item";
import { ProductListProps } from "../../../interfaces/product";

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
