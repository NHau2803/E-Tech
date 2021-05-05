import { Form, Select } from "antd"

const SelectField = props => {
    const { name, label, initialValue, rules, options } = props

    return (
        <Form.Item
            name={name}
            label={label}
            rules={rules}
            initialValue={initialValue}
        >
            <Select
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                }
                // value={["1"]}
            >
                {options.map(item => (
                    <Select.Option key={item.id} value={item.id}>
                        {item.title}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

export default SelectField
