import axios from "axios"

const axiosClient = axios.create({})

// axiosClient.interceptors.request.use(async config => {
//     //function get token from local
//     return config
// })

// For GET requests
axios.interceptors.request.use(
    req => {
        // Add configurations here
        return req
    },
    err => {
        return Promise.reject(err)
    }
)

axiosClient.interceptors.response.use(
    res => {
        if (res && res.data) {
            return res.data
        }
        if (res.status !== 200) {
            return res.message
        }
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
