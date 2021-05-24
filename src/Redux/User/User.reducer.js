import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "user",

    initialState: {
        user: null
    },

    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },

        logoutSuccess: (state, action) => {
            state.user = null
        },
        getAuth: (state, action) => {
            state.user = action.payload
        }
    }
})

export default slice.reducer

// Actions

export const { loginSuccess, logoutSuccess, getAuth } = slice.actions
