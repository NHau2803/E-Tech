import Cookies from "js-cookie"
import UserApi from "./User.Api"
import { getAuth, loginSuccess, logoutSuccess } from "./User.reducer"
export const login = body => async dispatch => {
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const resLogin = await UserApi.login(body)

        if (resLogin.success) {
            Cookies.set("token", resLogin.data.token)
            Cookies.set("account", resLogin.data.info)
            Cookies.set("admin", resLogin.data.info.admin)
            dispatch(loginSuccess(resLogin.data.info))
            return true
        }
        return false
    } catch (e) {
        return false
    }
}

export const signup = body => async dispatch => {
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const resSignup = await UserApi.signup(body)

        return resSignup
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

export const getAuthCookie = () => async dispatch => {
    try {
        const data = Cookies.getJSON("account")

        if (data) {
            return {
                isLogin: true,
                isAdmin: data.admin === 1
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

export const getUserCookie = () => async dispatch => {
    const data = Cookies.getJSON("account")
    if (data) {
        dispatch(loginSuccess(data))
    }
}
