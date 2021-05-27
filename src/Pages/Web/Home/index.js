import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
// import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartLS } from "Redux/Cart/Cart.thunk"
import { getProductApi } from "Redux/Product/Product.thunk"
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
        dispatch(getProductApi())
    }, [])
    const products = useSelector(state => state.ProductReducer.products)

    // const isEmptyItemInLocalStorage = emptyItemInLocalStorage("products")
    // const isEmptyOptions = emptyItemInLocalStorage("rams")
    // console.log(
    //     "🚀 ~ file: index.js ~ line 12 ~ HomePage ~ isEmptyItemInLocalStorage",
    //     isEmptyItemInLocalStorage
    // )
    // const [products, setproducts] = useState(
    //     isEmptyItemInLocalStorage
    //         ? RENDER_HOME_DEFAULT
    //         : getLS("products")
    // )
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (isEmptyItemInLocalStorage) {
    //         RenderWeb.get().then(res => {
    //             console.log(
    //                 "🚀 ~ file: index.js ~ line 18 ~ RenderWeb.get ~ res",
    //                 res
    //             )
    //             setproducts(res)
    //             setLS("products", res)
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
    //                     setLS("product_type", res.type)
    //                     /**Laptop**/
    //                     setLS("cpus", res.laptop.cpus)
    //                     setLS("gpus", res.laptop.gpus)
    //                     setLS("rams", res.laptop.rams)
    //                     setLS("roms", res.laptop.roms)
    //                     setLS(
    //                         "batteries",
    //                         res.laptop.batteries
    //                     )
    //                     setLS(
    //                         "laptop_brand",
    //                         res.laptop.brands
    //                     )
    //                     setLS("os", res.laptop.os)
    //                     setLS("ports", res.laptop.ports)
    //                     setLS("screens", res.laptop.screens)
    //                     setLS("sizes", res.laptop.sizes)
    //                     setLS("weights", res.laptop.weights)
    //                     setLS("rams", res.laptop.rams)
    //                     /**Drive**/
    //                     setLS("drive_brand", res.drive.brands)
    //                     setLS("caches", res.drive.caches)
    //                     setLS(
    //                         "capacities",
    //                         res.drive.capacities
    //                     )
    //                     setLS(
    //                         "connections",
    //                         res.drive.connections
    //                     )
    //                     setLS(
    //                         "dimensions",
    //                         res.drive.dimensions
    //                     )
    //                     setLS("reads", res.drive.reads)
    //                     setLS("rotations", res.drive.rotations)
    //                     setLS("types", res.drive.types)
    //                     setLS("writes", res.drive.writes)
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
            {/* <BenefitComponent /> */}
        </div>
    )
}

export default HomePage
