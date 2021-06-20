import axiosClient from "../../API/ClientAxios"

const url = "api/"

const login = async body => {
    try {
        const resApi = await axiosClient.post(`${url}login`, body)

        if (resApi && resApi.info)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: {}
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: {}
        }
    }
}

const signup = async body => {
    try {
        const resApi = await axiosClient.post(`${url}register`, body)

        if (resApi && resApi.success)
            return {
                success: true,
                data: resApi
            }
        return {
            success: false,
            data: resApi
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: {}
        }
    }
}

const getAuth = async () => {
    try {
        const resApi = await axiosClient.post(`${url}getAuth`)
        if (resApi && resApi.info)
            return {
                success: true,
                data: resApi //info
            }
        return {
            success: false,
            data: {}
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            data: {}
        }
    }
}

const UserApi = {
    login,
    signup
}
export default UserApi
