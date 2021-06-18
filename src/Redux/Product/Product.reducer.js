import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "product",

    initialState: {
        products: [],
        productsFilter: {},
        productDetail: {},
        filters: {}
    },

    reducers: {
        productsSuccess: (state, action) => {
            state.products = action.payload
        },
        productsFail: (state, action) => {
            state.products = null
        },
        productDetailSuccess: (state, action) => {
            state.productDetail = action.payload
        },
        productDetailFail: (state, action) => {
            state.productDetail = null
        },
        productsFilterSuccess: (state, action) => {
            state.productsFilter = action.payload.data
            state.filters = action.payload.filter
        },
        productsFilterFail: (state, action) => {
            state.productsFilter = null
            state.filters = null
        },
        changeActiveFilter(state, action) {
            const type = action.payload.type
            const value = action.payload.value
            const filtersOld = state.filters
            const filtersNew =
                filtersOld &&
                filtersOld[type].map(item => {
                    if (
                        item.value === value ||
                        (type === "brands" && item.id === value)
                    )
                        item.active = !item.active
                    return item
                })
            filtersOld[type] = filtersNew
            // console.log("====================>", filtersOld.toString())
            state.filters = filtersOld
        },
        sortPrice(state, action) {
            if (state.productsFilter && action.payload.type === "INCREASE") {
                state.productsFilter =
                    state.productsFilter &&
                    state.productsFilter.sort((a, b) =>
                        a.price > b.price ? 1 : -1
                    )
            }
            if (state.productsFilter && action.payload.type === "REDUCED") {
                state.productsFilter =
                    state.productsFilter &&
                    state.productsFilter.sort((a, b) =>
                        a.price < b.price ? 1 : -1
                    )
            }
            // console.log("==================>", state.productsFilter.toString())
        }
    }
})

export default slice.reducer

// Actions

export const {
    productsSuccess,
    productsFail,
    productDetailSuccess,
    productDetailFail,
    productsFilterSuccess,
    productsFilterFail,
    changeActiveFilter,
    sortPrice
} = slice.actions
