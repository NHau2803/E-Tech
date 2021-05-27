import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
const slice = createSlice({
    name: "user",

    initialState: {
        user: null,
        admin: 0
    },

    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            state.admin = action.payload.admin
        },
        logoutSuccess: (state, action) => {
            state.user = null
            state.admin = 0
            Cookies.remove("account")
            Cookies.remove("admin")
        },
        getAuth: (state, action) => {
            state.user = action.payload
            state.admin = action.payload.admin
        }
    }
})

export default slice.reducer

// Actions

export const { loginSuccess, logoutSuccess, getAuth } = slice.actions
