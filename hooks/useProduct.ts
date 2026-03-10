import { getProducts } from "@/api/productService"
import { Product} from "@/types/productTypes"
import { useEffect, useState } from "react"

export const useProduct = () => {
    // const [product, setProduct] = useState<ProductResponse | null>(null)
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchProducts()
    },[])

    const fetchProducts = async () =>{
        setLoading(true)
        try {
            const data = await getProducts();
            console.log("DATA: ", data)
            setProducts(data.products)
            setLoading(false)
        } catch (error) {
            console.log("Err: ",error)
        }
        finally{
            setLoading(false)
        }
        // console.log("Product: ", products)
    }

    return {products, loading}
}