import { Table } from "antd"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import { changePriceToVND } from "Utils/Converter"
const HistoryBill = () => {
    const billDetail = [
        {
            billId: 21,
            userId: 26,
            name: "NCH",
            phone: "0943258374",
            email: "hau2803nch@gmail.com",
            address: "nguyen thai son, phuong 7, go vap",
            status: "AWAIT_FOR_CONFIRMATION",
            bill: {
                billId: 21,
                totalPrice: 120310000,
                timeBuy: "2021-06-18 06:14:59",
                products: [
                    {
                        id: 51,
                        name: "Laptop HP Omen 15 ek0078TX",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/236426/hp-omen-15-ek0078tx-i7-26y68pa-1-org.jpg",
                        price: 48860000,
                        qty: 2
                    },
                    {
                        id: 52,
                        name: "Laptop HP Envy 13 ba1027TU",
                        image:
                            "https://cdn.tgdd.vn/Products/Images/44/230238/hp-envy-13-ba1027tu-i5-2k0b1pa-1-2-org.jpg",
                        price: 22590000,
                        qty: 1
                    }
                ]
            }
        }
    ]
    const billDetail2 = [
        {
            billId: 3,
            status: "ON_GOING",
            totalPrice: 201056119,
            timeBuy: "2021-06-16 05:26:15",
            products: [
                {
                    id: 7,
                    name: "k6RLMQNCO1kLA2DWR3hk",
                    image:
                        "https://cdn.tgdd.vn/Products/Images/44/235499/msi-gl65-leopard-10scxk-i7-093vn-16-600x600.jpg",
                    spec1: "8 GB, DDR4, 2133 MHz",
                    spec2: "HDD 500GB SATA3, Hỗ trợ khe cắm SSD M.2 PCIe",
                    price: 8062596,
                    qty: 4
                },
                {
                    id: 8,
                    name: "W8E9gUFVyP3hnhghXZeL",
                    spec1: "8 GB, DDR4, 2133 MHz",
                    spec2: "HDD 500GB SATA3, Hỗ trợ khe cắm SSD M.2 PCIe",
                    image:
                        "https://cdn.tgdd.vn/Products/Images/44/238607/msi-gf65-thin-10ue-i5-10500h-16gb-512gb-6gb-rtx306-600x600.jpg",
                    price: 8975147,
                    qty: 5
                }
            ]
        },
        {
            billId: 4,
            status: "ON_GOING",
            totalPrice: 201056119,
            timeBuy: "2021-06-16 05:26:15",
            products: [
                {
                    id: 7,
                    name: "k6RLMQNCO1kLA2DWR3hk",
                    spec1: "8 GB, DDR4, 2133 MHz",
                    spec2: "HDD 500GB SATA3, Hỗ trợ khe cắm SSD M.2 PCIe",
                    image:
                        "https://cdn.tgdd.vn/Products/Images/44/235499/msi-gl65-leopard-10scxk-i7-093vn-16-600x600.jpg",
                    price: 8062596,
                    qty: 4
                }
            ]
        }
    ]

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

    const getTitle = item => {
        return (
            <b>
                <p>{`Mã hóa đơn: ${item && item.billId}`}</p>
                <p>{`Thời gian mua: ${
                    item.bill.timeBuy &&
                    new Date(item.bill.timeBuy).toLocaleString("en-GB")
                }`}</p>
                <p>{`Tổng đơn: ${
                    item.bill.totalPrice &&
                    changePriceToVND(item.bill.totalPrice)
                }`}</p>
                <p
                    style={{ color: "blue" }}
                >{`Trạng thái đơn hàng: ${changeStatusVN(
                    item && item.status
                )}`}</p>
            </b>
        )
    }

    const columnsProduct = [
        {
            id: 10,
            title: "Mã sản phẩm",
            dataIndex: "id",
            key: "id",
            align: "center"
        },
        {
            id: 11,
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
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
            align: "center"
        }
    ]
    return (
        <div>
            <BreadcrumbComponent pageName={"Lịch sử đặt hàng"} />
            <br />
            <div className="container">
                {billDetail &&
                    billDetail.map(item => {
                        return (
                            <Table
                                columns={columnsProduct}
                                pagination={false}
                                dataSource={item && item.bill.products}
                                title={() => getTitle(item && item)}
                                footer={() => <p></p>}
                            />
                        )
                    })}
                <br />
                <h4>Cảm ơn bạn đã đặt hàng!</h4>
            </div>
        </div>
    )
}

export default HistoryBill
