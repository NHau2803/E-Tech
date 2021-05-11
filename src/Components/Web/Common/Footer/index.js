import { Link } from "react-router-dom"

const FooterComponent = props => {
    const { logo } = props
    return (
        <footer id="footer" className="section section-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="footer-logo">
                            <a className="logo" href="/#">
                                <img alt="Logo" src={logo}></img>
                            </a>
                        </div>

                        <p>NHÀ TUI BA ĐỜI BÁN UY TÍNH, ĐẾN ĐỜI TUI THÌ...</p>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-header">HỖ TRỢ KHÁCH HÀNG</h3>
                            <ul className="list-links">
                                <li>
                                    <a href="/#">GỌI MUA HÀNG: 0944445555</a>
                                </li>
                                <li>
                                    <a href="/#">GỌI BẢO HÀNH: 0944446666</a>
                                </li>
                                <li>
                                    <a href="/#">GỌI KHIẾU NẠI: 0944447777</a>
                                </li>
                                <li>
                                    <a href="/#">GỌI KỸ THUẬT: 0944448888</a>
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
                                    <Link to="/etech/about">GiỚI THIỆU</Link>
                                </li>
                                <li>
                                    <Link to="/#">TUYỂN DỤNG</Link>
                                </li>
                                <li>
                                    <Link to="/#">CHÍNH SÁCH</Link>
                                </li>
                                <li>
                                    <Link to="/#">CÂU HỎI THƯỜNG GẶP</Link>
                                </li>
                                <li>
                                    <Link to="/#">TÌM SHOP(5)</Link>
                                </li>
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
                                    <a href="/#">HỢP TÁCH DOANH NGHIỆP</a>
                                </li>
                            </ul>
                            <br />
                            <h3 className="footer-header">
                                KẾT NỐI VỚI CHÚNG TÔI
                            </h3>
                            <ul className="footer-social">
                                <li>
                                    <a href="/#">
                                        <i className="fa fa-facebook" />
                                        <b>/etshop</b>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <i
                                            className="fa fa-email"
                                            style={{
                                                //fontSize: 15,
                                                color: "blue"
                                            }}
                                        />
                                        <b>@/etshop@gmail.com</b>
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
                            <b style={{ color: "#33c9dc" }}>BY ETECH</b>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterComponent
