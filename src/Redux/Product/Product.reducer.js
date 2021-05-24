import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "product",

    initialState: {
        products: []
    },

    reducers: {
        productsSuccess: (state, action) => {
            state.products = action.payload
        },
        productsFail: (state, action) => {
            state.products = []
        }
    }
})

export default slice.reducer

// Actions

export const { productsSuccess, productsFail } = slice.actions
