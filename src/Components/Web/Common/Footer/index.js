import { FacebookFilled, MailFilled, PhoneOutlined } from "@ant-design/icons"
import { PATH } from "Constants/Path"
import { Link } from "react-router-dom"
import Images from "Constants/Images"
const FooterComponent = () => {
    return (
        <footer id="footer" className="section section-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <img
                            alt="Logo"
                            src={Images.Logo_Footer}
                            width={"80%"}
                        ></img>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-header">HỖ TRỢ KHÁCH HÀNG</h3>
                            <ul className="list-links">
                                <li>
                                    <a href="/#">
                                        GỌI MUA HÀNG: <PhoneOutlined />
                                        0955556666
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        GỌI BẢO HÀNH: <PhoneOutlined />
                                        0944446666
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        GỌI KHIẾU NẠI: <PhoneOutlined />
                                        0944447777
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        GỌI KỸ THUẬT: <PhoneOutlined />
                                        0944448888
                                    </a>
                                </li>
                                {/* <p>(07:30am - 22:00pm)</p> */}
                            </ul>
                        </div>
                    </div>

                    <div className="clearfix visible-sm visible-xs"></div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-header">Về etech</h3>
                            <ul className="list-links">
                                <li>
                                    <Link to={PATH.ABOUT}>GiỚI THIỆU</Link>
                                </li>
                                <li>
                                    <Link to={PATH.RECRUITMENT}>
                                        TUYỂN DỤNG
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATH.POLICY_TRANSPORT}>
                                        CHÍNH SÁCH VẬN CHUYỂN
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATH.POLICY_PAY}>
                                        CHÍNH SÁCH THANH TOÁN
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">CÂU HỎI THƯỜNG GẶP</Link>
                                </li>
                                {/* <li>
                                    <Link to="/#">TÌM SHOP(5)</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-header">
                                HỢP TÁC & LIÊN KẾT
                            </h3>
                            <ul className="list-links">
                                <li>
                                    <a href="/#">HỢP TÁC DOANH NGHIỆP</a>
                                </li>
                            </ul>
                            <br />
                            <h3 className="footer-header">
                                KẾT NỐI VỚI CHÚNG TÔI
                            </h3>
                            <ul className="footer-social">
                                <li>
                                    <a href="/#">
                                        <FacebookFilled
                                            style={{ fontSize: "20px" }}
                                        />
                                        <b>/etech</b>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <MailFilled
                                            style={{ fontSize: "20px" }}
                                        />
                                        <b>/etech@contact.com</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="footer-copyright">
                            Copyright &copy; 2021 All rights reserved | Made
                            with &thinsp;
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            &thinsp; &thinsp;
                            <b style={{ color: "#33c9dc" }}>BY ETECH TEAM</b>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterComponent
