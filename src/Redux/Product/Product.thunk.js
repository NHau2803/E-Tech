import { productsSuccess, productsFail } from "./Product.reducer"
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
