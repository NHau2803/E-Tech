import axiosClient from "API/ClientAxios"

const RenderWeb = {
    get: async => {
        try {
            const url = "http://790c7601baf3.ngrok.io/api"
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
