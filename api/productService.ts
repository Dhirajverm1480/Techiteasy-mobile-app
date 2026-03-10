import { ProductResponse } from "@/types/productTypes"
import apiClient from "./apiClient"

const apiV1: String = "/api/v1"

export const getProducts = async (): Promise<ProductResponse> => {
    const response = await apiClient.get("/products")
    return response.data
}