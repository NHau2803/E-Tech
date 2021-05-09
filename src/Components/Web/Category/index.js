const CategoryComponent = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <a className="banner banner-1" href="/#">
                            {/* <img alt="logo" src={Images.Banner01}></img> */}
                            <div className="banner-caption text-center">
                                <h2 className="white-color">Laptop</h2>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <a className="banner banner-1" href="/#">
                            {/* <img alt="logo" src={Images.Banner02}></img> */}
                            <div className="banner-caption text-center">
                                <h2 className="white-color">Điện thoại</h2>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <a className="banner banner-1" href="/#">
                            {/* <img alt="logo" src={Images.Banner03}></img> */}
                            <div className="banner-caption text-center">
                                <h2 className="white-color">Máy Ảnh</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryComponent
