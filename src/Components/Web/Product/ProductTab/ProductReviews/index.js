import { Rate, Button, Pagination, message } from "antd"
const ProductReviews = () => {
    function showTotal(total) {
        return `Total ${total} items`
    }

    const key = "updatable"
    const openMessage = () => {
        message.loading({ content: "Loading...", key })
        setTimeout(() => {
            message.success({ content: "Xong !", key, duration: 2 })
        }, 1000)
    }

    return (
        <div id="tab2" className="tab-pane fade in active">
            <div className="row">
                <div className="col-md-6">
                    <div className="product-reviews">
                        <div className="single-review">
                            <div className="review-heading">
                                <div>
                                    <a href="/#">
                                        <i className="fa fa-user-o" /> John
                                    </a>
                                </div>
                                <div>
                                    <a href="/#">
                                        <i className="fa fa-clock-o" /> 27 DEC
                                        2017 / 8:0 PM
                                    </a>
                                </div>
                                <div className="review-rating pull-right">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                            </div>
                            <div className="review-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua.Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className="single-review">
                            <div className="review-heading">
                                <div>
                                    <a href="/#">
                                        <i className="fa fa-user-o" /> John
                                    </a>
                                </div>
                                <div>
                                    <a href="/#">
                                        <i className="fa fa-clock-o" /> 27 DEC
                                        2017 / 8:0 PM
                                    </a>
                                </div>
                                <div className="review-rating pull-right">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                            </div>
                            <div className="review-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua.Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className="single-review">
                            <div className="review-heading">
                                <div>
                                    <a href="/#">
                                        <i className="fa fa-user-o" /> John
                                    </a>
                                </div>
                                <div>
                                    <a href="/#">
                                        <i className="fa fa-clock-o" /> 27 DEC
                                        2017 / 8:0 PM
                                    </a>
                                </div>
                                <div className="review-rating pull-right">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                            </div>

                            <div className="review-body">
                                <p></p>
                            </div>
                        </div>

                        {/* next đánh giá */}
                        <Pagination
                            style={{ textAlign: "center" }}
                            size="small"
                            total={50}
                        />
                    </div>
                </div>

                {/* bảng viết đáng giá  */}
                <div className="col-md-6">
                    <h4 className="text-uppercase">
                        <b>Đánh giá của bạn</b>
                    </h4>
                    <form className="review-form">
                        <div className="form-group">
                            <textarea
                                className="input"
                                placeholder="Phần đánh giá sản phẩm"
                                defaultValue={""}
                            />
                        </div>

                        {/* test đánh giá       */}
                        <strong className="text-uppercase">: Đánh Giá</strong>
                        <div style={{ float: "left", marginTop: "-8px" }}>
                            <Rate defaultValue={0} />
                            <span className="ant-rate-text"></span>
                        </div>
                        <br />
                        <br />

                        {/* Nút Xác nhận bảng đáng giá */}
                        <Button
                            Type="submit"
                            type="primary"
                            onClick={openMessage}
                        >
                            Xác Nhận
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProductReviews
