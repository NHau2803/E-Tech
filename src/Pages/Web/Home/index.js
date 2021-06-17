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
