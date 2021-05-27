import axiosClient from "API/ClientAxios"

const url = "api/"
const getProducts = async () => {
    try {
        const resApi = await axiosClient.get(`${url}`)
        console.log(
            `LHA:  ===> file: User.Api.js ===> line 8 ===> resApi`,
            resApi
        )
        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: []
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: []
        }
    }
}
const getProductDetail = async (productType, productId) => {
    try {
        const resApi = await axiosClient.get(
            `${url}products/${productType}/get/${productId}`
        )
        console.log(
            `LHA:  ===> file: User.Api.js ===> line 8 ===> resApi`,
            resApi
        )
        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: []
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: []
        }
    }
}

const productApi = { getProducts, getProductDetail }
export default productApi
