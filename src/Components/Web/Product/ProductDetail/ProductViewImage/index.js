import { Image } from "antd"
import { useState } from "react"
import "./ProductViewImage.css"
import { MAINVIEW } from "Constants/Data"

const ProductViewImage = props => {
    const { images } = props
    const [linkImg, setLinkImg] = useState(images[0].img)

    const onShow = id => {
        setLinkImg(images[id].img)
    }

    return (
        <div className="col-md-6">
            <div id="product-main-view">
                <div className="product-view">
                    <div className="column">
                        <Image width={500} height={340} src={linkImg} />
                    </div>

                    <div id="slide-wrapper">
                        <div id="slider">
                            {images.map(item => {
                                return (
                                    <div
                                        key={item.id}
                                        onMouseOver={() => onShow(item.id)}
                                    >
                                        <img
                                            alt="Product Img"
                                            className={"thumbnail"}
                                            src={item.img}
                                        ></img>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductViewImage
