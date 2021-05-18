import RenderWeb from "API/RenderWeb"
import BenefitComponent from "Components/Web/Benefit"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_CART, RENDER_HOME } from "Constants/Data"
import { useEffect, useState } from "react"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"
import { getOptionsLocalStorage, setOptionsLocalStorage } from "Utils/Converter"

const HomePage = () => {
    const isEmptyItemInLocalStorage = emptyItemInLocalStorage("productList")
    const [productList, setProductList] = useState(
        isEmptyItemInLocalStorage ? [] : getOptionsLocalStorage("productList")
    )
    useEffect(() => {
        window.scrollTo(0, 0)
        if (isEmptyItemInLocalStorage) {
            RenderWeb.get().then(res => {
                console.log(
                    "🚀 ~ file: index.js ~ line 18 ~ RenderWeb.get ~ res",
                    res
                )
                setProductList(res)
                setOptionsLocalStorage("productList", res)
            })
        }
    }, [])
    console.log(productList)
    return (
        <div>
            <HeaderBanner />
            {productList.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.brand}
                        products={item.result}
                    />
                )
            })}
            <BenefitComponent />
        </div>
    )
}

export default HomePage
