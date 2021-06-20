import {
    AuditOutlined,
    FieldTimeOutlined,
    FormOutlined,
    GlobalOutlined,
    MailOutlined,
    PhoneOutlined,
    PoweroffOutlined,
    UserOutlined
} from "@ant-design/icons"
import { Button, Card, Popconfirm } from "antd"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
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
        <>
            <BreadcrumbField list={["Admin", "Tài khoản của tôi"]} />
            <Card
                hoverable
                style={{ width: 400, margin: "auto" }}
                cover={
                    <img
                        alt="avatar"
                        src={
                            "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-avatar-vector-isolated-on-white-background-png-image_4979074.jpg"
                        }
                    />
                }
            >
                <div>
                    <UserOutlined />
                    &ensp;{account && account.name}
                </div>
                <div>
                    <AuditOutlined />
                    &ensp;{"Admin"}
                </div>

                <div>
                    <PhoneOutlined />
                    &ensp;{account && account.phone}
                </div>
                <div>
                    <MailOutlined />
                    &ensp;{account && account.email}
                </div>
                <div>
                    <GlobalOutlined />
                    &ensp;{account && account.address}
                </div>
                <div>
                    <FieldTimeOutlined />
                    &ensp;{account && account.createdAt}
                </div>
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button type="primary" icon={<FormOutlined />}>
                        Cập nhật tài khoản
                    </Button>
                    &ensp;
                    <Popconfirm
                        title="Bạn có muốn đăng xuất?"
                        onConfirm={() => logout()}
                        onCancel={() => ""}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="dashed" icon={<PoweroffOutlined />}>
                            Đăng xuất
                        </Button>
                    </Popconfirm>
                </div>
            </Card>
        </>
    )
}

export default MyAccount
