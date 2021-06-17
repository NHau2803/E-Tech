import { isNotFound } from "Redux/Status/Status.reducer"
import { changeLoading } from "Redux/System/System.reducer"
import BillApi from "./BillAdmin.Api"
import { billsSuccess } from "./BillAdmin.reducer"
export const getBillListApi = () => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await BillApi.getBillList()
        if (resApi.success) {
            dispatch(billsSuccess(resApi.data))
        } else {
            dispatch(isNotFound(true))
        }
        dispatch(changeLoading(false))
    } catch (err) {
        dispatch(isNotFound(true))
        dispatch(changeLoading(false))
    }
}

export const changeStatusBillApi = (billId, status) => async dispatch => {
    try {
        dispatch(changeLoading(true))
        const resApi = await BillApi.changeStatusBill(billId, status)
        if (resApi.success) {
            dispatch(changeLoading(false))
            return {
                type: "success",
                title: "Đổi trạng thái thành công!",
                message: "Đơn hàng đã được đổi trạng thái"
            }
        } else {
            dispatch(changeLoading(false))
            return {
                type: "error",
                title: "Đổi trạng thái thất bại!",
                message: "Đơn hàng chưa được đổi trạng thái"
            }
        }
    } catch (err) {
        dispatch(changeLoading(false))
        return {
            type: "error",
            title: "Đổi trạng thái thất bại!",
            message: "Đơn hàng chưa được đổi trạng thái"
        }
    }
}
