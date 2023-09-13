import { ChangeEvent, useEffect, useRef, useState } from "react"
import { debounce } from 'lodash'

import SearchInput from "../search-input"
import ProductList from "../product/list"
import { Product, SearchProductResponse } from "../../interfaces/product"
import { searchProduct } from "../../services/product.service"

const limit = 20
export default function InfiniteScroll() {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [search, setSearch] = useState('')

    const [products, setProducts] = useState<Product[] | null>(null)
    const productContainerRef = useRef<null | HTMLDivElement>(null)

    const debouncedHandleSearchChange = debounce((value: string) => {
        // scroll to top first to prevent handleProductContainerScroll triggers
        productContainerRef.current?.scrollTo({ top: 0 })

        // reset values before searching
        setProducts([])
        setPage(1)
        
        setSearch(value)
    }, 500);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        debouncedHandleSearchChange(val)
    }

    const handleSearchProductResponse = (res: SearchProductResponse) => {
        if (res) {
            const { products: ps, total } = res

            // get total page once the response
            setTotalPage(Math.ceil(total / limit))

            setProducts([
                ...(products || []),
                ...ps
            ])
        }
    }

    const handleProductContainerScroll: EventListener = (e) => {
        const element = e.target as HTMLDivElement
        const isAtBottom = element.scrollTop + element.clientHeight === element.scrollHeight;

        if (isAtBottom && page <= totalPage) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        const element = productContainerRef.current
        
        if (!element) return
        element.addEventListener('scroll', handleProductContainerScroll)

        return () => {
            element.removeEventListener('scroll', handleProductContainerScroll)
        }
    })

    useEffect(() => {
        if (search) {
            searchProduct({ page, limit, search })
                .then((res) => handleSearchProductResponse(res))
        } else {
            setProducts([])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, page])

    return (
        <div>
            <SearchInput onChange={handleSearchChange} />
            { products && <ProductList ref={productContainerRef} products={products} /> }
        </div>
    )
}