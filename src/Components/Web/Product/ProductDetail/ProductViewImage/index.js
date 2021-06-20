import { Image } from "antd"
import { useEffect, useState } from "react"
import "./ProductViewImage.css"

const ProductViewImage = props => {
    const { images } = props

    const [linkImg, setLinkImg] = useState("")

    useEffect(() => {
        setLinkImg(images[0].img)
    }, [images])

    const onShow = id => {
        let index = images.findIndex(x => x.id === id)
        setLinkImg(images[Number(index)].img)
        //const imagesEntriesTest = Object.entries(imagesTest)
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
