import { RENDER_CART } from "Constants/Data"
import { PATH } from "Constants/Path"
// import "../../../index.css"

const CheckOut = () => {
    const getTotal = (price, quality) => {
        console.log(
            "🚀 ~ file: index.js ~ line 9 ~ getTotal ~ quality",
            quality
        )
        console.log("🚀 ~ file: index.js ~ line 9 ~ getTotal ~ price", price)
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <form id="checkout-form" className="clearfix">
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
                                        {RENDER_CART.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td className="thumb">
                                                        <img
                                                            alt="Logo"
                                                            src={item.image}
                                                        ></img>
                                                    </td>
                                                    <td className="details">
                                                        <a href={item.link}>
                                                            {item.name}
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <span>
                                                                    {item.ram}
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    {item.rom}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="price text-center">
                                                        <strong>
                                                            {item.price}
                                                        </strong>
                                                        <br />
                                                        {/* <del className="font-weak">
                                                        <small>$40.00</small>
                                                    </del> */}
                                                    </td>
                                                    <td className="qty text-center">
                                                        <input
                                                            className="input"
                                                            type="number"
                                                            defaultValue={
                                                                item.price
                                                                    ? item.quality
                                                                    : 1
                                                            }
                                                        />
                                                    </td>
                                                    <td className="total text-center">
                                                        <strong className="primary-color">
                                                            {getTotal(
                                                                item.price,
                                                                item.quality
                                                            )}
                                                        </strong>
                                                    </td>
                                                    <td className="text-right">
                                                        <button className="main-btn icon-btn">
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
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="address"
                                        placeholder="Địa chỉ"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="input"
                                        type="text"
                                        name="phone"
                                        placeholder="Số điện thoại"
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
                                                <h3>2.990.000đ</h3>
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
                                                <h3> 2.990.000đ</h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="primary-btn">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CheckOut
