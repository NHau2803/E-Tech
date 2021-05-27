import RenderWeb from "API/RenderWeb"
import BreadcrumbComponent from "Components/Web/Breadcrumb"
import FilterBlock from "Components/Web/FilterBlock"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME_DEFAULT } from "Constants/Data"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getLS, setLS } from "Utils/Converter"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"

const ProductFilter = () => {
    const { productType } = useParams()

    const isEmptyItemInLocalStorage = emptyItemInLocalStorage("productList")
    console.log(
        "🚀 ~ file: index.js ~ line 12 ~ HomePage ~ isEmptyItemInLocalStorage",
        isEmptyItemInLocalStorage
    )
    const [productList, setProductList] = useState(
        isEmptyItemInLocalStorage ? RENDER_HOME_DEFAULT : getLS("productList")
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
                setLS("productList", res)
            })
        }
    }, [])

    // const [carts, setCarts] = useState(getLS("carts"))
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (isEmptyItemInLocalStorage) {
    //         RenderWeb.get().then(res => {
    //             setProductList(res)
    //             setLS("productList", res)
    //         })
    //     }

    //     //
    // }, [])
    return (
        <div>
            <BreadcrumbComponent pageName={productType.toUpperCase()} />
            <FilterBlock />
            {productList.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.brand}
                        products={item.result}
                    />
                )
            })}
        </div>
    )
}

export default ProductFilter
