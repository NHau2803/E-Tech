import BreadcrumbComponent from "Components/Web/Breadcrumb"
import FooterComponent from "Components/Web/Common/Footer"
import FilterBlock from "Components/Web/FilterBlock"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"
import { getOptionsLocalStorage } from "Utils/Converter"

const ProductFilter = () => {
    return (
        <div>
            <BreadcrumbComponent pageName={"LAPTOP"} />
            <FilterBlock />
            {getOptionsLocalStorage("productList").map(item => {
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
