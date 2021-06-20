import axiosClient from "API/ClientAxios"

const url = "api/"
const getProducts = async () => {
    try {
        const resApi = await axiosClient.get(`${url}`)

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
