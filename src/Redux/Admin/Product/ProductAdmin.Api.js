import axiosClient from "API/ClientAxios"

const url = "api/admin/products/"
const getSpecList = async () => {
    try {
        const resApi = await axiosClient.get(`${url}spec_list`)
        console.log(
            "🚀 ~ file: Product.Api.js ~ line 7 ~ getSpecList ~ resApi",
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
const getProducts = async type => {
    try {
        const resApi = await axiosClient.get(`${url}${type}/index`)
        console.log(
            "🚀 ~ file: ProductAdmin.Api.js ~ line 32 ~ getProducts ~ resApi",
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
const getProduct = async (type, id) => {
    try {
        const resApi = await axiosClient.get(`${url}${type}/update/${id}`)
        console.log(
            "🚀 ~ file: ProductAdmin.Api.js ~ line 32 ~ getProducts ~ resApi",
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
const createProduct = async (type, body) => {
    try {
        const resApi = await axiosClient.post(`${url}${type}/create`, body)
        console.log(
            "🚀 ~ file: ProductAdmin.Api.js ~ line 57 ~ createProduct ~ resApi",
            resApi
        )

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
        console.log(
            "🚀 ~ file: ProductAdmin.Api.js ~ line 104 ~ updateProduct ~ resApi",
            resApi
        )

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
