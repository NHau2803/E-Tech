import axiosClient from "./ClientAxios"

const ProductAPI = {
    // search: async params => {
    //     try {
    //         const url = urlApi.BASE_URL_ADMIN + "/student/search"
    //         let result = await handleApi(await axios.get(url))
    //         console.log(result)
    //         return result
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // },

    // find: async id => {
    //     try {
    //         const url = urlApi.BASE_URL_STUDENT + `/${id}`
    //         return await handleApi(await axios.get(url))
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // },

    // info: async id => {
    //     try {
    //         const url = urlApi.BASE_URL_STUDENT + `/${id}/info`
    //         return await handleApi(await axios.get(url))
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // },

    create: async data => {
        console.log(
            "🚀 ~ file: ProductAPI.js ~ line 46 ~ data",
            JSON.stringify(data)
        )
        try {
            const url = "http://11e359a2e597.ngrok.io/api/products/create"
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
            const url = "http://11e359a2e597.ngrok.io/api/products/create/p"
            return axiosClient.get(url, params)
        } catch (error) {
            return {
                result: null,
                success: false,
                errorMessage: "Sorry, Server Connection Problem!"
            }
        }
    }

    // update: async (id, student) => {
    //     try {
    //         const url = urlApi.BASE_URL_STUDENT + `/${id}`
    //         return await handleApi(await axios.post(url, student))
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // },

    // delete: async id => {
    //     try {
    //         const url = urlApi.BASE_URL_ADMIN + `/student/${id}/delete`
    //         console.log(url)
    //         return await handleApi(await axios.post(url, id))
    //     } catch (error) {
    //         return {
    //             result: null,
    //             success: false,
    //             errorMessage: "Sorry, Server Connection Problem!"
    //         }
    //     }
    // }
}

export default ProductAPI
