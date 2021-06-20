import { isNotFound, isSuccess } from "../../Status/Status.reducer"
import { changeLoading } from "../../System/System.reducer.js"
import ProductApi from "./ProductAdmin.Api"
import {
    filterAllFail,
    filterAllSuccess,
    filtersFail,
    filtersSuccess,
    productsFail,
    productsSuccess,
    productUpdatingFail
} from "./ProductAdmin.reducer"
export const getSpecListApi = () => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getSpecList()
        if (resApi.success) {
            dispatch(filterAllSuccess(resApi.data))
            dispatch(isSuccess())
        } else {
            dispatch(filterAllFail(null))
            dispatch(isNotFound(true))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(filterAllFail(null))
        dispatch(isNotFound(true))
        dispatch(changeLoading(false))
    }
}
export const getProductsApi = type => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getProducts(type)

        if (resApi.success) {
            dispatch(productsSuccess(resApi.data.data))
            dispatch(filtersSuccess(resApi.data.filter))
            dispatch(isSuccess())
        } else {
            dispatch(productsFail(null))
            dispatch(filtersFail(null))
            dispatch(isNotFound(true))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(productsFail(null))
        dispatch(filtersFail(null))
        dispatch(isNotFound(true))
        dispatch(changeLoading(false))
    }
}
export const getProductApi = (type, id) => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getProduct(type, id)

        if (resApi.success) {
            dispatch(changeLoading(false))
            dispatch(isSuccess())
            return {
                info: resApi.data.info,
                spec: resApi.data.spec,
                image: resApi.data.image
            }
        } else {
            dispatch(productUpdatingFail(null))
            dispatch(isNotFound(true))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(productUpdatingFail(null))
        dispatch(isNotFound(true))
        dispatch(changeLoading(false))
    }
}
export const createProductsApi = (type, body) => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.createProduct(type, body)

        if (resApi.success) {
            dispatch(changeLoading(false))
            return {
                type: "success",
                title: "Thêm thành công!",
                message: "Sản phẩm đã được thêm"
            }
        } else {
            dispatch(changeLoading(false))
            return {
                type: "error",
                title: "Thêm thất bại!",
                message: "Sản phẩm chưa được thêm"
            }
        }
    } catch (err) {
        console.log(err)
        dispatch(changeLoading(false))
        return {
            type: "error",
            title: "Thêm thất bại!",
            message: "Sản phẩm chưa được thêm"
        }
    }
}

export const updateProductsApi = (type, body) => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.updateProduct(type, body)

        if (resApi.success) {
            dispatch(changeLoading(false))
            return {
                type: "success",
                title: "Cập nhật thành công!",
                message: "Sản phẩm đã được cập nhật"
            }
        } else {
            dispatch(changeLoading(false))
            return {
                type: "error",
                title: "Cập nhật thất bại!",
                message: "Sản phẩm chưa được cập nhật"
            }
        }
    } catch (err) {
        console.log(err)
        dispatch(changeLoading(false))
        return {
            type: "error",
            title: "Cập nhật thất bại!",
            message: "Sản phẩm chưa được cập nhật"
        }
    }
}
