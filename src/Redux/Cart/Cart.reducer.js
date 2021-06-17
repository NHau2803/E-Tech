import { setLS } from "Utils/Converter"

const { createSlice } = require("@reduxjs/toolkit")

const slice = createSlice({
    name: "carts",
    initialState: {
        carts: [],
        totalPrice: 0,
        totalPriceBill: 0
    },
    reducers: {
        getCartsSuccess: (state, action) => {
            state.carts = action.payload
        },
        getCartsFail: (state, action) => {
            state.carts = []
            state.totalPrice = 0
            state.totalPriceBill = 0
        },
        getTotalPriceSuccess: (state, action) => {
            state.totalPrice = 0
            state.carts &&
                state.carts.map(item => (state.totalPrice += item.price))
        },
        getTotalPriceBillSuccess: (state, action) => {
            state.totalPriceBill = 0
            state.carts &&
                state.carts.map(
                    item => (state.totalPriceBill += item.price * item.qty)
                )
        },
        changeQty: (state, action) => {
            state.carts =
                state.carts &&
                state.carts.map(item => {
                    if (item.id === +action.payload.id) {
                        item.qty = +action.payload.e
                    }
                    return item
                })
            setLS("carts", state.carts)
        },
        addCart: (state, action) => {
            if (
                !state.carts.some(item => {
                    return item.id === action.payload.id
                })
            ) {
                state.carts.push(action.payload)
                state.totalPrice = 0
                state.carts &&
                    state.carts.map(item => (state.totalPrice += item.price))
                setLS("carts", state.carts)
            }
        }
    }
})

export default slice.reducer
export const {
    getCartsSuccess,
    getCartsFail,
    getTotalPriceSuccess,
    getTotalPriceBillSuccess,
    changeQty,
    addCart
} = slice.actions
