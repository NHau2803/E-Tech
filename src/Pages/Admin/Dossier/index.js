import { DeleteOutlined, FormOutlined, ReloadOutlined } from "@ant-design/icons"
import {
    Button,
    Form,
    Layout,
    notification,
    Space,
    Table,
    Tag,
    Tooltip
} from "antd"
import Search from "antd/lib/input/Search"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import MessageField from "Components/Admin/CustomFields/Message"
import { TYPE_PRODUCT } from "Constants/Data"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams, useRouteMatch } from "react-router-dom"
import { handleSearchByName } from "Redux/Admin/Product/ProductAdmin.reducer"
import { getProductsApi } from "Redux/Admin/Product/ProductAdmin.thunk"
import { changePriceToVND } from "Utils/Converter"

const { Content } = Layout

const DossierData = () => {
    const { productType } = useParams()
    console.log(
        "🚀 ~ file: index.js ~ line 22 ~ DossierData ~ productType",
        productType
    )
    const [indexTable, setIndexTable] = useState(1)

    // const products = useSelector(state => state.ProductAdminReducer.products)
    const productsFilter = useSelector(
        state => state.ProductAdminReducer.productsFilter
    )
    console.log(
        "🚀 ~ file: index.js ~ line 33 ~ DossierData ~ productsFilter",
        productsFilter
    )
    const filters = useSelector(state => state.ProductAdminReducer.filters)
    console.log(
        "🚀 ~ file: index.js ~ line 31 ~ DossierData ~ filters",
        filters
    )

    const match = useRouteMatch()
    const dispatch = useDispatch()

    useEffect(() => {
        setIndexTable(indexTable + 1)
        dispatch(getProductsApi(productType))
    }, [productType])

    // ---------------------EVEN---------------------

    const openNotification = (title, message) => {
        notification.open({
            message: title,
            description: message,
            title
        })
    }

    const handleDelete = key => {
        console.log(key)
        return <MessageField />
    }
    const reloadData = () => {
        setIndexTable(indexTable + 1)
        dispatch(getProductsApi(productType))
    }

    // ---------------------COL---------------------
    const columnsLaptop = [
        {
            id: 1,
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: 220,
            fixed: "left"
        },
        {
            id: 10,
            title: "Ảnh",
            dataIndex: "image",
            render: image => <img alt="IMG" src={image} width="100%"></img>,
            width: 120,
            fixed: "left"
        },
        {
            id: 20,
            title: "Giá bán",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            render: price => changePriceToVND(price),
            width: 150
        },
        {
            id: 2,
            title: "Hãng",
            dataIndex: "brand",
            filters: filters && filters.Brand,
            onFilter: (value, record) => record.brand.includes(value),
            width: 100
        },
        {
            id: 3,
            title: "Vi xử lí",
            dataIndex: "cpu",
            filters: filters && filters.Cpu,
            onFilter: (value, record) =>
                record.cpu ? record.cpu.includes(value) : "",
            width: 180
        },
        {
            id: 4,
            title: "Ram",
            dataIndex: "ram",
            filters: filters && filters.Ram,
            onFilter: (value, record) => record.ram.includes(value),
            width: 180
        },
        {
            id: 5,
            title: "Lưu trữ",
            dataIndex: "rom",
            filters: filters && filters.Rom,
            onFilter: (value, record) => record.rom.includes(value),
            width: 180
        },
        {
            id: 6,
            title: "Mô tả sản phẩm",
            dataIndex: "description",
            with: 300,
            render: description => (
                <Tooltip
                    title={description.toUpperCase()}
                    color={"#8c8c8c"}
                    key={description}
                >
                    <Tag key={description}>
                        {description.length > 25
                            ? description.slice(0, 25).toUpperCase() + "..."
                            : description.toUpperCase()}
                    </Tag>
                </Tooltip>
            )
        },
        {
            id: 7,
            title: "Chức năng",
            dataIndex: "action",
            width: 120,
            align: "center",
            fixed: "right",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link to={`${match.url}/${record.id}`} key={record.id}>
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    {/* <Link to={`/${record.id}`} key={record.id}>
                        <Button icon={<FileSearchOutlined />} disabled></Button>
                    </Link> */}
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
            width: 220,
            fixed: "left"
        },
        {
            id: 10,
            title: "Ảnh",
            dataIndex: "image",
            render: image => <img alt="IMG" src={image} width="100%"></img>,
            width: 120,
            fixed: "left"
        },
        {
            id: 20,
            title: "Giá bán",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            render: price => changePriceToVND(price),
            width: 150
        },
        {
            id: 2,
            title: "Hãng",
            dataIndex: "brand",
            filters: filters && filters.Brand,
            onFilter: (value, record) => record.brand.includes(value),
            width: 120
        },

        {
            id: 3,
            title: "Loại ổ cứng",
            dataIndex: "type",
            filters: filters && filters.type,
            onFilter: (value, record) => record.type.includes(value),
            width: 120
        },
        {
            id: 4,
            title: "Dung lượng",
            dataIndex: "capacity",
            filters: filters && filters.capacity,
            onFilter: (value, record) => record.capacity.includes(value),
            width: 120
        },
        {
            id: 5,
            title: "Mô tả sản phẩm",
            dataIndex: "description",
            width: 200,
            render: description => (
                <Tooltip
                    title={description.toUpperCase()}
                    color={"#8c8c8c"}
                    key={description}
                >
                    <Tag key={description}>
                        {description.length > 25
                            ? description.slice(0, 25).toUpperCase() + "..."
                            : description.toUpperCase()}
                    </Tag>
                </Tooltip>
            )
        },
        {
            id: 7,
            title: "Chức năng",
            dataIndex: "action",
            width: 100,
            fixed: "right",
            align: "center",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link to={`${match.url}/${record.id}`} key={record.id}>
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    {/* <Link to={`/${record.id}`} key={record.id}>
                        <Button icon={<FileSearchOutlined />} disabled></Button>
                    </Link> */}
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

    return (
        <Layout className="site-layout">
            <BreadcrumbField
                list={[
                    "Admin",
                    productType === TYPE_PRODUCT.LAPTOP
                        ? "Danh sách Laptop"
                        : "Danh sách Ổ Cứng"
                ]}
            />
            <Content
                key={indexTable}
                style={{
                    overflow: "initial"
                }}
            >
                <Button
                    type="primary"
                    style={{ marginBottom: 5, width: 80 }}
                    icon={<ReloadOutlined />}
                    onClick={() => reloadData()}
                />
                <Search
                    placeholder="Tìm kiếm tên sản phẩm"
                    style={{ width: 200, marginLeft: 5 }}
                    onChange={e => {
                        dispatch(handleSearchByName(e.target.value))
                    }}
                />

                <Form component={false}>
                    <Table
                        key={indexTable}
                        bordered
                        dataSource={productsFilter}
                        columns={
                            productType === "laptop"
                                ? columnsLaptop
                                : productType === "drive"
                                ? columnsDrive
                                : []
                        }
                        pagination={{
                            defaultPageSize: 10,
                            showSizeChanger: true,
                            pageSizeOptions: ["10", "20", "30"]
                        }}
                        scroll={{ x: 1500, y: 500 }}
                        // footer={() => "Footer"}
                    />
                </Form>
            </Content>
        </Layout>
    )
}
export default DossierData
