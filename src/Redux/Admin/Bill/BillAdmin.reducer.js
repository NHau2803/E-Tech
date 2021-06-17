import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "bill_admin",

    initialState: {
        bills: [],
        billsFilter: []
    },

    reducers: {
        billsSuccess: (state, action) => {
            state.bills = action.payload
            state.billsFilter = action.payload
        },
        billsFail: (state, action) => {
            state.bills = null
            state.billsFilter = null
        },
        handleSearchByName: (state, action) => {
            state.billsFilter = state.bills.filter(item =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            )
        }
    }
})

export default slice.reducer

// Actions

export const { billsSuccess, billsFail, handleSearchByName } = slice.actions
