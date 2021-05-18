import { InputNumber, message, notification } from "antd"
import CartAPI from "API/Cart"
import { RENDER_CART } from "Constants/Data"
import { PATH } from "Constants/Path"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Link, useHistory } from "react-router-dom"
import {
    changePriceToVND,
    getOptionsLocalStorage,
    setOptionsLocalStorage
} from "Utils/Converter"
import { removeCacheLocalStorage } from "Utils/localStorageFunctions"
// import "./styles.css";
const CheckOut = () => {
    const [cart, setCart] = useState(getOptionsLocalStorage("carts"))
    const [account, setAccount] = useState(getOptionsLocalStorage("account"))
    const history = useHistory()
    const redirectHome = () => history.push("/etech")
    console.log("🚀 ~ file: index.js ~ line 17 ~ CheckOut ~ account", account)

    useEffect(() => {
        setOptionsLocalStorage("carts", cart)
    }, [cart])

    useEffect(() => {
        let productIds = []
        cart.map(item => productIds.push(item.id))
        console.log("🚀 ~ file: index.js ~ line 17 ~ useEffect ~ cart", cart)
        console.log(
            "🚀 ~ file: index.js ~ line 17 ~ useEffect ~ productIds",
            productIds
        )
        // CartAPI.getCartInfo({ id: productIds }).then(res => setCart(res))
    })

    const handleRemoveItem = id => {
        //setReload(!reload)
        setCart(cart.filter(item => item.id !== id))
        setOptionsLocalStorage("carts", cart)
    }

    const getTotal = () => {
        let totalPrice = 0
        cart.map(item => {
            // console.log(
            //     "🚀 ~ file: index.js ~ line 33 ~ useEffect ~ cart",
            //     cart
            // )
            totalPrice += item.price * item.qty
        })
        // setBill({totalPrice: totalPrice, shipPrice: 0, total: 0})

        return totalPrice
    }

    useEffect(() => {
        getTotal()
    }, [cart])

    const onChangeQty = (id, e) => {
        cart.map(item => item.id === parseInt(id) && (item.qty = e))
        setCart([...cart], cart)
    }

    const handlePay = () => {
        let order = []
        console.log("=========")
        cart.map(item => order.push({ id: item.id, qty: item.qty }))
        CartAPI.saveCart({ order: order }).then(res => {
            console.log(res)
            if (res.notify && res.notify) {
                notification["success"]({
                    message: "Cảm ơn",
                    description: "Bạn đã đặt hàng thành công!"
                })
                removeCacheLocalStorage("carts")
                redirectHome()
            }
        })
    }

    return (
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
                                            <th className="text-center">Giá</th>
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
                                        {cart.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td className="thumb">
                                                        <img
                                                            alt="Logo"
                                                            src={item.image}
                                                        ></img>
                                                    </td>
                                                    <td className="details">
                                                        <Link
                                                            to={`/etech/${item.type_product}/${item.id}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <span>
                                                                    {item.spec1}
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    {item.spec2}
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
                                                            max={99}
                                                            defaultValue={
                                                                item.qty
                                                            }
                                                            onChange={e =>
                                                                onChangeQty(
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
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="billing-details">
                                <div className="section-title">
                                    <h3 className="title">
                                        Thông Tin Khách Hàng
                                    </h3>
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="name"
                                        placeholder="Họ Tên"
                                        value={account.name || ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="address"
                                        placeholder="Địa chỉ"
                                        value={account.address || ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={account.email || ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="phone"
                                        placeholder="Số điện thoại"
                                        value={account.phone || ""}
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="input-checkbox">
                                        <div className="caption">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor
                                                incididunt.
                                            </p>
                                            <p>
                                                <input
                                                    className="input"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter Your Password"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Bạn đã có tài khoản ?{" "}
                                    <a href={PATH.LOGIN}>Đăng nhập</a> /{" "}
                                    <a href={PATH.SIGNUP}>Tạo tài khoản</a>
                                </p>
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
                                                <h3>Giá &emsp;</h3>
                                            </td>
                                            <td>
                                                <h3>
                                                    {changePriceToVND(
                                                        getTotal()
                                                    )}
                                                </h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3>Ship &emsp;</h3>
                                            </td>
                                            <td>
                                                <h3>0đ</h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3>Tổng &emsp;</h3>
                                            </td>
                                            <td>
                                                <h3>
                                                    {changePriceToVND(
                                                        getTotal()
                                                    )}
                                                </h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button
                                    className="primary-btn"
                                    onClick={() => handlePay()}
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
