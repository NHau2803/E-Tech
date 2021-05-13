import BreadcrumbComponent from "Components/Web/Breadcrumb"
import FooterComponent from "Components/Web/Common/Footer"
import FilterBlock from "Components/Web/FilterBlock"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"
import { useParams } from "react-router"
import { getOptionsLocalStorage } from "Utils/Converter"

const ProductFilter = () => {
    const { productType } = useParams()
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
