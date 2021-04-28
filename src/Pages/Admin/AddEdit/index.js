import { Form, Button, Space, Layout } from "antd"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import {
    BRAND_LAPTOP,
    SPEC_VALUE_LAPTOP_BATTERY,
    SPEC_VALUE_LAPTOP_CPU,
    SPEC_VALUE_LAPTOP_GPU,
    SPEC_VALUE_LAPTOP_OS,
    SPEC_VALUE_LAPTOP_PORT,
    SPEC_VALUE_LAPTOP_RAM,
    SPEC_VALUE_LAPTOP_ROM,
    SPEC_VALUE_LAPTOP_SCREEN,
    SPEC_VALUE_LAPTOP_SIZE,
    SPEC_VALUE_LAPTOP_WEIGHT,
    TYPE_CUSTOM_FIELD,
    TYPE_PRODUCT
} from "Constants/Data"
import "./AddEditPage.css"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
}

const validateMessages = {
    required: "Không được bỏ trống!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!"
    },
    number: {
        range: "${label} must be between ${min} and ${max}"
    }
}

const AddEditPage = () => {
    const onFinish = values => {
        console.log(values)
    }

    return (
        <div>
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                Thêm mới sản phẩm
            </h3>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <SelectField
                    name={"type_id"}
                    label={"Loại sản phẩm"}
                    options={TYPE_PRODUCT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"brand_id"}
                    label={"Hãng sản phẩm"}
                    options={BRAND_LAPTOP}
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.INPUT}
                    name={"name"}
                    label={"Tên sản phẩm"}
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.TEXTAREA}
                    name={"description"}
                    label={"Mô tả sản phẩm"}
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.INPUT}
                    name={"price"}
                    label={"Giá sản phẩm"}
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.INPUT_NUMBER}
                    name={"guarantee"}
                    label={"Thời gian bảo hành (tháng)"}
                    rules={[
                        {
                            required: true,
                            type: "number",
                            min: 0,
                            max: 99
                        }
                    ]}
                />
                <SelectField
                    name={"cpu_id"}
                    label={"Vi xử lí"}
                    options={SPEC_VALUE_LAPTOP_CPU}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"ram_id"}
                    label={"Ram"}
                    options={SPEC_VALUE_LAPTOP_RAM}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rom_id"}
                    label={"Lưu trữ"}
                    options={SPEC_VALUE_LAPTOP_ROM}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"gpu_id"}
                    label={"Card đồ họa"}
                    options={SPEC_VALUE_LAPTOP_GPU}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"screen_id"}
                    label={"Kích thướt màn hình"}
                    options={SPEC_VALUE_LAPTOP_SCREEN}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"port_id"}
                    label={"Kết nối chính"}
                    options={SPEC_VALUE_LAPTOP_PORT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"battery_id"}
                    label={"PIN"}
                    options={SPEC_VALUE_LAPTOP_BATTERY}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"weight_id"}
                    label={"Trọng lượng"}
                    options={SPEC_VALUE_LAPTOP_WEIGHT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"size_id"}
                    label={"Kích thước"}
                    options={SPEC_VALUE_LAPTOP_SIZE}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"system_id"}
                    label={"Hệ điều hành"}
                    options={SPEC_VALUE_LAPTOP_OS}
                    rules={[{ required: true }]}
                />

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Space size={"small"}>
                        <Button type="primary" htmlType="submit">
                            Lưu
                        </Button>
                        <Button htmlType="cancel">Hủy</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddEditPage
