import { Input, Form, InputNumber } from "antd"
import { TYPE_CUSTOM_FIELD } from "Constants/Data"

const InputField = props => {
    const { typeInput, name, label, rules } = props
    return (
        <Form.Item name={name} label={label} rules={rules}>
            {typeInput === TYPE_CUSTOM_FIELD.INPUT_NUMBER ? (
                <InputNumber />
            ) : typeInput === TYPE_CUSTOM_FIELD.TEXTAREA ? (
                <Input.TextArea />
            ) : (
                <Input />
            )}
        </Form.Item>
    )
}

export default InputField
