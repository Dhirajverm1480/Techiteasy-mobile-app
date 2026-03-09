import { ProductResponse } from "@/types/productTypes"
import apiClient from "./apiClient"

export const getProducts = async (): Promise<ProductResponse> => {
    const response = await apiClient.get("/products")
    return response.data
}