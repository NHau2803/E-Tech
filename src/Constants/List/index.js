const {
    LaptopOutlined,
    FormOutlined,
    BarChartOutlined,
    UserOutlined
} = require("@ant-design/icons")

export const MENU = [
    {
        id: 0,
        icon: <LaptopOutlined />,
        name: "Laptop",
        link: "/admin/laptops"
    },
    {
        id: 1,
        icon: <FormOutlined />,
        name: "Thêm mới",
        link: "/admin/add"
    },
    {
        id: 2,
        icon: <BarChartOutlined />,
        name: "Statistic",
        link: "/admin/statistic"
    },
    {
        id: 3,
        icon: <UserOutlined />,
        name: "User",
        link: "/admin/user"
    }
]
