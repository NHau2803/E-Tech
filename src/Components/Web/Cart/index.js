import { RENDER_CART } from "Constants/Data"
import { PATH } from "Constants/Path"

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
                                        <a href={`${PATH.LAPTOP}/${item.name}`}>
                                            {item.name}
                                        </a>
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
                    <a href={"/etech/checkout"} className="primary-btn">
                        Checkout <i className="fa fa-arrow-circle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
