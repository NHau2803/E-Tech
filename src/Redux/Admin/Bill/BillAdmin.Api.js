import axiosClient from "API/ClientAxios"

const url = "api/"
const getBillList = async () => {
    try {
        const resApi = await axiosClient.get(`${url}admin/orders`)

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
const changeStatusBill = async (billId, status) => {
    try {
        const resApi = await axiosClient.get(
            `${url}admin/orderStat/order_id/${billId}/stat/${status}`
        )

        if (resApi)
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

const billApi = {
    getBillList,
    changeStatusBill
}
export default billApi
