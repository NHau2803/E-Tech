import { FormOutlined, LaptopOutlined } from "@ant-design/icons"
import { Menu, Layout } from "antd"
import { MENU } from "Constants/List"
import { useState } from "react"
import { Link } from "react-router-dom"
const { Sider } = Layout

const DashboardComponent = props => {
    const { toggle, selectedKey } = props

    return (
        <Sider collapsed={toggle}>
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
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["0"]}
                selectedKeys={[selectedKey]}
                style={{ height: "690px" }}
            >
                {MENU.map((item, index) => {
                    return (
                        <Menu.Item key={index} icon={item.icon}>
                            <Link to={item.link}>{item.name}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    )
}

export default DashboardComponent
