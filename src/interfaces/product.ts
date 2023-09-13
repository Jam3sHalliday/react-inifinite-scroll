export type Product = {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}

export type SearchProductResponse = {
    products: Product[]
    limit: number
    skip: number
    total: number
}

export type SearchProductParams = {
    search?: string
    page: number
    limit: number
}

export type ProductListProps = {
    products: Product[]
    ref: React.MutableRefObject<HTMLDivElement | null>
}
export type ProductItemProps = {
    product: Product
}