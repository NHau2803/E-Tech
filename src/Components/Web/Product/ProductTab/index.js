import { useState } from "react"
import ProductDescription from "./ProductDescription"
import ProductReviews from "./ProductReviews"

const ProductTab = props => {
    const { description } = props
    const [tabDescription, setTabDescription] = useState(true)

    const onChangeTab = () => {
        return setTabDescription(!tabDescription)
    }

    return (
        <div className="col-md-12">
            <div className="product-tab">
                <ul className="tab-nav">
                    <li className={tabDescription ? "active" : ""}>
                        <a data-toggle="tab" onClick={onChangeTab}>
                            Mô tả chi tiết
                        </a>
                    </li>

                    <li className={!tabDescription ? "active" : ""}>
                        <a data-toggle="tab" onClick={onChangeTab}>
                            Đánh giá của khách hàng
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    {tabDescription ? (
                        <ProductDescription description={description} />
                    ) : (
                        <ProductReviews />
                    )}
                </div>
            </div>
        </div>
    )
}
export default ProductTab
