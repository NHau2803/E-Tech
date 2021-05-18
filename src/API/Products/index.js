import axiosClient from "API/ClientAxios"
import { BASE_URL } from "API/URL"

const ProductsAPI = {
    getProductDetail: async (productType, productId) => {
        try {
            const url =
                BASE_URL + "/api/products/" + productType + "/get/" + productId
            return axiosClient.get(url)
        } catch (error) {
            return {
                result: null,
                success: false,
                errorMessage: "Sorry, Server Connection Problem!"
            }
        }
    }
}

export default ProductsAPI
