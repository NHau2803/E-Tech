import { FileSearchOutlined, ReloadOutlined } from "@ant-design/icons"
import { Button, Table, Tag, Modal, notification } from "antd"
import Search from "antd/lib/input/Search"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleSearchByName } from "Redux/Admin/Bill/BillAdmin.reducer"
import {
    changeStatusBillApi,
    getBillListApi
} from "Redux/Admin/Bill/BillAdmin.thunk"
import { changePriceToVND } from "Utils/Converter"
const STATUS = [
    {
        text: "Đang chờ xác nhận",
        value: "AWAIT_FOR_CONFIRMATION"
    },
    {
        text: "Đang giao",
        value: "ON_GOING"
    },
    {
        text: "Đã giao",
        value: "DELIVERED"
    },
    {
        text: "Hủy đơn",
        value: "CANCELLED"
    }
]
const ViewManager = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [billDetail, setBillDetail] = useState(null)
    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const dispatch = useDispatch()

    const billsFilter = useSelector(state => state.BillReducer.billsFilter)
    console.log(
        "🚀 ~ file: index.js ~ line 118 ~ ViewManager ~ billsFilter",
        billsFilter
    )

    useEffect(() => {
        dispatch(getBillListApi())
    }, [])

    // ---------------------EVEN---------------------

    const openNotify = (type, title, message) => {
        notification[type]({
            message: title,
            description: message
        })
    }

    const showBillDetail = record => {
        console.log("🚀 ~ file: index.js ~ line 22 ~ record", record)
        setIsModalVisible(true)
        setBillDetail(record)
    }

    const changeBillStatus = (billId, status) => {
        dispatch(changeStatusBillApi(billId, status)).then(notify =>
            openNotify(notify.type, notify.title, notify.message)
        )
        setIsModalVisible(false)
        dispatch(getBillListApi())
    }

    const changeStatusVN = status => {
        switch (status) {
            case "AWAIT_FOR_CONFIRMATION":
                return "Đang chờ xác nhận"
            case "ON_GOING":
                return "Đang giao"
            case "DELIVERED":
                return "Đã giao"
            case "CANCELLED":
                return "Hủy đơn"
            default:
                return "-----"
        }
    }

    // ---------------------COL---------------------

    const columns = [
        {
            id: 1,
            key: "userId",
            title: "Mã KH",
            dataIndex: "userId",
            width: 150,
            sorter: (a, b) => a.userId - b.userId,
            fixed: "left"
        },
        {
            id: 2,
            key: "name",
            title: "Tên khách hàng",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            id: 3,
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            id: 4,
            key: "address",
            title: "Địa chỉ",
            dataIndex: "address"
            // width: 220,
        },
        {
            id: 5,
            key: "phone",
            title: "Số điện thoại",
            dataIndex: "phone",
            width: 150
        },
        {
            id: 6,
            key: "status",
            title: "Trạng thái đơn hàng",
            dataIndex: "status",
            filters: STATUS,
            onFilter: (value, record) => record.status.includes(value),
            render: status => (
                <Tag
                    color={
                        status === "ON_GOING"
                            ? "yellow"
                            : status === "AWAIT_FOR_CONFIRMATION"
                            ? "blue"
                            : status === "DELIVERED"
                            ? "green"
                            : "red"
                    }
                    key={status}
                >
                    {changeStatusVN(status)}
                </Tag>
            )
            // width: 220,
            // fixed: "left"
        },
        {
            id: 7,
            key: "bill",
            title: "Chi tiết",
            dataIndex: "bill",
            width: 100,
            align: "center",
            render: bill => (
                <Button
                    type="primary"
                    icon={<FileSearchOutlined />}
                    onClick={() => showBillDetail(bill)}
                ></Button>
            )
        }
    ]

    const columnsProduct = [
        {
            id: 10,
            title: "Mã sản phẩm",
            dataIndex: "id",
            key: "id",
            width: 160,
            align: "center"
        },
        {
            id: 11,
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            width: 250,
            align: "center"
        },
        {
            id: 12,
            title: "Ảnh",
            dataIndex: "image",
            key: "image",
            render: image => <img alt="IMG" src={image} width="100%"></img>,
            width: 160,
            align: "center"
        },
        {
            id: 13,
            title: "Giá",
            dataIndex: "price",
            key: "price",
            render: price => changePriceToVND(price),
            align: "center"
        },
        {
            id: 14,
            title: "Số lượng",
            dataIndex: "qty",
            key: "qty",
            align: "center",
            width: 120
        }
    ]

    return (
        <>
            <BreadcrumbField list={["Admin", "Quản lí đơn hàng"]} />
            <br />
            <Button
                type="primary"
                style={{ marginBottom: 5, width: 80 }}
                icon={<ReloadOutlined />}
                onClick={() => dispatch(getBillListApi())}
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
                className="components-table-demo-nested"
                columns={columns}
                dataSource={billsFilter}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30"]
                }}
                scroll={{ y: 500 }}
            />
            <Modal
                title={"Chi tiết hóa đơn"}
                visible={isModalVisible}
                // onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
                footer={[
                    <Button
                        type="primary"
                        onClick={() =>
                            changeBillStatus(
                                billDetail && billDetail.billId,
                                "AWAIT_FOR_CONFIRMATION"
                            )
                        }
                    >
                        Chờ xác nhận
                    </Button>,
                    <Button
                        type="primary"
                        onClick={() =>
                            changeBillStatus(
                                billDetail && billDetail.billId,
                                "ON_GOING"
                            )
                        }
                    >
                        Giao hàng
                    </Button>,
                    <Button
                        type="primary"
                        onClick={() =>
                            changeBillStatus(
                                billDetail && billDetail.billId,
                                "DELIVERED"
                            )
                        }
                    >
                        Đã giao
                    </Button>,
                    <Button
                        danger
                        type="primary"
                        onClick={() =>
                            changeBillStatus(
                                billDetail && billDetail.billId,
                                "CANCELLED"
                            )
                        }
                    >
                        Hủy đơn
                    </Button>
                ]}
            >
                {
                    <Table
                        columns={columnsProduct}
                        pagination={false}
                        dataSource={billDetail && billDetail.products}
                        title={() => (
                            <b>{`Mã hóa đơn: ${
                                billDetail && billDetail.billId
                            } | Thời gian mua: ${
                                billDetail &&
                                new Date(billDetail.timeBuy).toLocaleString(
                                    "en-GB"
                                )
                            }`}</b>
                        )}
                        footer={() => (
                            <b
                                style={{
                                    display: "flex",
                                    justifyContent: "right"
                                }}
                            >{`Tổng đơn: ${
                                billDetail &&
                                changePriceToVND(billDetail.totalPrice)
                            }`}</b>
                        )}
                    />
                }
            </Modal>
        </>
    )
}

export default ViewManager
