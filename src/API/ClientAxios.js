/* eslint-disable no-console */
import axios from "axios"
import Cookie from "js-cookie"
import queryString from "query-string"
const axiosClient = axios.create({
    baseURL: "http://54.254.245.18:8000",
    timeout: 15000,
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(
    config => {
        //Handle token here ...
        const token = Cookie.get("token")
        config.headers.authorization = `Bearer ${token}`

        return config
    },
    err => {
        console.log(err)
    }
)
axiosClient.interceptors.response.use(
    res => {
        console.log("🚀 ~ file: ClientAxios.js ~ line 30 ~ res", res)
        if (res && res.data) return res.data

        return res
    },
    err => {
        //Handle err
        console.log(err)
    }
)

export default axiosClient
