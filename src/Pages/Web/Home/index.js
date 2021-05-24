import RenderWeb from "API/RenderWeb"
import BenefitComponent from "Components/Web/Benefit"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import {
    RENDER_CART,
    RENDER_HOME,
    RENDER_HOME_DEFAULT,
    RENDER_LAPTOP_DETAIL_DEFAULT
} from "Constants/Data"
import { useEffect, useState } from "react"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"
import { getOptionsLocalStorage, setOptionsLocalStorage } from "Utils/Converter"
import GetOptionsAPI from "API/GetOptions"
import { useDispatch, useSelector } from "react-redux"
import { getProductApi } from "Redux/Product/Product.thunk"

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductApi())
    }, [])
    const productList = useSelector(state => state.ProductReducer.products)

    // const isEmptyItemInLocalStorage = emptyItemInLocalStorage("productList")
    // const isEmptyOptions = emptyItemInLocalStorage("rams")
    // console.log(
    //     "🚀 ~ file: index.js ~ line 12 ~ HomePage ~ isEmptyItemInLocalStorage",
    //     isEmptyItemInLocalStorage
    // )
    // const [productList, setProductList] = useState(
    //     isEmptyItemInLocalStorage
    //         ? RENDER_HOME_DEFAULT
    //         : getOptionsLocalStorage("productList")
    // )
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (isEmptyItemInLocalStorage) {
    //         RenderWeb.get().then(res => {
    //             console.log(
    //                 "🚀 ~ file: index.js ~ line 18 ~ RenderWeb.get ~ res",
    //                 res
    //             )
    //             setProductList(res)
    //             setOptionsLocalStorage("productList", res)
    //         })
    //     }
    //     if (isEmptyOptions) {
    //         GetOptionsAPI.getOptions()
    //             .then(res => {
    //                 if (res) {
    //                     console.log(
    //                         "🚀 ~ file: index.js ~ line 18 ~ GetOptionsAPI.getOptions ~ res",
    //                         res
    //                     )
    //                     setOptionsLocalStorage("product_type", res.type)
    //                     /**Laptop**/
    //                     setOptionsLocalStorage("cpus", res.laptop.cpus)
    //                     setOptionsLocalStorage("gpus", res.laptop.gpus)
    //                     setOptionsLocalStorage("rams", res.laptop.rams)
    //                     setOptionsLocalStorage("roms", res.laptop.roms)
    //                     setOptionsLocalStorage(
    //                         "batteries",
    //                         res.laptop.batteries
    //                     )
    //                     setOptionsLocalStorage(
    //                         "laptop_brand",
    //                         res.laptop.brands
    //                     )
    //                     setOptionsLocalStorage("os", res.laptop.os)
    //                     setOptionsLocalStorage("ports", res.laptop.ports)
    //                     setOptionsLocalStorage("screens", res.laptop.screens)
    //                     setOptionsLocalStorage("sizes", res.laptop.sizes)
    //                     setOptionsLocalStorage("weights", res.laptop.weights)
    //                     setOptionsLocalStorage("rams", res.laptop.rams)
    //                     /**Drive**/
    //                     setOptionsLocalStorage("drive_brand", res.drive.brands)
    //                     setOptionsLocalStorage("caches", res.drive.caches)
    //                     setOptionsLocalStorage(
    //                         "capacities",
    //                         res.drive.capacities
    //                     )
    //                     setOptionsLocalStorage(
    //                         "connections",
    //                         res.drive.connections
    //                     )
    //                     setOptionsLocalStorage(
    //                         "dimensions",
    //                         res.drive.dimensions
    //                     )
    //                     setOptionsLocalStorage("reads", res.drive.reads)
    //                     setOptionsLocalStorage("rotations", res.drive.rotations)
    //                     setOptionsLocalStorage("types", res.drive.types)
    //                     setOptionsLocalStorage("writes", res.drive.writes)
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }
    // }, [])
    return (
        <div>
            <HeaderBanner />
            {productList.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.brand}
                        brandId={item.id}
                        products={item.result}
                    />
                )
            })}
            <BenefitComponent />
        </div>
    )
}

export default HomePage
