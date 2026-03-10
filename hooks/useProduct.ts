import { getProducts } from "@/api/productService"
import { useEffect, useState } from "react"

export const useProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    },[])

    const fetchProducts = async () =>{
        try {
            const data = await getProducts();
            console.log("DATA: ", data)
            setProducts(data)
        } catch (error) {
            console.log("Err: ",error)
        }
    }

    return products
}