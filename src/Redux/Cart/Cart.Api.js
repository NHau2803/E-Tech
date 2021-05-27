import axiosClient from "API/ClientAxios"

const url = "api/"
const getCarts = async body => {
    try {
        const resApi = await axiosClient.post(`${url}cart_info`, body)
        console.log(
            `LHA:  ===> file: User.Api.js ===> line 8 ===> resApi`,
            resApi
        )
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

const saveCarts = async body => {
    try {
        const resApi = await axiosClient.post(`${url}cart_post`, body)
        console.log(
            `LHA:  ===> file: User.Api.js ===> line 8 ===> resApi`,
            resApi
        )
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

const cartApi = { getCarts, saveCarts }
export default cartApi
