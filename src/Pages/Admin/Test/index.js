import { Layout, Menu } from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LaptopOutlined,
    FormOutlined
} from "@ant-design/icons"
import React, { useState } from "react"
import "./Test.css"
import DossierData from "../Dossier"
import AddEditPage from "../AddEdit"
import { Link } from "react-router-dom"
const { Header, Sider, Content } = Layout

const arrMenu = [
    {
        icon: <LaptopOutlined />,
        name: "Quản lí Laptop",
        link: "/admin"
    },
    // {
    //     icon: <BarChartOutlined />,
    //     name: "Statistic",
    //     link: "/admin/statistic"
    // },
    // {
    //     icon: <UserOutlined />,
    //     name: "User",
    //     link: "/admin/user"
    // },
    {
        icon: <FormOutlined />,
        name: "Thêm mới sản phẩm",
        link: "/admin"
    }
]

const Test = () => {
    const [toggle, setToggle] = useState(false)
    const [menu, setMenu] = useState(arrMenu)

    return (
        <Layout>
            <Sider collapsed={toggle} onCollapse={() => setToggle(!toggle)}>
                <div
                    className="logo"
                    style={{
                        backgroundColor: "#33c9dc",
                        width: "100%",
                        height: "64px",
                        color: "white",
                        textAlign: "center",
                        fontSize: "20px"
                    }}
                >
                    E-Tech
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    {menu.map((element, index) => {
                        return (
                            <Menu.Item key={index} icon={element.icon}>
                                <Link to={element.link}>{element.name}</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        toggle ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setToggle(!toggle)
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280
                    }}
                >
                    <AddEditPage />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Test
