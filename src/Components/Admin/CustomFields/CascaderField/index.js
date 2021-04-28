import { Form, Cascader } from "antd"
const CascaderField = props => {
    const { typeInput, name, label, rules } = props
    return (
        <Form.Item label={label}>
            <Cascader
                options={[
                    {
                        value: "a",
                        label: "a",
                        children: [
                            {
                                value: "a0",
                                label: "a0"
                            },
                            {
                                value: "a1",
                                label: "a1"
                            },
                            {
                                value: "a2",
                                label: "a2"
                            }
                        ]
                    },
                    {
                        value: "b",
                        label: "b",
                        children: [
                            {
                                value: "b0",
                                label: "b0"
                            },
                            {
                                value: "b1",
                                label: "b1"
                            },
                            {
                                value: "b2",
                                label: "b2"
                            }
                        ]
                    },
                    {
                        value: "c",
                        label: "c",
                        children: [
                            {
                                value: "c0",
                                label: "c0"
                            },
                            {
                                value: "c1",
                                label: "c1"
                            }
                        ]
                    }
                ]}
            />
        </Form.Item>
    )
}

export default CascaderField
