import axiosClient from "API/ClientAxios"

const url = "api/admin/products/"
const getSpecList = async () => {
    try {
        const resApi = await axiosClient.get(`${url}spec_list`)

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
const getProducts = async type => {
    try {
        const resApi = await axiosClient.get(`${url}${type}/index`)

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
const getProduct = async (type, id) => {
    try {
        const resApi = await axiosClient.get(`${url}${type}/update/${id}`)

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
const createProduct = async (type, body) => {
    try {
        const resApi = await axiosClient.post(`${url}${type}/create`, body)

        if (resApi && resApi.notify)
            return {
                success: true
            }
        return {
            success: false
        }
    } catch (err) {
        console.log(err)
        return {
            success: false
        }
    }
}
const updateProduct = async (type, body) => {
    try {
        const resApi = await axiosClient.post(`${url}${type}/update`, body)

        if (resApi && resApi.notify)
            return {
                success: true
            }
        return {
            success: false
        }
    } catch (err) {
        console.log(err)
        return {
            success: false
        }
    }
}

const productApi = {
    getSpecList,
    getProducts,
    getProduct,
    createProduct,
    updateProduct
}
export default productApi
