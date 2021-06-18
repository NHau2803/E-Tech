import { Layout, Menu } from "antd"
import Images from "Constants/Images"
import { MENU } from "Constants/List"
import { PATH } from "Constants/Path"
import { Link } from "react-router-dom"
const { Sider } = Layout
const {
    LaptopOutlined,
    FormOutlined,
    BarChartOutlined,
    UserOutlined,
    HddOutlined,
    HomeOutlined,
    FundViewOutlined,
    LinkOutlined
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
            name: "Ổ cứng",
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
            name: "Thống kê",
            link: "/admin/statistic"
        },
        {
            id: 5,
            icon: <FundViewOutlined />,
            name: "Quản lí đơn hàng",
            link: "/admin/view-manager"
        },
        {
            id: 6,
            icon: <UserOutlined />,
            name: "Tài khoản của tôi",
            link: "/admin/my-account"
        },
        {
            id: 7,
            icon: <LinkOutlined />,
            name: "Website ETech",
            link: PATH.HOME
        }
    ]

    return (
        <Sider collapsed={toggle}>
            {/* <div
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
            </div> */}
            <img alt="Logo" src={Images.Logo_Admin} width={"100%"}></img>
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
