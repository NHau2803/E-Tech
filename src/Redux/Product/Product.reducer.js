import { createSlice } from "@reduxjs/toolkit"
import { TYPE_FILTER_PRICE } from "Constants/Data"

const slice = createSlice({
    name: "product",

    initialState: {
        products: [],
        productsFilter: {},
        productDetail: {},
        filters: {},
        cur_page: null,
        max_page: null,
        priceFrom: 0,
        priceTo: 100000000
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
            state.cur_page = action.payload.cur_page
            state.max_page = action.payload.max_page
        },
        productsFilterFail: (state, action) => {
            state.productsFilter = null
            state.filters = null
            state.cur_page = null
            state.max_page = null
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
        changeCurPageFilter(state, action) {
            state.cur_page = action.payload.cur_page
        },
        changePriceFilter(state, action) {
            state.priceFrom = action.payload.priceFrom
            state.priceTo = action.payload.priceTo
        },
        sortPrice(state, action) {
            if (
                state.productsFilter &&
                action.payload.type === TYPE_FILTER_PRICE.INCREASE
            ) {
                state.productsFilter =
                    state.productsFilter &&
                    state.productsFilter.sort((a, b) =>
                        a.price > b.price ? 1 : -1
                    )
            }
            if (
                state.productsFilter &&
                action.payload.type === TYPE_FILTER_PRICE.REDUCED
            ) {
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
    sortPrice,
    changeCurPageFilter,
    changePriceFilter
} = slice.actions
