import {
    productsSuccess,
    productsFail,
    productDetailSuccess,
    productDetailFail,
    productsFilterSuccess,
    productsFilterFail
} from "./Product.reducer"
import {
    isSuccess,
    isNotFound,
    isServerProblem
} from "../Status/Status.reducer"
import ProductApi from "./Product.Api"
import { changeLoading } from "../System/System.reducer.js"
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
        const resApi = await ProductApi.getProductsFilter(
            type,
            type === "laptop"
                ? body
                : {
                      drive_types: [],
                      drive_capacities: [],
                      brand_drive: [],
                      price: [250000, 3000000],
                      page: 1
                  }
        )
        console.log("🚀 ~ file: Product.thunk.js ~ line 50 ~ resApi", resApi)
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
        console.log("🚀 ~ file: Product.thunk.js ~ line 31 ~ resApi", resApi)
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
