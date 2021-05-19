import {
    DeleteOutlined,
    FileSearchOutlined,
    FormOutlined,
    ReloadOutlined
} from "@ant-design/icons"
import { Button, Form, Layout, notification, Space, Table } from "antd"
import Search from "antd/lib/input/Search"
import HardDriveAPI from "API/HardDrive"
import LaptopAPI from "API/Laptop"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import MessageField from "Components/Admin/CustomFields/Message"
import { useEffect, useState } from "react"
import { Link, useParams, useRouteMatch } from "react-router-dom"

const { Content } = Layout

const DossierData = () => {
    const { productType } = useParams()
    console.log(
        "🚀 ~ file: index.js ~ line 29 ~ DossierData ~ productType",
        productType
    )
    const [form] = Form.useForm()
    const [data, setData] = useState([])
    const [dataFilter, setDataFilter] = useState([])
    const [filters, setFilters] = useState([])
    const [value, setValue] = useState("")

    const match = useRouteMatch()

    useEffect(() => {
        setDataFilter([])
        setData([])
        if (productType === "laptops") {
            LaptopAPI.getList().then(res => {
                console.log(res)
                setData(res.data)
                setDataFilter(res.data)
                setFilters(res.filter)
            })
        }
        if (productType === "drives") {
            HardDriveAPI.getList().then(res => {
                console.log(res)
                setData(res.data)
                setDataFilter(res.data)
                setFilters(res.filter)
            })
        }
    }, [productType])

    // ---------------------even---------------------

    const handleDelete = key => {
        //Call api delete data
        console.log(key)
        return <MessageField />
    }

    // const onSearch = value => {
    //     console.log(
    //         "🚀 ~ file: index.js ~ line 65 ~ DossierData ~ value",
    //         value
    //     )
    //     console.log(data.filter(item => item.name === value))
    // }
    // ---------------------table---------------------
    const columnsLaptop = [
        {
            id: 1,
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: "12%"
        },
        {
            id: 2,
            title: "Hãng",
            dataIndex: "brand",
            filters: filters.Brand,
            onFilter: (value, record) => record.brand.includes(value),
            width: "8%"
        },
        {
            id: 3,
            title: "Vi xử lí",
            dataIndex: "cpu",
            filters: filters.Cpu,
            onFilter: (value, record) => record.cpu.includes(value),
            width: "15%"
        },
        {
            id: 4,
            title: "Ram",
            dataIndex: "ram",
            filters: filters.Ram,
            onFilter: (id, record) => record.ram.includes(id),
            width: "12%"
        },
        {
            id: 5,
            title: "Lưu trữ",
            dataIndex: "rom",
            filters: filters.Rom,
            width: "15%"
        },
        {
            id: 6,
            title: "Mô tả sản phẩm",
            dataIndex: "description"
            // with: "10%"
        },
        {
            id: 7,
            title: "Chức năng",
            dataIndex: "action",
            width: "12%",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link
                        to={`${match.url.slice(0, -1)}/${record.id}`}
                        key={record.id}
                    >
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button icon={<FileSearchOutlined />} disabled></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={any => handleDelete}
                            disabled
                        />
                    </Link>
                </Space>
            )
        }
    ]
    const columnsDrive = [
        {
            id: 1,
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: "12%"
        },
        {
            id: 2,
            title: "Hãng",
            dataIndex: "brand",
            filters: filters.Brand,
            onFilter: (value, record) => record.brand.includes(value),
            width: "10%"
        },

        {
            id: 3,
            title: "Loại ổ cứng",
            dataIndex: "type",
            filters: filters.type,
            onFilter: (id, record) => record.type.includes(id),
            width: "10%"
        },
        {
            id: 4,
            title: "Dung lượng",
            dataIndex: "capacity",
            filters: filters.capacity,
            onFilter: (id, record) => record.capacity.includes(id),
            width: "10%"
        },
        {
            id: 5,
            title: "Mô tả sản phẩm",
            dataIndex: "description"
            // with: "10%"
        },
        {
            id: 6,
            title: "Chức năng",
            dataIndex: "action",
            width: "12%",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link
                        to={`${match.url.slice(0, -1)}/${record.id}`}
                        key={record.id}
                    >
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button icon={<FileSearchOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={any => handleDelete}
                        />
                    </Link>
                </Space>
            )
        }
    ]
    const onChange = (pagination, filters, sorter, extra) => {
        //console.log("params", pagination, filters, sorter, extra)
    }

    const openNotification = (title, message) => {
        notification.open({
            message: title,
            description: message,
            title
        })
    }

    return (
        <Layout className="site-layout">
            <BreadcrumbField list={["ADMIN", "LAPTOP"]} />
            <Content
                style={{
                    overflow: "initial"
                }}
            >
                <Button
                    type="primary"
                    style={{ marginBottom: 5, width: 80 }}
                    icon={<ReloadOutlined />}
                    onClick={() => openNotification()}
                />
                <Search
                    placeholder="Tìm kiếm tên sản phẩm"
                    style={{ width: 200, marginLeft: 5 }}
                    onChange={e => {
                        const currValue = e.target.value
                        setValue(currValue)
                        const filteredData = data.filter(item =>
                            item.name
                                .toLowerCase()
                                .includes(currValue.toLowerCase())
                        )
                        setDataFilter(filteredData)
                    }}
                />

                <Form form={form} component={false}>
                    <Table
                        bordered
                        dataSource={dataFilter}
                        columns={
                            productType === "laptops"
                                ? columnsLaptop
                                : productType === "drives"
                                ? columnsDrive
                                : []
                        }
                        onChange={onChange}
                        pagination={{
                            defaultPageSize: 10,
                            showSizeChanger: true,
                            pageSizeOptions: ["10", "20", "30"]
                        }}
                        scroll={{ y: 500 }}
                        // footer={() => "Footer"}
                    />
                </Form>
            </Content>
        </Layout>
    )
}
export default DossierData
