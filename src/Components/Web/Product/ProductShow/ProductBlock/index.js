import { PATH } from "Constants/Path"

const ProductBlock = props => {
    const { image, name, guarantee, price, ram, rom, valueSale } = props
    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="product product-single">
                <div className="product-thumb">
                    {valueSale ? (
                        <div className="product-label">
                            <span>New</span>
                            <span className="sale">{valueSale}</span>
                        </div>
                    ) : (
                        ""
                    )}
                    <button className="main-btn quick-view">
                        <a href={`${PATH.LAPTOP}/${name}`}>
                            <i className="fa fa-search-plus"></i> Xem Chi Tiết
                        </a>
                    </button>
                    <img src={image} alt=""></img>
                </div>
                <div className="product-body">
                    <h2 className="product-name">
                        <a
                            href={`${PATH.LAPTOP}/${name}`}
                            className="product-name link"
                        >
                            {name}
                        </a>
                    </h2>
                    <p>
                        {ram} | {rom} <br></br>
                        Bảo Hành {guarantee} tháng <br></br>
                        <br></br>
                    </p>
                    {/* <p>*Là một sản phẩm tốt</p> */}
                    <h4 className="product-price">{price}</h4>

                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                    </div>
                    <div className="product-btns">
                        <button className="primary-btn add-to-cart">
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
