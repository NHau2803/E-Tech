// import { useEffect } from "react"
import { changePriceToVND } from "Utils/Converter"
import ProductBlock from "../ProductBlock"
// import Slider from "react-slick"

const SelectBlock = props => {
    const { selectBlockTitle, products } = props

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">{selectBlockTitle}</h2>
                        </div>
                    </div>

                    {products.map(item => {
                        return (
                            <ProductBlock
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                ram={item.ram}
                                rom={item.rom}
                                price={changePriceToVND(item.price)}
                                guarantee={item.guarantee}
                                valueSale={"-10%"}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default SelectBlock
