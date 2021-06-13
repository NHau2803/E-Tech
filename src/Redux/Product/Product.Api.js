import axiosClient from "API/ClientAxios"

const url = "api/"
const getProducts = async () => {
    try {
        const resApi = await axiosClient.get(`${url}`)
        console.log(
            "🚀 ~ file: Product.Api.js ~ line 7 ~ getProducts ~ resApi",
            resApi
        )

        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: null
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: null
        }
    }
}
const getProductDetail = async (productType, productId) => {
    try {
        const resApi = await axiosClient.get(
            `${url}products/${productType}/get/${productId}`
        )
        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: null
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: null
        }
    }
}

const getProductsFilter = async (type, body) => {
    try {
        const resApi = await axiosClient.post(
            `${url}products/${type}/filter`,
            body
        )
        console.log("🚀 ~ file: Product.Api.js ~ line 61 ~ resApi", resApi)

        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: null
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: null
        }
    }
}

const productApi = { getProducts, getProductDetail, getProductsFilter }
export default productApi
