import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import UserReducer from "./User/User.reducer"
import ProductReducer from "./Product/Product.reducer"
import SystemReducer from "./System/System.reducer"
import CartReducer from "./Cart/Cart.reducer"
const reducer = combineReducers({
    UserReducer,
    ProductReducer,
    SystemReducer,
    CartReducer

    // here we will be adding reducers
})
const store = configureStore({
    reducer
})
export default store
