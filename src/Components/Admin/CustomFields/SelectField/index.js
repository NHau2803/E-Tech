import { Form, Select } from "antd"

const SelectField = props => {
    const { name, label, rules, options } = props
    return (
        <Form.Item name={name} label={label} rules={rules}>
            <Select>
                {options.map(item => (
                    <Select.Option key={item.id} value={item.id + ""}>
                        {item.title}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

export default SelectField
