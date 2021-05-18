import RenderWeb from "API/RenderWeb"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import FooterComponent from "Components/Web/Common/Footer"
import FilterBlock from "Components/Web/FilterBlock"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getOptionsLocalStorage, setOptionsLocalStorage } from "Utils/Converter"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"

const ProductFilter = () => {
    const { productType } = useParams()
    const isEmptyItemInLocalStorage = emptyItemInLocalStorage("productList")
    const [productList, setProductList] = useState(
        getOptionsLocalStorage("productList") || RENDER_HOME
    )
    // const [carts, setCarts] = useState(getOptionsLocalStorage("carts"))
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (isEmptyItemInLocalStorage) {
    //         RenderWeb.get().then(res => {
    //             setProductList(res)
    //             setOptionsLocalStorage("productList", res)
    //         })
    //     }

    //     //
    // }, [])
    return (
        <div>
            <BreadcrumbComponent pageName={productType.toUpperCase()} />
            <FilterBlock />
            {RENDER_HOME.map(item => {
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

export default ProductFilter
