import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input } from "antd"
import { BASE_URL } from "API/URL"
import axios from "axios"
import { PATH } from "Constants/Path"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { login } from "Redux/User/User.thunk"
import { setOptionsLocalStorage } from "Utils/Converter"
import { useDispatch } from "react-redux"
import "./LoginPage.css"
const LoginPage = () => {
    const [account, setAccount] = useState({ email: "", password: "" })
    const [form] = Form.useForm()
    const history = useHistory()
    localStorage.clear()
    const redirectHomePage = () => history.push("/etech")

    const dispatch = useDispatch()
    const onFinish = async values => {
        // console.log("Received values of form: ", values)
        // setAccount(values)
        const isLogin = await dispatch(login(values))
        console.log(
            `LHA:  ===> file: index.js ===> line 24 ===> isLogin`,
            isLogin
        )
        if (isLogin) {
            redirectHomePage()
        } else {
            form.setFields([
                {
                    name: "email",
                    errors: ["Sai tên đăng nhập hoặc mật khẩu!"]
                },
                {
                    name: "password",
                    errors: ["Sai tên đăng nhập hoặc mật khẩu!"]
                }
            ])
        }
    }

    return (
        <div className="body-login">
            <div className="center-login">
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={account}
                    onFinish={onFinish}
                >
                    <Form.Item>
                        <h1>Đăng Nhập</h1>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Mời Nhập Tên Đăng Nhập!"
                            }
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Tên Đăng Nhập"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Mời Nhập Mật Khẩu!"
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Mật Khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            // name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Lưu Mật Khẩu</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/#">
                            &emsp;Quên Mật Khẩu
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="button-login"
                        >
                            Đăng Nhập
                        </Button>
                        <p className="signup-login">
                            Bạn chưa có tài khoản ?
                            <Link to={PATH.SIGNUP}>&emsp;Đăng Ký Ngay</Link>
                        </p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage
