import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "system",

    initialState: {
        loading: false
    },

    reducers: {
        changeLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export default slice.reducer

// Actions

export const { changeLoading } = slice.actions
