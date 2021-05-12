import { ArrowRightOutlined, RightCircleOutlined } from "@ant-design/icons"
import { RENDER_CART } from "Constants/Data"
import { PATH } from "Constants/Path"
import { Link } from "react-router-dom"

const CartComponent = () => {
    return (
        <div className="custom-menu">
            <div id="shopping-cart">
                {RENDER_CART.map(item => {
                    return (
                        <div className="shopping-cart-list" key={item.id}>
                            <div className="product product-widget">
                                <div className="product-thumb">
                                    <img alt="Logo" src={item.image}></img>
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">
                                        {item.price}
                                        {/* <span className="qty">
                                                        x1
                                                    </span> */}
                                    </h3>
                                    <h2 className="product-name">
                                        <Link
                                            to={`${PATH.LAPTOP}/${item.name}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </h2>
                                </div>
                                <button className="cancel-btn">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    )
                })}
                <div className="shopping-cart-btns">
                    <Link to={"/etech/checkout"} className="primary-btn">
                        Xem giỏ hàng &thinsp;
                        <RightCircleOutlined />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
