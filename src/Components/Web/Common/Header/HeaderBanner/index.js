import { Carousel } from "antd"
import Images from "Constants/Images"

const HeaderBanner = () => {
    return (
        <div id="home">
            <div className="container">
                <div className="home-wrap">
                    <Carousel autoplay effect={"scrollx"} dotPosition={"top"}>
                        <div className="banner banner-1">
                            <img alt="Logo" src={Images.Banner_Levono_2}></img>
                        </div>
                        <div className="banner banner-1">
                            <img alt="Logo" src={Images.Banner_HP_Envy}></img>
                        </div>
                        <div className="banner banner-1">
                            <img alt="Logo" src={Images.Banner_Levono}></img>
                            {/* <div className="banner-caption text-center">
                                <h1>Bags sale</h1>
                                <h3 className="white-color font-weak">
                                    Up to 50% Discount
                                </h3>
                                <button className="primary-btn">
                                    Shop Now
                                </button>
                            </div> */}
                        </div>
                        <div className="banner banner-1">
                            <img alt="Logo" src={Images.Banner_HP}></img>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default HeaderBanner
