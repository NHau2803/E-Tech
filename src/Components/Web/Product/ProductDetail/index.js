import ProductSpec from "./ProductSpec"

const ProductDetail = props => {
    const { detail } = props
    return (
        <div className="col-md-6">
            <div className="product-body">
                {/* <div className="product-label">
                    <span>New</span>
                    <span className="sale">-10%</span>
                </div> */}
                <h2 className="product-name">{detail.name}</h2>
                <h3 className="product-price">
                    {detail.price}
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
                    <a href="/#">8 Đánh giá / Thêm đánh giá</a>
                </div>
                <ProductSpec detail={detail} />
                <div className="product-options">
                    <ul className="color-option">
                        <li>
                            <span className="text-uppercase">Màu sắc:</span>
                        </li>
                        <li className="active">
                            <a href={"/#"} style={{ background: "#fff" }}></a>
                        </li>
                        <li>
                            <a href={"/#"} style={{ background: "#000" }}></a>
                        </li>
                    </ul>
                </div>

                <div className="product-btns">
                    <button className="primary-btn add-to-cart">
                        <i className="fa fa-shopping-cart"></i> Thêm vào giỏ
                        hàng
                    </button>
                    <div className="pull-right">
                        <button className="main-btn icon-btn">
                            <i className="fa fa-heart"></i>
                        </button>
                        <button className="main-btn icon-btn">
                            <i className="fa fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail
