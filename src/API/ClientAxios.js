import axios from "axios"
import queryString from "query-string"

const axiosClient = axios.create({
    baseURL: `${process.env.BASE_API}:${process.env.PORT}`,
    timeout: 2000,
    headers: { "content-type": "application/json" },
    paramsSerializer: param => queryString.stringifyUrl(param)
})

axiosClient.interceptors.request.use(async config => {
    //function get token from local
    return config
})

axiosClient.interceptors.response.use(
    res => {
        if (res && res.data) return res.data
        return res
    },
    err => {
        //function err
        //Page 404
        // eslint-disable-next-line no-console
        console.error(err)
    }
)
export default axiosClient
