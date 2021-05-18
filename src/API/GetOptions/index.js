import axiosClient from "API/ClientAxios"
import { BASE_URL } from "API/URL"
import { getOptionsLocalStorage } from "Utils/Converter"

const GetOptionsAPI = {
    getOptions: () => {
        try {
            const url = BASE_URL + "/api/admin/products/spec_list"
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
    }
}

export default GetOptionsAPI
