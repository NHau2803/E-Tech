import { Form, Select } from "antd"

const SelectField = props => {
    const {
        name,
        label,
        initialValue,
        rules,
        options,
        disabled = false,
        onChange
    } = props

    return (
        <Form.Item
            name={name}
            label={label}
            rules={rules}
            initialValue={initialValue}
        >
            <Select
                disabled={disabled}
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
                value={["1"]}
                onChange={onChange}
            >
                {options &&
                    options.map(item => (
                        <Select.Option key={item.id} value={item.id}>
                            {item.value}
                        </Select.Option>
                    ))}
            </Select>
        </Form.Item>
    )
}

export default SelectField
