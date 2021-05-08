import { Image } from "antd"
import { useState } from "react"
import "./ProductViewImage.css"
import { MAINVIEW } from "Constants/Data"

const ProductViewImage = props => {
    const { images } = props

    // const imagesTest = {
    //     img1:
    //         "https://cdn.tgdd.vn/Products/Images/44/216292/leno…pad-s145-15iil-i3-1005g1-4gb-256gb-win1-2-org.jpg",
    //     img2:
    //         "https://cdn.tgdd.vn/Products/Images/44/216292/leno…pad-s145-15iil-i3-1005g1-4gb-256gb-win1-1-org.jpg",
    //     img3:
    //         "https://cdn.tgdd.vn/Products/Images/44/216292/leno…pad-s145-15iil-i3-1005g1-4gb-256gb-win1-6-org.jpg"
    // }
    // const imagesEntriesTest = Object.entries(imagesTest)
    // console.log(
    //     "🚀 ~ file: index.js ~ line 23 ~ imagesEntriesTest",
    //     imagesEntriesTest
    // )
    // const [linkImg, setLinkImg] = useState(imagesTest.img2)
    const [linkImg, setLinkImg] = useState(images[0].img)

    const onShow = id => {
        setLinkImg(images[id].img)
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
