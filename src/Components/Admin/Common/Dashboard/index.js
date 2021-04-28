import { FormOutlined, LaptopOutlined } from "@ant-design/icons"
import { Menu, Layout } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
const { Sider } = Layout
const arrMenu = [
    {
        icon: <LaptopOutlined />,
        name: "Laptop",
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
        name: "Add New",
        link: "/admin"
    }
]
const DashboardComponent = () => {
    const [menu, setMenu] = useState(arrMenu)
    const [onCollapse, setOnCollapse] = useState(true)
    const collapsed = () => {
        setOnCollapse(!onCollapse)
    }
    return (
        <Sider
            collapsible
            collapsed={() => onCollapse}
            onCollapse={collapsed}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0
            }}
        >
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                {menu.map((element, index) => {
                    return (
                        <Menu.Item key={index} icon={element.icon}>
                            <Link to={element.link}>{element.name}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    )
}

export default DashboardComponent
