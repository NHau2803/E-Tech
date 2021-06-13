import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "admin_product",

    initialState: {
        products: [],
        productsFilter: [],
        productUpdating: null,
        filters: null,
        filterAll: null,
        productTypeIdForCreate: "",
        isSSDForCreateDrive: false
    },

    reducers: {
        productsSuccess: (state, action) => {
            state.products = action.payload
            state.productsFilter = action.payload
        },
        productsFail: (state, action) => {
            state.products = null
            state.productsFilter = null
        },
        productUpdatingSuccess: (state, action) => {
            state.productUpdating = action.payload
        },
        productUpdatingFail: (state, action) => {
            state.productUpdating = null
        },
        filtersSuccess: (state, action) => {
            state.filters = action.payload
        },
        filtersFail: (state, action) => {
            state.filters = null
        },
        handleSearchByName: (state, action) => {
            state.productsFilter = state.products.filter(item =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            )
        },
        filterAllSuccess: (state, action) => {
            state.filterAll = action.payload
        },
        filterAllFail: (state, action) => {
            state.filterAll = null
        },
        setProductTypeIdForCreate: (state, action) => {
            state.productTypeIdForCreate = action.payload
        },
        setIsSSDForCreateDrive: (state, action) => {
            state.isSSDForCreateDrive = action.payload
        }
    }
})

export default slice.reducer

// Actions

export const {
    productsSuccess,
    productsFail,
    productUpdatingSuccess,
    productUpdatingFail,
    filtersSuccess,
    filtersFail,
    filterAllSuccess,
    filterAllFail,
    handleSearchByName,
    setProductTypeIdForCreate,
    setIsSSDForCreateDrive
} = slice.actions
