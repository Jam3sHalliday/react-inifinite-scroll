import { SearchProductResponse, SearchProductParams } from "../interfaces/product"
import qs from 'qs'

const url = 'https://dummyjson.com/products/search'

export const searchProduct = async (params: SearchProductParams) => {
    const { page, limit, search } = params
    
    const res: Awaited<SearchProductResponse> = await fetch(`${url}?${qs.stringify({
        skip: (page - 1) * limit,
        limit,
        ...(search && { q: search })
    })}`).then((s) => s.json())

    return res
}