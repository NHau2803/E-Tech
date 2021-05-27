/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getAuthCookie } from "Redux/User/User.thunk"

const Authentication = (SpecificComponent, option, adminRoute = null) => {
    function AuthenticationCheck(props) {
        const account = useSelector(state => state.UserReducer.user)
        const dispatch = useDispatch()
        const history = useHistory()

        const fetchAuth = async () => {
            const res = await dispatch(getAuthCookie())
            console.log(
                "🚀 ~ file: BaseAuth.js ~ line 16 ~ fetchAuth ~ res",
                res
            )
            if (res && !res.isLogin) {
                //true => bat dang nhap
                console.log("!isLogin")
                if (option) {
                    history.push("/dang-nhap")
                }
            } else {
                console.log("isLogin")
                if (adminRoute && res && !res.isAdmin) {
                    //Kiểm tra khong phai admin
                    history.push("/etech")
                } else {
                    if (option === false) {
                        history.push("/etech")
                    }
                }
            }
        }
        useEffect(() => {
            fetchAuth()
            //To know my current status, send Auth request
        }, [])
        //Đã có login
        return <SpecificComponent {...props} />
    }
    return AuthenticationCheck
}
export default Authentication
