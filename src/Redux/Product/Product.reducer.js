import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "product",

    initialState: {
        products: [],
        productDetail: {},
        is404: false
    },

    reducers: {
        productsSuccess: (state, action) => {
            state.is404 = false
            state.products = action.payload
        },
        productsFail: (state, action) => {
            state.is404 = true
            state.products = []
        },
        productDetailSuccess: (state, action) => {
            state.is404 = false
            state.productDetail = action.payload
        },
        productDetailFail: (state, action) => {
            state.is404 = true
            state.productDetail = {}
        }
    }
})

export default slice.reducer

// Actions

export const {
    productsSuccess,
    productsFail,
    productDetailSuccess,
    productDetailFail
} = slice.actions
