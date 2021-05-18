import axiosClient from "API/ClientAxios"
import { BASE_URL } from "API/URL"
import { getOptionsLocalStorage } from "Utils/Converter"

const LaptopAPI = {
    getForUpdate: async id => {
        try {
            const url = BASE_URL + "/api/admin/products/laptop/update/" + id
            return axiosClient.get(url, {
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
    getList: async id => {
        try {
            const url = BASE_URL + "/api/admin/products/laptop/index"
            return axiosClient.get(url, {
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
    create: async data => {
        try {
            const url = BASE_URL + "/api/admin/products/laptop/create"
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
    update: async data => {
        try {
            const url = BASE_URL + "/api/admin/products/laptop/update"
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

export default LaptopAPI
