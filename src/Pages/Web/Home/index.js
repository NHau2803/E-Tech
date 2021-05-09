import ProductAPI from "API/ProductAPI"
import BenefitComponent from "Components/Web/Benefit"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"
import { useEffect } from "react"

const HomePage = () => {
    useEffect(() => {
        ProductAPI.search().then(res => {
            console.log(res)
        })
    }, [])

    return (
        <div>
            <HeaderBanner />
            {RENDER_HOME.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.title}
                        products={item.results}
                    />
                )
            })}
            <BenefitComponent />
        </div>
    )
}

export default HomePage
