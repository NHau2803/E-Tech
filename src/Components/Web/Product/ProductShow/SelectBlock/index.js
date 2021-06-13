// import { useEffect } from "react"

import React from "react"

const ProductBlock = React.lazy(() => import("../ProductBlock"))
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
                    <div
                        className="col-md-12"
                        style={{ display: "flex", flexWrap: "wrap" }}
                    >
                        {products &&
                            products.map(item => {
                                return (
                                    <ProductBlock
                                        key={item.id}
                                        type={item.type}
                                        id={item.id}
                                        image={item.images}
                                        name={item.name}
                                        spec1={item.spec1}
                                        spec2={item.spec2}
                                        price={item.price}
                                        guarantee={item.guarantee}
                                        valueSale={"-10%"}
                                    />
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SelectBlock
