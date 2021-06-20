import { notification } from "antd"
import { useDispatch } from "react-redux"
import { addCart } from "Redux/Cart/Cart.reducer"
import { changePriceToVND } from "Utils/Converter"
import ProductSpec from "./ProductSpec"

const ProductDetail = props => {
    const { detail, images, id } = props
    const dispatch = useDispatch()
    const saveProductToLocalStorage = () => {
        let cartItem = {
            id: id,
            image: images[0].img,
            name: detail.name,
            price: detail.price,
            spec1: detail.ram,
            spec2: detail.rom,
            qty: 1
        }
        dispatch(addCart(cartItem))
        notification.success({
            message: "Thông báo",
            description: "Thêm vào giỏ hàng thành công!"
        })
    }

    return (
        <div className="col-md-6">
            <div className="product-body">
                {/* <div className="product-label">
                    <span>New</span>
                    <span className="sale">-10%</span>
                </div> */}
                <h2 className="product-name">{detail.name}</h2>
                <h3 className="product-price">
                    {changePriceToVND(detail.price)}
                    {/* <del className="product-old-price">12.490.000 ₫</del> */}
                </h3>
                <div>
                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                    </div>
                    <p>1 Đánh giá / Thêm đánh giá</p>
                </div>
                {/* change product type */}
                <ProductSpec detail={detail} />
                <div className="product-options">
                    {/* <ul className="color-option">
                        <li>
                            <span className="text-uppercase">Màu sắc:</span>
                        </li>
                        <li className="active">
                            <a href={"/#"} style={{ background: "#fff" }}></a>
                        </li>
                        <li>
                            <a href={"/#"} style={{ background: "#000" }}></a>
                        </li>
                    </ul> */}
                </div>

                <div className="product-btns">
                    <button
                        className="primary-btn add-to-cart"
                        disabled={id === 0 ? true : false}
                        onClick={() => saveProductToLocalStorage()}
                    >
                        <i className="fa fa-shopping-cart"></i> Thêm vào giỏ
                        hàng
                    </button>
                    <div className="pull-right">
                        <button className="main-btn icon-btn">
                            <i className="fa fa-heart"></i>
                        </button>
                        <button
                            className="main-btn icon-btn"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    window.location.href
                                )
                            }}
                        >
                            <i className="fa fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail
