import axiosClient from "API/ClientAxios"
import { BASE_URL } from "API/URL"
import { getOptionsLocalStorage } from "Utils/Converter"

const CartAPI = {
    // getForUpdate: async id => {
    //     try {
    //         const url = BASE_URL + "/api/admin/products/laptop/update/" + id
    //         return axiosClient.get(url, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem(
    //                     "access_token"
    //                 )}`
    //             }
    //         })
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // },
    // getList: async id => {
    //     try {
    //         const url = BASE_URL + "/api/admin/products/index"
    //         return axiosClient.get(url, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem(
    //                     "access_token"
    //                 )}`
    //             }
    //         })
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // },
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
            return {
                result: null,
                success: false,
                errorMessage: "Sorry, Server Connection Problem!"
            }
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
            return {
                result: null,
                success: false,
                errorMessage: "Sorry, Server Connection Problem!"
            }
        }
    }
}

export default CartAPI
