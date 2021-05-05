import React, { useState } from "react"
import "./SignUpPage.css"
import {
    Form,
    Input,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete
} from "antd"

const { Option } = Select
const residences = [
    {
        value: "Hà Nội",
        label: "Hà Nội",
        children: [
            {
                value: "Quận",
                label: "Quận"
                // children: [
                //     {
                //         value: "Đường",
                //         label: "Đường"
                //     }
                // ]
            }
        ]
    },
    {
        value: "Thành Phố Hồ Chí Minh",
        label: "Thành Phố Hồ Chí Minh",
        children: [
            {
                value: "Quận",
                label: "Quận"
                // children: [
                //     {
                //         value: "Đường",
                //         label: "Đường"
                //     }
                // ]
            }
        ]
    }
]

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

    const onFinish = values => {
        console.log("Received values of form: ", values)
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
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
        if (!value) {
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
                    initialValues={{
                        residence: ["Hà Nội", "Quận", "xihu"],
                        prefix: "86"
                    }}
                    scrollToFirstError
                >
                    <Form.Item {...tailFormItemLayout}>
                        {/* <img alt="Logo" src={Images.Logo1}></img> */}
                        <h1>Đăng Ký</h1>
                    </Form.Item>

                    <Form.Item
                        name="username"
                        label="Tên Đăng Nhập"
                        rules={[
                            {
                                required: true,
                                message: "Mời Bạn Nhập Tên Đăng Nhập!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Mật Khẩu"
                        rules={[
                            {
                                required: true,
                                message: "Mời Bạn Nhập Mật Khẩu!"
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
                                message: "Mời Bạn Xác Nhận Mật Khẩu!"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve()
                                    }

                                    return Promise.reject(
                                        new Error(
                                            "Hai mật khẩu bạn đã nhập không khớp!"
                                        )
                                    )
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
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
                    </Form.Item>
                    <Form.Item
                        name={["address", "street"]}
                        label="Địa Chỉ Nhà"
                        rules={[
                            {
                                required: true,
                                message: "Mời Bạn Nhập Địa Chỉ Nhà"
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
                                message: "Mời Bạn Nhập Số Điện Thoại"
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
                                              new Error(
                                                  "Should accept agreement"
                                              )
                                          )
                            }
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the{" "}
                            <u>
                                <a href="/#">agreement</a>
                            </u>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button htmlType="submit" className="button-signup">
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
