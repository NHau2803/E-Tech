import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "notify",

    initialState: {
        type: "",
        title: "",
        message: ""
    },

    reducers: {
        setNotifySuccess: (state, action) => {
            state.type = "success"
            state.title = action.payload.title
            state.message = action.payload.message
        },
        setNotifyFail: (state, action) => {
            state.type = "error"
            state.title = action.payload.title
            state.message = action.payload.message
        }
    }
})

export default slice.reducer

// Actions

export const { setNotifySuccess, setNotifyFail } = slice.actions
