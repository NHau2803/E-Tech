import axiosClient from "API/ClientAxios"
import { BASE_URL } from "API/URL"
import { getOptionsLocalStorage } from "Utils/Converter"

const CartAPI = {
    getCartInfo: async data => {
        try {
            const url = BASE_URL + "/api/cart_info"
            return axiosClient.post(url, data, {
                headers: {
                    Authorization: `Bearer ${getOptionsLocalStorage(
                        "access_token"
                    )}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    },
    saveCart: async data => {
        try {
            const url = BASE_URL + "/api/cart_post"
            return axiosClient.post(url, data, {
                headers: {
                    Authorization: `Bearer ${getOptionsLocalStorage(
                        "access_token"
                    )}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default CartAPI
