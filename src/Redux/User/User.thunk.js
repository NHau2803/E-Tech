import { loginSuccess, logoutSuccess, getAuth } from "./User.reducer"
import UserApi from "./User.Api"
import Cookies from "js-cookie"
export const login = body => async dispatch => {
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const resLogin = await UserApi.login(body)
        console.log("🚀 ~ file: User.thunk.js ~ line 8 ~ resLogin", resLogin)

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
        console.log("🚀 ~ file: User.thunk.js ~ line 27 ~ resSignup", resSignup)

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
        console.log(
            "🚀 ~ file: User.thunk.js ~ line 59 ~ data",
            data !== undefined
        )
        if (data) {
            console.log("🚀 ~ file: User.thunk.js ~ line 61 ~ data", data)

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
        console.log("🚀 ~ file: User.thunk.js ~ line 97 ~ data", data)
        dispatch(loginSuccess(data))
    }
}
