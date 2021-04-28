import BenefitComponent from "Components/Web/Benefit"
import FooterComponent from "Components/Web/Common/Footer"
import HeaderBanner from "Components/Web/Common/Header/HeaderBanner"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"

const HomePage = () => {
    return (
        <div>
            <HeaderBanner />
            <BenefitComponent />
            {RENDER_HOME.map(item => {
                return (
                    <SelectBlock
                        key={item.id}
                        selectBlockTitle={item.title}
                        products={item.results}
                    />
                )
            })}
        </div>
    )
}

export default HomePage
