import { Layout, Menu } from "antd"
import { MENU } from "Constants/List"
import { Link } from "react-router-dom"
const { Sider } = Layout
const {
    LaptopOutlined,
    FormOutlined,
    BarChartOutlined,
    UserOutlined,
    HddOutlined,
    HomeOutlined,
    FundViewOutlined
} = require("@ant-design/icons")

const DashboardComponent = props => {
    const { toggle } = props
    const menu = [
        {
            id: 0,
            icon: <HomeOutlined />,
            name: "Home",
            link: "/admin/home"
        },
        {
            id: 1,
            icon: <LaptopOutlined />,
            name: "Laptop",
            link: "/admin/products/laptop"
        },
        {
            id: 2,
            icon: <HddOutlined />,
            name: "Drive",
            link: "/admin/products/drive"
        },
        {
            id: 3,
            icon: <FormOutlined />,
            name: "Thêm mới",
            link: "/admin/add"
        },
        {
            id: 4,
            icon: <BarChartOutlined />,
            name: "Statistic",
            link: "/admin/statistic"
        },
        {
            id: 5,
            icon: <FundViewOutlined />,
            name: "View Manager",
            link: "/admin/view-manager"
        },
        {
            id: 6,
            icon: <UserOutlined />,
            name: "My Account",
            link: "/admin/my-account"
        }
    ]

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
                {menu &&
                    menu.map((item, index) => {
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
