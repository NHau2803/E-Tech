import { FileSearchOutlined } from "@ant-design/icons"
import { Button, Table, Tag } from "antd"
import Modal from "antd/lib/modal/Modal"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import React, { useState } from "react"

const ViewManager = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [billDetail, setBillDetail] = useState(null)
    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const STATUS = [
        {
            text: "AWAIT_FOR_CONFIRMATION",
            value: "AWAIT_FOR_CONFIRMATION"
        },
        {
            text: "ON_GOING",
            value: "ON_GOING"
        },
        {
            text: "DELIVERED",
            value: "DELIVERED"
        },
        {
            text: "CANCELLED",
            value: "CANCELLED"
        }
    ]

    const showBillDetail = record => {
        console.log("🚀 ~ file: index.js ~ line 22 ~ record", record)
        setIsModalVisible(true)
        setBillDetail(record)
    }
    const columns = [
        {
            id: 1,
            key: "userId",
            title: "Mã khách hàng",
            dataIndex: "userId",
            width: 130,
            fixed: "left"
        },
        {
            id: 2,
            key: "name",
            title: "Tên khách hàng",
            dataIndex: "name"
        },
        {
            id: 2,
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
                    {status}
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

    const data = [
        {
            userId: 8,
            name: "Nguyen cong hau",
            email: "hau2803nch@gmail.com",
            address: "P7 Go Vap HCM",
            phone: "0946432121",
            status: "AWAIT_FOR_CONFIRMATION",
            bill: {
                billId: 47,
                totalPrice: 25500000, // for => ( price * qty )
                timeBuy: "08:00:00 13/06/2021",
                products: [
                    {
                        id: 49,
                        name: "Laptop ab",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 25000000,
                        qty: 1
                    },
                    {
                        id: 50,
                        name: "O cung HHD 567",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 500000,
                        qty: 1
                    },
                    {
                        id: 51,
                        name: "O cung HHD 567",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 500000,
                        qty: 1
                    },
                    {
                        id: 52,
                        name: "O cung HHD 567",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 500000,
                        qty: 1
                    }
                ]
            }
        },
        {
            userId: 2,
            name: "Nguyen cong hau 2",
            email: "hau2803nch@gmail.com",
            address: "P7 Go Vap HCM",
            phone: "0946432121",
            status: "ON_GOING",
            bill: {
                billId: 48,
                totalPrice: 25000000,
                timeBuy: "08:00:00 13/06/2021",
                products: [
                    {
                        id: 49,
                        name: "Laptop ab",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 25000000,
                        qty: 1
                    }
                ]
            }
        },
        {
            userId: 15,
            name: "Nguyen cong hau 15",
            email: "hau2803nch@gmail.com",
            address: "P7 Go Vap HCM",
            phone: "0946432121",
            status: "DELIVERED",
            bill: {
                billId: 49,
                totalPrice: 25000000,
                timeBuy: "08:00:00 13/06/2021",
                products: [
                    {
                        id: 49,
                        name: "Laptop ab",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 25000000,
                        qty: 1
                    }
                ]
            }
        },
        {
            userId: 3,
            name: "Nguyen cong hau 3",
            email: "hau2803nch@gmail.com",
            address: "P7 Go Vap HCM",
            phone: "0946432121",
            status: "CANCELLED",
            bill: {
                billId: 50,
                totalPrice: 25000000,
                timeBuy: "08:00:00 13/06/2021",
                timeCanceled: "08:00:00 13/06/2021",
                products: [
                    {
                        id: 49,
                        name: "Laptop ab",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/235378/dell-inspiron-7501-i7-x3mry1-600x600.jpg",
                        price: 25000000,
                        qty: 1
                    }
                ]
            }
        }
    ]
    const columnsProduct = [
        {
            id: 10,
            title: "Mã sản phẩm",
            dataIndex: "id",
            key: "id",
            width: 200,
            align: "center"
        },
        {
            id: 11,
            title: "Ảnh",
            dataIndex: "image",
            key: "image",
            render: image => <img alt="IMG" src={image} width="100%"></img>,
            width: 160,
            align: "center"
        },
        {
            id: 12,
            title: "Giá",
            dataIndex: "price",
            key: "price",
            align: "center"
        },
        {
            id: 13,
            title: "Số lượng",
            dataIndex: "qty",
            key: "qty",
            align: "center"
        }
    ]

    return (
        <>
            <BreadcrumbField list={["Admin", "Quản lí đơn hàng"]} />
            <br />
            <Table
                className="components-table-demo-nested"
                columns={columns}
                dataSource={data}
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
                    <Button key="submit" type="primary">
                        Giao hàng
                    </Button>
                ]}
            >
                {
                    <Table
                        columns={columnsProduct}
                        pagination={false}
                        dataSource={billDetail && billDetail.products}
                        title={() => (
                            <p>{`Mã hóa đơn: ${
                                billDetail && billDetail.billId
                            } | Thời gian mua: ${
                                billDetail && billDetail.timeBuy
                            }`}</p>
                        )}
                        footer={() => (
                            <p
                                style={{
                                    display: "flex",
                                    justifyContent: "right"
                                }}
                            >{`Tổng đơn: ${
                                billDetail && billDetail.totalPrice
                            }`}</p>
                        )}
                    />
                }
            </Modal>
        </>
    )
}

export default ViewManager
