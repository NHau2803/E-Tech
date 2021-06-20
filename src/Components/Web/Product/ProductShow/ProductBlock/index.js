import { notification } from "antd"
import { PATH } from "Constants/Path"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { addCart } from "Redux/Cart/Cart.reducer"
import { changePriceToVND } from "Utils/Converter"

const ProductBlock = props => {
    const {
        type,
        id,
        image,
        name,
        guarantee,
        price,
        spec1,
        spec2,
        valueSale
    } = props

    const history = useHistory()
    const dispatch = useDispatch()
    const saveProductToLocalStorage = () => {
        let cartItem = {
            id: id,
            image: image,
            name: name,
            price: price,
            spec1: spec1,
            spec2: spec2,
            qty: 1,
            type: type
        }
        dispatch(addCart(cartItem))
        notification.success({
            message: "Thông báo",
            description: "Thêm vào giỏ hàng thành công!"
        })
    }

    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="product product-single">
                <div
                    className="product-thumb"
                    onClick={() => history.push(`${PATH.HOME}/${type}/${id}`)}
                >
                    {/* {valueSale ? (
        console.log("🚀 ~ file: index.js ~ line 32 ~ saveProductToLocalStorage ~ handleSaveCartItem", handleSaveCartItem)
                        <div className="product-label">
                            <span>New</span>
                            <span className="sale">{valueSale}</span>
                        </div>
                    ) : (
                        ""
                    )}*/}
                    <button className="main-btn quick-view">
                        <Link to={`${PATH.HOME}/${type}/${id}`}>
                            <i className="fa fa-search-plus"></i> Xem Chi Tiết
                        </Link>
                    </button>
                    <img src={image} alt="Product Img"></img>
                </div>
                <div className="product-body">
                    <h2 className="product-name">
                        <Link
                            to={`${PATH.HOME}/${type}/${id}`}
                            className="product-name link"
                        >
                            {name}
                        </Link>
                    </h2>
                    <p>
                        {spec1} | {spec2} <br></br>
                        {/* Bảo Hành {guarantee} tháng <br></br> */}
                        <br></br>
                    </p>
                    {/* <p>*Là một sản phẩm tốt</p> */}
                    <h4 className="product-price">{changePriceToVND(price)}</h4>

                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                    </div>
                    <div className="product-btns">
                        <button
                            className="primary-btn add-to-cart"
                            onClick={() => saveProductToLocalStorage()}
                        >
                            <i className="fa fa-shopping-cart"></i> Thêm vào giỏ
                            hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductBlock
