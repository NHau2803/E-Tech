import FooterComponent from "Components/Web/Common/Footer"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import ProductDetail from "Components/Web/Product/ProductDetail"
import ProductViewImage from "Components/Web/Product/ProductDetail/ProductViewImage"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import ProductTab from "Components/Web/Product/ProductTab"
import { RENDER_HOME, RENDER_LAPTOP_DETAIL } from "Constants/Data"
import { useParams } from "react-router"

// const ProductDetail = React.lazy(() =>
//     import("../../../Components/Web/Product/ProductDetail")
// )

const ProductDetailPage = props => {
    const { id, name } = props
    const params = useParams()

    // print params to console
    console.log(params)

    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="product product-details clearfix">
                            <ProductViewImage
                                images={RENDER_LAPTOP_DETAIL.images}
                            />
                            <ProductDetail
                                detail={RENDER_LAPTOP_DETAIL.detail}
                            />
                            <ProductTab
                                description={RENDER_LAPTOP_DETAIL.description}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {RENDER_HOME.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.title}
                        products={item.results}
                    />
                )
            })}
        </div>
    )
}
export default ProductDetailPage
