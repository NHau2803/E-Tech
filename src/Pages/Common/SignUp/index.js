import { Button, Checkbox, Form, Input, Select } from "antd"
import { BASE_URL } from "API/URL"
import axios from "axios"
import React, { useState } from "react"
import { useHistory } from "react-router"
import { setOptionsLocalStorage } from "Utils/Converter"
import "./SignUpPage.css"

const { Option } = Select
// const residences = [
//     {
//         value: "Hà Nội",
//         label: "Hà Nội",
//         children: [
//             {
//                 value: "Quận",
//                 label: "Quận"
//                 // children: [
//                 //     {
//                 //         value: "Đường",
//                 //         label: "Đường"
//                 //     }
//                 // ]
//             }
//         ]
//     },
//     {
//         value: "Thành Phố Hồ Chí Minh",
//         label: "Thành Phố Hồ Chí Minh",
//         children: [
//             {
//                 value: "Quận",
//                 label: "Quận"
//                 // children: [
//                 //     {
//                 //         value: "Đường",
//                 //         label: "Đường"
//                 //     }
//                 // ]
//             }
//         ]
//     }
// ]

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
}
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
}
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16
    }
}
const SignupPage = () => {
    const [form] = Form.useForm()
    const onReset = () => {
        form.resetFields()
    }
    const history = useHistory()
    const redirectHomePage = () => history.push("/etech")
    const onFinish = values => {
        const signin = {
            name: values.name,
            email: values.email,
            password: values.password,
            phone: values.phone,
            address: values.address
        }
        axios
            .post(BASE_URL + "/api/register", signin)
            .then(res => {
                console.log(
                    "🚀 ~ file: index.js ~ line 18 ~ LoginPage ~ res",
                    res.data
                )
                if (res.data.date && res.data.success === true) {
                    let account = {
                        address: res.data.date.address,
                        admin: 0,
                        email: res.data.date.email,
                        name: res.data.date.name,
                        phone: res.data.date.phone
                    }

                    setOptionsLocalStorage("account", account)
                    redirectHomePage()
                }
                if (res.data.error) {
                    // notification.error({
                    //     message: "Thông báo",
                    //     description: "Đăng kí thất bại"
                    // })
                    form.setFields([
                        {
                            name: "email",
                            errors: ["Đã tồn tại email này!"]
                        }
                    ])
                }
            })
            .catch(
                err => console.log(err)
                // notification.error({
                //     message: "a",
                //     description: message
                // })
            )
    }

    const prefixSelector = (
        <Form.Item noStyle>
            <Select
                style={{
                    width: 70
                }}
            >
                <Option value="86">+84</Option>
            </Select>
        </Form.Item>
    )
    const [autoCompleteResult, setAutoCompleteResult] = useState([])

    const onWebsiteChange = value => {
        if (value) {
            setAutoCompleteResult([])
        } else {
            setAutoCompleteResult(
                [".com", ".org", ".net"].map(domain => `${value}${domain}`)
            )
        }
    }

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website
    }))
    return (
        <div className="body-signup">
            <div className="container-signup">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item {...tailFormItemLayout}>
                        <h1>Đăng Ký</h1>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Mời bạn nhập email"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={["password"]}
                        label="Mật Khẩu"
                        rules={[
                            {
                                required: true,
                                message: "Mời bạn nhập mật khẩu"
                            },
                            {
                                message: "Mật khẩu phải hơn 8 kí tự",
                                min: 8
                            }
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Xác Nhận Mật Khẩu"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Mời bạn xác nhận mật khẩu"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        value &&
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve()
                                    }

                                    return Promise.reject(
                                        new Error("Mật khẩu không khớp")
                                    )
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        name="residence"
                        label="Nơi Cư Trú"
                        rules={[
                            {
                                type: "array",
                                required: true,
                                message: "Mời Bạn Chọn Nơi Cư Trú"
                            }
                        ]}
                    >
                        <Cascader options={residences} />
                    </Form.Item> */}

                    <Form.Item
                        name="name"
                        label="Tên Khách Hàng"
                        rules={[
                            {
                                required: true,
                                message: "Mời bạn nhập tên"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={"address"}
                        label="Địa Chỉ"
                        rules={[
                            {
                                required: true,
                                message: "Mời bạn nhập địa chỉ"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Số Điện Thoại"
                        rules={[
                            {
                                required: true,
                                message: "Mời bạn nhập số điện thoại"
                            },
                            {
                                max: 10,
                                message: "Số điện thoại không lớn hơn 10"
                            }
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: "100%"
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              new Error("Bạn chưa ấn đồng ý")
                                          )
                            }
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            Tôi đã đọc thỏa thuận.
                            {/* <u>
                                <a href="/dang-ky">thỏa thuận</a>
                            </u> */}
                        </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button
                            htmlType="submit"
                            type="primary"
                            className="button-signup"
                        >
                            Đăng Ký
                        </Button>

                        <Button
                            htmlType="button"
                            onClick={onReset}
                            className="button-signup"
                        >
                            Tạo Lại
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default SignupPage
