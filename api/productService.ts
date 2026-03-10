import { ProductResponse } from "@/types/productTypes"
import apiClient from "./apiClient"

const apiV1: String = "api/V1"

export const getProducts = async (): Promise<ProductResponse> => {
    const response = await apiClient.get(apiV1+"/products")
    return response.data
}