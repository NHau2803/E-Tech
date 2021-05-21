import { PATH } from "Constants/Path"
import { Link } from "react-router-dom"
import { changePriceToVND, getOptionsLocalStorage } from "Utils/Converter"
import { handleSaveCartItem } from "Utils/localStorageFunctions"

const ProductBlock = props => {
    const {
        brandId,
        id,
        image,
        name,
        guarantee,
        price,
        spec1,
        spec2,
        valueSale
    } = props
    // console.log("🚀 ~ file: index.js ~ line 6 ~ price", changePriceToVND(price))

    const saveProductToLocalStorage = () => {
        let cartItem = {
            id: id,
            image: image,
            name: name,
            price: price,
            spec1: spec1,
            spec2: spec2,
            qty: 1
        }
        handleSaveCartItem(cartItem)
    }

    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="product product-single">
                <div className="product-thumb">
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
                        <Link
                            to={`${
                                brandId > 7 ? PATH.DRIVE : PATH.LAPTOP
                            }/${id}`}
                        >
                            <i className="fa fa-search-plus"></i> Xem Chi Tiết
                        </Link>
                    </button>
                    <img src={image} alt="Product Img"></img>
                </div>
                <div className="product-body">
                    <h2 className="product-name">
                        <Link
                            to={`${
                                brandId > 7 ? PATH.DRIVE : PATH.LAPTOP
                            }/${id}`}
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
