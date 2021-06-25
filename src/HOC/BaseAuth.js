/* eslint-disable react-hooks/exhaustive-deps */
import { notification } from "antd"
import { PATH } from "Constants/Path"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getAuthCookie } from "Redux/User/User.thunk"

const Authentication = (SpecificComponent, option, adminRoute = null) => {
    function AuthenticationCheck(props) {
        // const account = useSelector(state => state.UserReducer.user)
        const dispatch = useDispatch()
        const history = useHistory()

        const fetchAuth = async () => {
            const res = await dispatch(getAuthCookie())

            if (res && !res.isLogin) {
                //true => LOGIN
                if (option) {
                    history.push(PATH.LOGIN)
                }
            } else {
                if (adminRoute && res && !res.isAdmin) {
                    //NOT ADMIN
                    history.push(PATH.HOME)
                }
                if (
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    )
                ) {
                    console.log("MOBILE")
                    //MOBILE NOT ACCESS
                    notification.warning({
                        message: "Thông báo",
                        description:
                            "Bạn không nên truy cập trang quản trị bằng điện thoại"
                    })
                    history.push(PATH.HOME)
                } else {
                    if (option === false) {
                        history.push(PATH.HOME)
                    }
                }
            }
        }
        useEffect(() => {
            fetchAuth()
            //To know my current status, send Auth request
        }, [])
        //Is login
        return <SpecificComponent {...props} />
    }
    return AuthenticationCheck
}
export default Authentication
