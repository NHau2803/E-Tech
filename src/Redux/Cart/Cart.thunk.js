import { getCartsSuccess, getCartsFail } from "./Cart.reducer"
import CartApi from "./Cart.Api"
import { changeLoading } from "../System/System.reducer.js"
import { notification } from "antd"
import { getLS, setLS } from "Utils/Converter"
export const getCartApi = () => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await CartApi.getCarts
        if (resApi.success) {
            dispatch(getCartsSuccess(resApi.data))
        } else {
            dispatch(getCartsFail([]))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(getCartsFail([]))
        dispatch(changeLoading(false))
    }
}

export const saveCartApi = body => async dispatch => {
    const resApi = await CartApi.saveCarts(body)
    if (resApi.notify && resApi.notify) {
        dispatch(CartApi.getCarts)
        notification["success"]({
            message: "Cảm ơn",
            description: "Bạn đã đặt hàng thành công!"
        })
    } else {
        dispatch(getCartsFail())
    }
    dispatch(changeLoading(false))
}

export const getCartLS = () => async dispatch => {
    const data = getLS("carts")
    console.log("🚀 ~ file: Cart.thunk.js ~ line 38 ~ data", data)
    dispatch(getCartsSuccess(data))
}

// update status
export const setCartLS = body => async dispatch => {
    setLS("carts", body)
    dispatch(getCartLS())
}
