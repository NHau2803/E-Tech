import axiosClient from "API/ClientAxios"

const ProductsAPI = {
    getProductDetail: async (productType, productId) => {
        try {
            const url =
                "http://925f37a952cb.ngrok.io/api/products/" +
                productType +
                "/" +
                productId
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
