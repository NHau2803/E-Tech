import { isNotFound, isSuccess } from "../Status/Status.reducer"
import { changeLoading } from "../System/System.reducer.js"
import ProductApi from "./Product.Api"
import {
    productDetailFail,
    productDetailSuccess,
    productsFail,
    productsFilterFail,
    productsFilterSuccess,
    productsSuccess
} from "./Product.reducer"
export const getProductsApi = () => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getProducts()
        if (resApi.success) {
            dispatch(productsSuccess(resApi.data))
            dispatch(isSuccess())
        } else {
            dispatch(productsFail(null))
            dispatch(isNotFound(true))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(productsFail(null))
        dispatch(isNotFound(true))
        dispatch(changeLoading(false))
    }
}
export const getProductsFilterApi = (type, body) => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getProductsFilter(type, body)
        if (resApi.success) {
            dispatch(productsFilterSuccess(resApi.data))
            dispatch(isSuccess())
        } else {
            dispatch(productsFilterFail(null))
            dispatch(isNotFound(true))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(productsFilterFail(null))
        dispatch(isNotFound(true))
        dispatch(changeLoading(false))
    }
}

export const getProductDetailApi = (
    productType,
    productId
) => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getProductDetail(productType, productId)
        if (resApi.success) {
            dispatch(productDetailSuccess(resApi.data))
            dispatch(changeLoading(false))
            return {
                success: true
            }
        } else {
            dispatch(productDetailFail({}))
            return {
                success: false
            }
        }
    } catch (err) {
        dispatch(productDetailFail({}))
        dispatch(changeLoading(false))
        return {
            success: false
        }
    }
}
