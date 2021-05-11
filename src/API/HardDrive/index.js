import axiosClient from "API/ClientAxios"

const HardDriveAPI = {
    create: async data => {
        console.log(
            "🚀 ~ file: HardDriveAPI.js ~ line 46 ~ data",
            JSON.stringify(data)
        )
        try {
            const url = ""
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

export default HardDriveAPI
