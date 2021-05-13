import LaptopAPI from "API/Laptop"
import ProductsAPI from "API/Products"
import RenderWeb from "API/RenderWeb"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import FooterComponent from "Components/Web/Common/Footer"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import ProductDetail from "Components/Web/Product/ProductDetail"
import ProductViewImage from "Components/Web/Product/ProductDetail/ProductViewImage"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import ProductTab from "Components/Web/Product/ProductTab"
import { RENDER_HOME, RENDER_LAPTOP_DETAIL, TYPE_PRODUCT } from "Constants/Data"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { checkNumber } from "Utils/CheckType"
import { getOptionsLocalStorage } from "Utils/Converter"

// const ProductDetail = React.lazy(() =>
//     import("../../../Components/Web/Product/ProductDetail")
// )

const ProductDetailPage = props => {
    const { productType, productId } = useParams()
    const history = useHistory()
    const redirectNotFound = () => history.push("/not-found")
    const [productDetail, setProductDetail] = useState({})
    // console.log("🚀 ~ file: index.js ~ line 24 ~ productDetail", productDetail)

    const [product, setProduct] = useState(RENDER_HOME)
    // console.log("🚀 ~ file: index.js ~ line 11 ~ HomePage ~ product", product)

    // useEffect(() => {
    //     RenderWeb.get().then(res => setProduct(res))
    // }, [])

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (
    //         !isNaN(productId) &&
    //         Object.values(TYPE_PRODUCT).includes(productType)
    //     ) {
    //         // ProductsAPI.getProductDetail(productType, productId).then(res =>
    //         //     setProductDetail(res)
    //         // )
    //     } else {
    //         redirectNotFound()
    //     }
    // }, [productId])

    return (
        <div>
            <BreadcrumbComponent pageName={"Laptop"} />
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="product product-details clearfix">
                            <ProductViewImage
                                images={
                                    productDetail.images ||
                                    RENDER_LAPTOP_DETAIL.images
                                }
                            />
                            <ProductDetail
                                detail={
                                    productDetail.info ||
                                    RENDER_LAPTOP_DETAIL.info
                                }
                            />
                            <ProductTab
                                description={
                                    productDetail.description ||
                                    RENDER_LAPTOP_DETAIL.description
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            {product.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.brand}
                        products={item.results}
                    />
                )
            })}
        </div>
    )
}
export default ProductDetailPage
