import { PATH } from "Constants/Path"
import "./LoginPage.css"
const LoginPage = () => {
    return (
        <div className="body-login">
            <div className="center-login">
                <h1>
                    <a href="/etech">
                        <img src="/logo.PNG" alt={"Logo"}></img>
                    </a>
                    &emsp;Đăng Nhập
                </h1>
                <form>
                    <div className="txt_field">
                        <input type="text"></input>
                        <span></span>
                        <lable>Tài Khoản</lable>
                    </div>
                    <div className="txt_field">
                        <input type="password"></input>
                        <span></span>
                        <lable>Mật Khẩu</lable>
                    </div>
                    <div>
                        <div className="pass-login">Quên Mật Khẩu?</div>
                        <input
                            type="submit"
                            height="/etech"
                            value="Đăng Nhập"
                        ></input>
                        <div className="signup_link">
                            Bạn chưa có tài khoản ?{" "}
                            <a href="/#">Tạo Tài Khoản</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
