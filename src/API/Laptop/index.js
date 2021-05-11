import axiosClient from "API/ClientAxios"

const LaptopAPI = {
    create: async data => {
        console.log(
            "🚀 ~ file: LaptopAPI.js ~ line 46 ~ data",
            JSON.stringify(data)
        )
        try {
            const url =
                "http://http://413440c72cd7.ngrok.io/api/products/laptop/create"
            return axiosClient.post(url, data)
        } catch (error) {
            console.log("ABC" + error)
            return {
                result: null,
                success: false,
                errorMessage: "Sorry, Server Connection Problem!"
            }
        }
    },

    search: async params => {
        try {
            const url = ""
            return axiosClient.get(url, params)
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
