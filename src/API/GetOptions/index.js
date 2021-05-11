import axiosClient from "API/ClientAxios"

const GetOptionsAPI = {
    get: async => {
        try {
            const url = "http://790c7601baf3.ngrok.io/api/products/create"
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

export default GetOptionsAPI
