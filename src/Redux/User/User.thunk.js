import { loginSuccess, logoutSuccess, getAuth } from "./User.reducer"
import UserApi from "./User.Api"
import Cookies from "js-cookie"
export const login = ({ email, password }) => async dispatch => {
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const resLogin = await UserApi.login({ email, password })
        console.log(
            `LHA:  ===> file: User.thunk.js ===> line 8 ===> resLogin`,
            resLogin
        )
        if (resLogin.success) {
            Cookies.set("token", resLogin.data.token)
            dispatch(loginSuccess(resLogin.data.info))
            return true
        }
        return false
    } catch (e) {
        return false
    }
}

export const getAuthApi = () => async dispatch => {
    try {
        // const res={
        //   infor:{name:"My name is Admin"
        //   password:"My name is Admin"
        //   email:"admin@etech.com"
        //   phone:"0926753559"
        //   address:"uMeCtvDMc4zMVEZDWSEJJ2gjNzINK4"
        //   admin:1}
        // }
        // const res = await api.post('/api/auth/login/', { username, password })
        const resAuth = await UserApi.getAuth()
        if (resAuth) {
            dispatch(getAuth())
            return {
                isLogin: true,
                isAdmin: resAuth.info.isAdmin
            }
        }
        return {
            isLogin: false,
            isAdmin: null
        }
    } catch (e) {
        return {
            isLogin: false,
            isAdmin: null
        }
    }
}

export const logoutUser = () => async dispatch => {
    try {
        // const res = await api.post('/api/auth/logout/')
        Cookies.remove("token")
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message)
    }
}
