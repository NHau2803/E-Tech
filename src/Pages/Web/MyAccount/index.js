import { FormOutlined } from "@ant-design/icons"
import { Card, notification } from "antd"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import { PATH } from "Constants/Path"
import Cookie from "js-cookie"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { logoutUser } from "Redux/User/User.thunk"
const MyAccount = () => {
    const [account, setAccount] = useState(Cookie.getJSON("account") || {})

    const dispatch = useDispatch()
    const history = useHistory()
    const logout = () => {
        dispatch(logoutUser())
        history.push(PATH.HOME)
    }

    return (
        <div>
            <BreadcrumbComponent pageName={"Tài khoản của tôi"} />
            <div
                className="container"
                style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Card
                    hoverable
                    style={{ width: 220 }}
                    cover={
                        <img
                            alt="avatar"
                            src={
                                "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-avatar-vector-isolated-on-white-background-png-image_4979074.jpg"
                            }
                        />
                    }
                ></Card>
                <div style={{ marginLeft: "15px" }}>
                    <h4>
                        Tài khoản: &ensp;
                        {account && account.name}
                    </h4>
                    <h4>Số điện thoại: &ensp;{account && account.phone}</h4>
                    <h4>Email: &ensp;{account && account.email}</h4>
                    <h4>Địa chỉ: &ensp;{account && account.address}</h4>
                    <br />
                    <div>
                        {/* <Button type="primary" icon={<FormOutlined />}>
                           
                        </Button> */}
                        <button
                            className="primary-btn"
                            onClick={() =>
                                notification.warning({
                                    message: "Thông báo",
                                    description: "Tính năng đang cập nhật"
                                })
                            }
                        >
                            <FormOutlined /> Cập nhật tài khoản
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
