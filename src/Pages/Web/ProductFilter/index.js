import BreadcrumbComponent from "Components/Web/Breadcrumb"
import FooterComponent from "Components/Web/Common/Footer"
import FilterBlock from "Components/Web/FilterBlock"
import SelectBlock from "Components/Web/Product/ProductShow/SelectBlock"
import { RENDER_HOME } from "Constants/Data"

const ProductFilter = () => {
    return (
        <div>
            <BreadcrumbComponent pageName={"LAPTOP"} />
            <FilterBlock />
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

export default ProductFilter
