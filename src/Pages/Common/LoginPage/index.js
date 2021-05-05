import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import "./LoginPage.css"
const LoginPage = () => {
    const onFinish = values => {
        console.log("Received values of form: ", values)
    }

    return (
        <div className="body-login">
            <div className="center-login">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item>
                        {/* <img alt="Logo" src={Images.Logo1}></img> */}
                    </Form.Item>
                    <Form.Item>
                        <h1>Đăng Nhập</h1>
                    </Form.Item>

                    <Form.Item
                        name="username"
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
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Mật Khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
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
                            <a href="/#">&emsp;Đăng Ký Ngay</a>
                        </p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage
