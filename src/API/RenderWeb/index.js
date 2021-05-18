import axiosClient from "API/ClientAxios"
import { BASE_URL } from "API/URL"

const RenderWeb = {
    get: async => {
        try {
            const url = BASE_URL + "/api"
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

export default RenderWeb
