import { Layout, Menu } from "antd"
import { MENU } from "Constants/List"
import { Link } from "react-router-dom"
const { Sider } = Layout

const DashboardComponent = props => {
    const { toggle } = props

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
                <Link to="/etech" style={{ color: "white" }}>
                    ETech
                </Link>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                // defaultSelectedKeys={["0"]}
                // selectedKeys={[selectedKey]}
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
