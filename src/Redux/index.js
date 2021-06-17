import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import UserReducer from "./User/User.reducer"
import ProductReducer from "./Product/Product.reducer"
import ProductAdminReducer from "./Admin/Product/ProductAdmin.reducer"
import SystemReducer from "./System/System.reducer"
import CartReducer from "./Cart/Cart.reducer"
import StatusReducer from "./Status/Status.reducer"
import NotifyReducer from "./Notify/Notify.reducer"
import BillReducer from "./Admin/Bill/BillAdmin.reducer"
const reducer = combineReducers({
    UserReducer,
    ProductReducer,
    SystemReducer,
    CartReducer,
    StatusReducer,
    ProductAdminReducer,
    NotifyReducer,
    BillReducer
    // here we will be adding reducers
})
const store = configureStore({
    reducer
})
export default store
