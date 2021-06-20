/* eslint-disable react-hooks/exhaustive-deps */
import { PATH } from "Constants/Path"
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

            if (res && !res.isLogin) {
                //true => bat dang nhap
                if (option) {
                    history.push(PATH.LOGIN)
                }
            } else {
                if (adminRoute && res && !res.isAdmin) {
                    //Kiểm tra khong phai admin
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
        //Đã có login
        return <SpecificComponent {...props} />
    }
    return AuthenticationCheck
}
export default Authentication
