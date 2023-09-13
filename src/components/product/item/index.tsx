import { ProductItemProps } from "../../../interfaces/product";

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <div className="w-full flex gap-4 select-none cursor-pointer hover:border-grey-40">
            <img
                className="object-contain"
                src={product.images[0]}
                alt={product.title}
                height={40}
                width={40}
            />

            <div>
                <p className="text-sm">{product.title}</p>
                <p className="text-xs">${product.price}</p>
            </div>
        </div>
    )
}