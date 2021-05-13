const {
    LaptopOutlined,
    FormOutlined,
    BarChartOutlined,
    UserOutlined,
    HddOutlined
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
        icon: <HddOutlined />,
        name: "Hard Drive",
        link: "/admin/hard-drives"
    },
    {
        id: 2,
        icon: <FormOutlined />,
        name: "Thêm mới",
        link: "/admin/add"
    },
    {
        id: 3,
        icon: <BarChartOutlined />,
        name: "Statistic",
        link: "/admin/statistic"
    },
    {
        id: 4,
        icon: <UserOutlined />,
        name: "User",
        link: "/admin/user"
    }
]
