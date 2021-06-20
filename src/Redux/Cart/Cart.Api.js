import axiosClient from "API/ClientAxios"

const url = "api/"
// const getCarts = async body => {
//     try {
//         const resApi = await axiosClient.post(`${url}cart_info`, body)
//         console.log("🚀 ~ file: Cart.Api.js ~ line 7 ~ resApi", resApi)

//         if (resApi)
//             return {
//                 success: true,
//                 data: resApi
//             }
//         return {
//             success: false,
//             data: []
//         }
//     } catch (err) {
//         console.log(err)
//         return {
//             success: false,
//             data: []
//         }
//     }
// }
const getBillsHistory = async () => {
    try {
        const resApi = await axiosClient.get(`${url}orders`)
        console.log(
            "🚀 ~ file: Cart.Api.js ~ line 29 ~ getBillsHistory ~ resApi",
            resApi
        )

        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: null
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: null
        }
    }
}

const saveCarts = async body => {
    try {
        const resApi = await axiosClient.post(`${url}cart_post`, body)
        console.log("🚀 ~ file: Cart.Api.js ~ line 30 ~ resApi", resApi)

        if (resApi)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: []
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: []
        }
    }
}

const cartApi = { saveCarts, getBillsHistory }
export default cartApi
