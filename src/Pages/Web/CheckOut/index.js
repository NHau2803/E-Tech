import {
    GlobalOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined
} from "@ant-design/icons"
import { InputNumber, Modal, notification, Result } from "antd"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import { PATH } from "Constants/Path"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import {
    changeQty,
    getTotalPriceBillSuccess,
    getTotalPriceSuccess
} from "Redux/Cart/Cart.reducer"
import { getCartLS, saveCartApi, setCartLS } from "Redux/Cart/Cart.thunk"
import { getUserCookie } from "Redux/User/User.thunk"
import { isEmpty } from "Utils/CheckType"
import { changePriceToVND } from "Utils/Converter"
const CheckOut = () => {
    // const [cart, setCart] = useState(getLS("carts"))
    const dispatch = useDispatch()
    const account = useSelector(state => state.UserReducer.user)
    const carts = useSelector(state => state.CartReducer.carts)
    // const totalPrice = useSelector(state => state.CartReducer.totalPrice)
    const totalPriceBill = useSelector(
        state => state.CartReducer.totalPriceBill
    )
    const history = useHistory()
    // console.log("🚀 ~ file: index.js ~ line 17 ~ CheckOut ~ account", account)

    useEffect(() => {
        dispatch(getUserCookie())
        dispatch(getCartLS())
        dispatch(getTotalPriceSuccess())
        dispatch(getTotalPriceBillSuccess())
    }, [])

    const handleRemoveItem = id => {
        dispatch(setCartLS(carts.filter(item => item.id !== id)))
        dispatch(getTotalPriceSuccess())
        dispatch(getTotalPriceBillSuccess())
    }

    const onChangeQty = (id, e) => {
        dispatch(changeQty({ id, e }))
        dispatch(getTotalPriceBillSuccess())
    }

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [notify, setNotify] = useState(null)

    const handlePay = () => {
        if (account) {
            if (!isEmpty(carts)) {
                let order = []

                carts.map(item => order.push({ id: item.id, qty: item.qty }))
                dispatch(saveCartApi({ order: order })).then(res => {
                    setIsModalVisible(true)
                    setNotify(res)
                })
            } else {
                notification.warning({
                    message: "Thông báo",
                    description: "Chưa có sản phẩm nào trong giỏ hàng"
                })
            }
        } else {
            notification.warning({
                message: "Thông báo",
                description: "Bạn cần đăng nhập để thanh toán"
            })
        }
    }

    return (
        <div>
            <BreadcrumbComponent pageName={"Giỏ hàng & thanh toán"} />
            <Modal
                title="Thông báo"
                visible={isModalVisible}
                onOk={() => history.push(PATH.HOME)}
                onCancel={() => setIsModalVisible(false)}
                okText="Mua tiếp"
                cancelText="Thoát"
            >
                {notify && (
                    <Result
                        status={notify && notify.status}
                        title={notify && notify.title}
                        subTitle={notify && notify.subTitle}
                    />
                )}
            </Modal>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div id="checkout-form" className="clearfix">
                            <div className="col-md-12">
                                <div className="order-summary clearfix">
                                    <div className="section-title">
                                        <h3 className="title">Giỏ Hàng</h3>
                                    </div>
                                    <table className="shopping-cart-table table">
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th />
                                                <th className="text-center">
                                                    Giá
                                                </th>
                                                <th className="text-center">
                                                    Số lượng
                                                </th>
                                                <th className="text-center">
                                                    Tổng tiền
                                                </th>
                                                <th className="text-right" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {carts &&
                                                carts.map(item => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td className="thumb">
                                                                <img
                                                                    alt="Logo"
                                                                    src={
                                                                        item.image
                                                                    }
                                                                ></img>
                                                            </td>
                                                            <td className="details">
                                                                <Link
                                                                    to={`/etech/${item.type}/${item.id}`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                                <ul>
                                                                    <li>
                                                                        <span>
                                                                            {
                                                                                item.spec1
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            {
                                                                                item.spec2
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                            <td className="price text-center">
                                                                <strong>
                                                                    {changePriceToVND(
                                                                        item.price
                                                                    )}
                                                                </strong>
                                                                <br />
                                                                {/* <del className="font-weak">
                                                        <small>$40.00</small>
                                                    </del> */}
                                                            </td>
                                                            <td className="qty text-center">
                                                                <InputNumber
                                                                    size="large"
                                                                    min={1}
                                                                    max={6}
                                                                    value={
                                                                        item.qty
                                                                    }
                                                                    onChange={e =>
                                                                        e > 5
                                                                            ? notification.info(
                                                                                  {
                                                                                      message:
                                                                                          "Thông báo",
                                                                                      description:
                                                                                          "Nếu bạn muốn mua số lượng lớn, Vui lòng liên hệ với cửa hàng qua số 0946601833 để được nhận ưu đãi hấp dẫn, Cảm ơn quý khách đã tin tưởng."
                                                                                  }
                                                                              )
                                                                            : onChangeQty(
                                                                                  item.id,
                                                                                  e
                                                                              )
                                                                    }
                                                                />
                                                            </td>
                                                            <td className="total text-center">
                                                                <strong className="primary-color">
                                                                    {changePriceToVND(
                                                                        item.price *
                                                                            item.qty
                                                                    )}
                                                                </strong>
                                                            </td>
                                                            <td className="text-right">
                                                                <button
                                                                    className="main-btn icon-btn"
                                                                    onClick={() => {
                                                                        handleRemoveItem(
                                                                            item.id
                                                                        )
                                                                    }}
                                                                >
                                                                    <i className="fa fa-close" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                        </tbody>
                                    </table>
                                    {isEmpty(carts)
                                        ? "Chưa có sản phẩm nào trong giỏ hàng, Hãy chọn mua ngay!"
                                        : ""}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="billing-details">
                                    <div className="section-title">
                                        <h3 className="title">
                                            Thông Tin Khách Hàng
                                        </h3>
                                    </div>
                                    <h4>
                                        <UserOutlined />
                                        &ensp;
                                        {(account && account.name) ||
                                            "Chưa đăng nhập"}
                                    </h4>
                                    <h4>
                                        <PhoneOutlined />
                                        &ensp;{account && account.phone}
                                    </h4>
                                    <h4>
                                        <MailOutlined />
                                        &ensp;{account && account.email}
                                    </h4>
                                    <h4>
                                        <GlobalOutlined />
                                        &ensp;{account && account.address}
                                    </h4>

                                    {account === null ? (
                                        <p>
                                            Bạn đã có tài khoản ?
                                            <a href={PATH.LOGIN}>Đăng nhập</a> /
                                            <a href={PATH.SIGNUP}>
                                                Tạo tài khoản
                                            </a>
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="billing-details">
                                    <div className="section-title">
                                        <h3 className="title">Hóa Đơn</h3>
                                    </div>

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h4>Giá &emsp;</h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {changePriceToVND(
                                                            totalPriceBill
                                                        )}
                                                    </h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>Ship &emsp;</h4>
                                                </td>
                                                <td>
                                                    <h4>0đ</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>Tổng &emsp;</h4>
                                                </td>
                                                <td>
                                                    <h4>
                                                        {changePriceToVND(
                                                            totalPriceBill
                                                        )}
                                                    </h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button
                                        className="primary-btn"
                                        onClick={() => {
                                            account && isEmpty(carts)
                                                ? notification.warning({
                                                      message: "Thông báo",
                                                      description:
                                                          "Chưa có sản phẩm nào để thanh toán"
                                                  })
                                                : handlePay()
                                        }}
                                    >
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
