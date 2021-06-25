import {
    DeleteOutlined,
    FileSearchOutlined,
    FormOutlined,
    ReloadOutlined
} from "@ant-design/icons"
import { Button, Space, Table } from "antd"
import Search from "antd/lib/input/Search"
import Modal from "antd/lib/modal/Modal"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import MessageField from "Components/Admin/CustomFields/Message"
import { TYPE_PRODUCT } from "Constants/Data"
import { PATH } from "Constants/Path"
import { Markup } from "interweave"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams, useRouteMatch } from "react-router-dom"
import { handleSearchByName } from "Redux/Admin/Product/ProductAdmin.reducer"
import { getProductsApi } from "Redux/Admin/Product/ProductAdmin.thunk"
import { changePriceToVND } from "Utils/Converter"

const DossierData = () => {
    const { productType } = useParams()
    const [indexTable, setIndexTable] = useState(1)
    // const products = useSelector(state => state.ProductAdminReducer.products)
    const productsFilter = useSelector(
        state => state.ProductAdminReducer.productsFilter
    )
    const filters = useSelector(state => state.ProductAdminReducer.filters)

    const match = useRouteMatch()
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [description, setDescription] = useState("Chưa có dữ liệu...")
    const [productId, setProductId] = useState(0)
    console.log(
        "🚀 ~ file: index.js ~ line 37 ~ DossierData ~ productId",
        productId
    )

    useEffect(() => {
        setIndexTable(indexTable + 1)
        dispatch(getProductsApi(productType))
    }, [productType])

    // ---------------------EVEN---------------------

    const handleDelete = key => {
        //console.log(key)
        return <MessageField />
    }
    const reloadData = () => {
        setIndexTable(indexTable + 1)
        dispatch(getProductsApi(productType))
    }

    const showDescription = description => {
        setIsModalVisible(true)
        setDescription(description)
    }

    // ---------------------COL---------------------
    const columnsLaptop = [
        {
            key: "name",
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: 220,
            fixed: "left"
        },
        {
            key: "image",
            title: "Ảnh",
            dataIndex: "image",
            render: image => <img alt="IMG" src={image} width="100%"></img>,
            width: 120,
            fixed: "left"
        },
        {
            key: "price",
            title: "Giá bán",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            render: price => changePriceToVND(price),
            width: 150
        },
        {
            key: 2,
            title: "Hãng",
            dataIndex: "brand",
            filters: filters && filters.Brand,
            onFilter: (value, record) => record.brand.includes(value),
            width: 100
        },
        {
            key: "cpu",
            title: "Vi xử lí",
            dataIndex: "cpu",
            filters: filters && filters.Cpu,
            onFilter: (value, record) =>
                record.cpu ? record.cpu.includes(value) : "",
            width: 180
        },
        {
            key: "ram",
            title: "Ram",
            dataIndex: "ram",
            filters: filters && filters.Ram,
            onFilter: (value, record) => record.ram.includes(value),
            width: 180
        },
        {
            key: "rom",
            title: "Lưu trữ",
            dataIndex: "rom",
            filters: filters && filters.Rom,
            onFilter: (value, record) => record.rom.includes(value),
            width: 180
        },
        {
            title: "Mô tả",
            width: 80,
            align: "center",
            render: (text, record) => (
                <Button
                    type="primary"
                    icon={<FileSearchOutlined />}
                    onClick={() => {
                        setProductId(record.id)
                        showDescription(record.description)
                    }}
                ></Button>
            )
            // render: description => (
            //     <Tooltip
            //         title={description.toUpperCase()}
            //         color={"#8c8c8c"}
            //         key={description}
            //     >
            //         <p key={description}>
            //             {description.length > 25
            //                 ? description.slice(0, 25).toUpperCase() + "..."
            //                 : description.toUpperCase()}
            //         </p>
            //     </Tooltip>
            // )
        },
        {
            key: "action",
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
            key: "name",
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: 220,
            fixed: "left"
        },
        {
            key: "image",
            title: "Ảnh",
            dataIndex: "image",
            render: image => <img alt="IMG" src={image} width="100%"></img>,
            width: 120,
            fixed: "left"
        },
        {
            key: "price",
            title: "Giá bán",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            render: price => changePriceToVND(price),
            width: 150
        },
        {
            key: "brand",
            title: "Hãng",
            dataIndex: "brand",
            filters: filters && filters.Brand,
            onFilter: (value, record) => record.brand.includes(value),
            width: 120
        },

        {
            key: "type",
            title: "Loại ổ cứng",
            dataIndex: "type",
            filters: filters && filters.type,
            onFilter: (value, record) => record.type.includes(value),
            width: 120
        },
        {
            key: "capacity",
            title: "Dung lượng",
            dataIndex: "capacity",
            filters: filters && filters.capacity,
            onFilter: (value, record) => record.capacity.includes(value),
            width: 120
        },
        {
            key: "description",
            title: "Mô tả",
            width: 80,
            align: "center",
            render: (text, record) => (
                <Button
                    type="primary"
                    icon={<FileSearchOutlined />}
                    onClick={() => {
                        setProductId(record.id)
                        showDescription(record.description)
                    }}
                ></Button>
            )
            // render: description => (
            //     <Tooltip
            //         title={description.toUpperCase()}
            //         color={"#8c8c8c"}
            //         key={description}
            //     >
            //         <Tag key={description}>
            //             {description.length > 25
            //                 ? description.slice(0, 25).toUpperCase() + "..."
            //                 : description.toUpperCase()}
            //         </Tag>
            //     </Tooltip>
            // )
        },
        {
            key: "action",
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
        <>
            <BreadcrumbField
                list={[
                    "Admin",
                    productType === TYPE_PRODUCT.LAPTOP
                        ? "Danh sách Laptop"
                        : "Danh sách Ổ Cứng"
                ]}
            />
            <br />
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
            <br />

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

            <Modal
                title="Mô tả sản phẩm"
                width={"80%"}
                visible={isModalVisible}
                okText="Xem trực tiếp tại website"
                cancelText="Thoát"
                onOk={() =>
                    window.open(`${PATH.HOME}/${productType}/${productId}`)
                }
                onCancel={() => setIsModalVisible(false)}
            >
                <Markup content={description} />
            </Modal>
        </>
    )
}
export default DossierData
