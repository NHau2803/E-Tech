import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "status",

    initialState: {
        isNotFound: false,
        isServerProblem: false
    },

    reducers: {
        isSuccess: (state, action) => {
            state.isNotFound = false
            state.isServerProblem = false
        },
        isNotFound: (state, action) => {
            state.isNotFound = action.payload
        },
        isServerProblem: (state, action) => {
            console.log(action.payload)
            state.isServerProblem = action.payload
        }
    }
})

export default slice.reducer

// Actions

export const { isSuccess, isNotFound, isServerProblem } = slice.actions
