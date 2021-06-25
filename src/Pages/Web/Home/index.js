import { notification } from "antd"
import BenefitComponent from "Components/Web/Benefit"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
// import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartLS } from "Redux/Cart/Cart.thunk"
import { getProductsApi } from "Redux/Product/Product.thunk"
import { setLS } from "Utils/Converter"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"
const SelectBlock = React.lazy(() =>
    import("../../../Components/Web/Product/ProductShow/SelectBlock")
)
const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (emptyItemInLocalStorage("carts")) {
            setLS("carts", [])
        }
        dispatch(getCartLS())
        dispatch(getProductsApi())
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            //DRIVE = MOBILE
            notification.warning({
                message: "Thông báo",
                description: "Xin lỗi, web chưa được tối ưu trên điện thoại."
            })
        }
    }, [])
    const products = useSelector(state => state.ProductReducer.products)

    return (
        <div>
            <HeaderBanner />
            {products &&
                products.map(item => {
                    return (
                        <SelectBlock
                            key={item.id}
                            selectBlockTitle={item.brand}
                            products={item.result}
                        />
                    )
                })}
            {/* <BenefitComponent /> */}
        </div>
    )
}

export default HomePage
