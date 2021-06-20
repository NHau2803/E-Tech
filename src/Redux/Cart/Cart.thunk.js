import { getLS, setLS } from "Utils/Converter"
import { changeLoading } from "../System/System.reducer.js"
import CartApi from "./Cart.Api"
import { getCartsFail, getCartsSuccess } from "./Cart.reducer"
// export const getCartApi = () => async dispatch => {
//     try {
//         dispatch(changeLoading(true))
//         const resApi = await CartApi.getCarts()
//         if (resApi.success) {
//             dispatch(getCartsSuccess(resApi.data))
//         } else {
//             dispatch(getCartsFail([]))
//         }
//         dispatch(changeLoading(false))
//     } catch (err) {
//         dispatch(getCartsFail([]))
//         dispatch(changeLoading(false))
//     }
// }
export const getBillsHistoryApi = () => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await CartApi.getBillsHistory()
        dispatch(changeLoading(false))
        if (resApi.success) {
            return resApi.data
        } else {
            return null
        }
    } catch (err) {
        dispatch(changeLoading(false))
        return null
    }
}

export const saveCartApi = body => async dispatch => {
    try {
        const resApi = await CartApi.saveCarts(body)
        if (resApi.success) {
            setLS("carts", [])
            dispatch(getCartsFail([]))

            return {
                success: true,
                status: "success",
                title: "Đặt hàng thành công",
                subTitle:
                    "Mã hóa đơn: xxxx, hệ thống sẽ phản hồi qua mail, Cảm ơn!"
            }
        }
        dispatch(changeLoading(false))
        return {
            success: false,
            status: "error",
            title: "Đặt hàng chưa thành công",
            subTitle:
                "Xin lỗi hệ thống đang gặp vấn đề, mời bạn quay lại sau vài phút!"
        }
    } catch (err) {
        dispatch(changeLoading(false))
        return {
            success: false,
            status: "error",
            title: "Đặt hàng chưa thành công",
            subTitle:
                "Xin lỗi hệ thống đang gặp vấn đề, mời bạn quay lại sau vài phút!"
        }
    }
}

export const getCartLS = () => async dispatch => {
    const data = getLS("carts")
    dispatch(getCartsSuccess(data))
}

// update status
export const setCartLS = body => async dispatch => {
    setLS("carts", body)
    dispatch(getCartLS())
}
