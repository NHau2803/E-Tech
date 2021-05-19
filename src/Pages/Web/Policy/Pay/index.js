import React from "react"
import "./PolicyPay.css"
const PolicyPay = () => {
    window.scrollTo(0, 0)
    return (
        <div>
            <div className="container">
                <div className="content">
                    <br></br>
                    <h2>Chính Sách Thanh Toán</h2>
                    <div className="content-title">
                        1. Thanh toán trực tiếp tại địa chỉ:
                    </div>
                    <h4>Hệ thống cửa hàng ETech</h4>
                    <p>Trụ sở: 45 Nguyễn Khắc Nhu, P. Cô Giang, Q.1, TP. HCM</p>
                    <p>
                        Chi nhánh 2: 233A Phan Văn Trị, P.11, Q. Bình Thạnh, TP.
                        HCM
                    </p>
                    <p>
                        Chi nhánh 3: 69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh,
                        TP. HCM
                    </p>
                    <p>Email: etech@contact.com - Điện thoại: 0944445555</p>
                    <div className="content-title">
                        2. Thanh toán trực tuyến qua hình thức chuyển khoản/trả
                        góp
                    </div>
                    <h4>Hệ thống tài khoản thanh toán tại ETech</h4>
                    <p>
                        - Vietcombank - Ngân Hàng Ngoại Thương Việt Nam Chủ tài
                        khoản: DO NGUYEN TRIEU HUNG Số tài khoản: 0291000355781
                    </p>
                    <p>
                        - ACB- Ngân hàng Thương Mại Cổ Phần Châu Á Chủ tài
                        khoản: NGUYEN MINH HIEU Số tài khoản: 19383617
                    </p>
                    <ul className="list-table-thanhtoan">
                        <p>
                            Thanh toán trước: Thanh toán trước 100% giá trị đơn
                            hàng: Quý khách chuyển khoản trước 100% giá trị đơn
                            hàng vào 1 trong những tài khoản ngân hàng của cửa
                            hàng. Với hình thức thanh toán này cửa hàng sẽ hỗ
                            trợ quý khách 100% phí vận chuyển.
                        </p>
                        <p>
                            - COD: Đặt cọc trước 1.000.000đ và thanh toán khi
                            nhận hàng (COD) : Quý khách chuyển khoản trước
                            1.000.000đ vào 1 trong những tài khoản ngân hàng của
                            cửa hàng. Với hình thức thanh toán này quý khách vui
                            lòng thành toán thêm phí vận chuyển + phí thu hộ
                            (~2% giá trị sản phẩm)
                        </p>
                    </ul>
                    <p>
                        Nội dung chuyển khoản : Tên_khách_hàng Số_điện_thoại VD:
                        Nguyễn Văn A 0912345678
                    </p>
                    <div className="content-title">
                        3. Thanh toán trả góp qua thẻ tín dụng.
                    </div>
                    <h4>Thẻ tín dụng áp dụng</h4>
                    <ul>
                        <p>
                            - Thẻ tín dụng quốc tế (VISA/MASTER/JCB) được phát
                            hành bởi một trong các ngân hàng TP Bank, Standard
                            Chartered Bank, HSBC, Shinhan, Sacombank, Eximbank,
                            Techcombank, VIB Bank, VP Bank, Maritime Bank,
                            Citibank, Sea Bank..
                        </p>
                        <p>
                            - Vào thời điểm thanh toán, số dư hạn mức tiêu dùng
                            trong thẻ tín dụng của chủ thẻ phải lớn hơn hoặc
                            bằng tổng giá trị giao dịch.
                        </p>
                        <p>
                            - Với các ngân hàng VP Bank, Shinhan Bank, VIB,
                            Citibank, Maritime Bank, Standard Chartered Bank,
                            chủ thẻ phải thông báo với ngân hàng phát hành thẻ
                            để xác nhận về giao dịch trả góp vừa thực hiện.
                        </p>
                        <p>
                            - Số tiền trả góp lớn hơn 3 triệu đồng (có thể bao
                            gồm nhiều sản phẩm)
                        </p>
                    </ul>
                    <h4>Biểu phí dịch vụ trả góp lãi suất 0%</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td rowspan="2">
                                    <p>
                                        <strong>STT</strong>
                                    </p>
                                </td>
                                <td rowspan="2">
                                    <p>
                                        <strong>Ngân hàng</strong>
                                    </p>
                                </td>
                                <td colspan="5">
                                    <p>
                                        <strong>Kỳ hạn trả góp (tháng)</strong>
                                    </p>
                                </td>
                                <td rowspan="2">
                                    <p>
                                        <strong>Ghi chú</strong>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <strong>03</strong>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>06</strong>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <strong>09</strong>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <strong>12</strong>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>24</strong>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            1
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Sacombank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            10.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            2
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            VPBank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            8.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Techcombank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            7.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Thu thêm của chủ thẻ 1.1%*giá trị
                                            giao dịch (tối thiểu 150.000VNĐ/giao
                                            dịch)
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Shinhan Bank
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Eximbank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            7.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            VIB
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            7
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            CitiBank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            7.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            8
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            SeaBank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            9
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            HSBC
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            10
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            TPBank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>{" "}
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            11
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Maritime Bank
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.0%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Thu thêm của chủ thẻ 3%*giá; trị
                                            giao dịch
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            12
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Standard Chartered
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>{" "}
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            13
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            SCB
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            14
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            ANZ
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            15
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            FE Credit
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            6.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            16
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            NamA Bank
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            17
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            OCB
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            18
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            Kiên Long
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            7.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            &nbsp;
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            19
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            SHB
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.0%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            3.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            4.5%
                                        </span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <span className="table-thanhtoan">
                                            5.5%
                                        </span>
                                    </p>
                                </td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                </div>
            </div>
        </div>
    )
}
export default PolicyPay
