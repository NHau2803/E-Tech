import ProductAPI from "API/ProductAPI"
import RenderWeb from "API/RenderWeb"
import BenefitComponent from "Components/Web/Benefit"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"
import { useEffect, useState } from "react"
console.log("🚀 ~ file: index.js ~ line 7 ~ RENDER_HOME", RENDER_HOME)

const HomePage = () => {
    const [product, setProduct] = useState({})
    console.log("🚀 ~ file: index.js ~ line 11 ~ HomePage ~ product", product)

    useEffect(() => {
        RenderWeb.get().then(res => setProduct(res))
    }, [])

    return (
        <div>
            <HeaderBanner />
            {RENDER_HOME.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.brand}
                        products={item.results}
                    />
                )
            })}
            <BenefitComponent />
        </div>
    )
}

export default HomePage
