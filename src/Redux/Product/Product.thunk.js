import {
    productsSuccess,
    productsFail,
    productDetailSuccess,
    productDetailFail
} from "./Product.reducer"
import ProductApi from "./Product.Api"
import { changeLoading } from "../System/System.reducer.js"
export const getProductApi = () => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await ProductApi.getProducts()
        if (resApi.success) {
            dispatch(productsSuccess(resApi.data))
        } else {
            dispatch(productsFail([]))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(productsFail([]))
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
        console.log("🚀 ~ file: Product.thunk.js ~ line 31 ~ resApi", resApi)
        if (resApi.success) {
            dispatch(productDetailSuccess(resApi.data))
        } else {
            dispatch(productDetailFail({}))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(productDetailFail({}))
        dispatch(changeLoading(false))
    }
}
