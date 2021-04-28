import "./BenefitComponent.Style.css"

const BenefitComponent = () => {
    return (
        <div className="container">
            <div className="benefit">
                <table className="benefit__all" border={1} aria-colspan={0}>
                    <tbody>
                        <tr>
                            <th className="icon_box-title">
                                <img
                                    className="icon_box-img"
                                    src="https://i.imgur.com/I8JGUZu.png"
                                    alt="lỗi"
                                />
                                <h3>Miễn phí vận chuyển</h3>
                                <p>Cho các đơn đặt hàng từ 1.000.000đ</p>
                            </th>
                            <th className="icon_box-title">
                                <img
                                    className="icon_box-img"
                                    src="https://i.imgur.com/kuw85kZ.png"
                                    alt="lỗi"
                                />
                                <h3>Hỗ trợ 24/7</h3>
                                <p>Gọi cho chúng tôi bất cứ lúc nào</p>
                            </th>
                            <th className="icon_box-title">
                                <img
                                    className="icon_box-img"
                                    src="https://i.imgur.com/GQBVrTd.png"
                                    alt="lỗi"
                                />
                                <h3>100% sự an toàn</h3>
                                <p>Thanh toán an toàn</p>
                            </th>
                            <th className="icon_box-title">
                                <img
                                    className="icon_box-img"
                                    src="https://i.imgur.com/dVHq5Ml.png"
                                    alt="lỗi"
                                />
                                <h3>Miễn phí trả hàng</h3>
                                <p>Mua sản phẩm trong 7 ngày</p>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BenefitComponent
