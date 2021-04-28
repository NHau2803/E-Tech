// import { useEffect } from "react"
import ProductBlock from "../ProductBlock"
// import Slider from "react-slick"

const SelectBlock = props => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const { selectBlockTitle, products } = props
    // useEffect(() => {
    //     new slick({
    //         // normal options...
    //         infinite: false,

    //         // the magic
    //         responsive: [
    //             {
    //                 breakpoint: 1024,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     infinite: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 300,
    //                 settings: "unslick" // destroys slick
    //             }
    //         ]
    //     })
    // })
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
                                image={item.image}
                                name={item.name}
                                ram={item.ram}
                                rom={item.rom}
                                price={item.price}
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
