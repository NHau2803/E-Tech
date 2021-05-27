import BreadcrumbComponent from "Components/Web/Breadcrumb"
import ProductDetail from "Components/Web/Product/ProductDetail"
import ProductViewImage from "Components/Web/Product/ProductDetail/ProductViewImage"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import ProductTab from "Components/Web/Product/ProductTab"
import { RENDER_LAPTOP_DETAIL_DEFAULT, TYPE_PRODUCT } from "Constants/Data"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { getProductApi, getProductDetailApi } from "Redux/Product/Product.thunk"

// const ProductDetail = React.lazy(() =>
//     import("../../../Components/Web/Product/ProductDetail")
// )

const ProductDetailPage = () => {
    const { productType, productId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    const products = useSelector(state => state.ProductReducer.products)
    const productDetail = useSelector(
        state => state.ProductReducer.productDetail
    )
    const is404 = useSelector(state => state.ProductReducer.is404)
    console.log(
        "🚀 ~ file: index.js ~ line 28 ~ ProductDetailPage ~ is404",
        is404
    )
    if (is404) {
        history.push("/not-found")
    }

    console.log("🚀 ~ file: index.js ~ line 32 ~ productDetail", productDetail)

    // const [products, setProducts] = useState(
    //     getLS("productList")
    //         .sort((a, b) => b - a)
    //         .slice(0, 5)
    // )

    useEffect(() => {
        dispatch(getProductApi())
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        if (
            !isNaN(productId) &&
            Object.values(TYPE_PRODUCT).includes(productType)
        ) {
            dispatch(getProductDetailApi(productType, productId))
        } else {
            history.push("/not-found")
        }
    }, [productId])

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
                                    RENDER_LAPTOP_DETAIL_DEFAULT.images
                                }
                            />
                            <ProductDetail
                                detail={
                                    productDetail.info ||
                                    RENDER_LAPTOP_DETAIL_DEFAULT.info
                                }
                                images={
                                    productDetail.images ||
                                    RENDER_LAPTOP_DETAIL_DEFAULT.images
                                }
                                id={productDetail.id || 0}
                            />
                            <ProductTab
                                description={
                                    productDetail.description ||
                                    RENDER_LAPTOP_DETAIL_DEFAULT.description
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            {products.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.brand}
                        brandId={item.id}
                        products={item.result}
                    />
                )
            })}
        </div>
    )
}
export default ProductDetailPage
