import { Carousel } from "antd"

const HeaderBanner = () => {
    return (
        <div id="home">
            <div className="container">
                <div className="home-wrap">
                    <Carousel autoplay effect={"scrollx"} dotPosition={"top"}>
                        <div className="banner banner-1">
                            <img
                                alt="Logo"
                                src={
                                    "https://cdn.tgdd.vn/2021/04/campaign/hp-envy-13-1200-400-1200x400.png"
                                }
                            ></img>
                        </div>
                        <div className="banner banner-1">
                            <img
                                alt="Logo"
                                src={
                                    "https://cdn.tgdd.vn/2021/04/campaign/lenobo-1200x400.png"
                                }
                            ></img>
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
                            <img
                                alt="Logo"
                                src={
                                    "https://cdn.tgdd.vn/2021/04/campaign/hp-chung-1200-400(1)-1200x400.png"
                                }
                            ></img>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default HeaderBanner
