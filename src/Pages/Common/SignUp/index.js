import "./SignUpPage.css"
const SignupPage = () => {
    return (
        <div className="body-signup">
            <div className="container-signup">
                <div className="title">
                    <a href="/#">
                        <img src="/logo.PNG" alt=""></img>
                    </a>
                    &emsp; Đăng Ký
                </div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Họ Và Tên</span>
                                <input
                                    type="text"
                                    placeholder="Nhập Họ Và Tên"
                                    required
                                ></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Tên Đăng Nhập</span>
                                <input
                                    type="text"
                                    placeholder="Nhập Tên Đăng Nhập"
                                    required
                                ></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="text"
                                    placeholder="Nhập Email"
                                    required
                                ></input>
                            </div>
                            <div className="input-box">
                                <span className="details">
                                    Nhập Số Điện Thoại
                                </span>
                                <input
                                    type="text"
                                    placeholder="Nhập Số Điện Thoại"
                                    required
                                ></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Mật Khẩu</span>
                                <input
                                    type="password"
                                    placeholder="Nhập Mật Khẩu"
                                    required
                                ></input>
                            </div>
                            <div className="input-box">
                                <span className="details">
                                    Xác Nhận Mật Khẩu
                                </span>
                                <input
                                    type="password"
                                    placeholder="Xác Nhận Mật Khẩu"
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="gender-details">
                            <input
                                type="radio"
                                name="gender"
                                id="dot-1"
                            ></input>
                            <input
                                type="radio"
                                name="gender"
                                id="dot-2"
                            ></input>

                            <span className="gender-title">Giới Tính</span>
                            <div className="category-signup">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Nam</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Nữ</span>
                                </label>
                            </div>
                        </div>
                        <div className="button-signup">
                            <input type="submit" value="Đăng Ký"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
