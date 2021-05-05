import { CloseOutlined, LinkOutlined, SaveOutlined } from "@ant-design/icons"
import { Form, Button, Space, Row, Col } from "antd"
import { useForm } from "antd/lib/form/Form"
import ProductAPI from "API/ProductAPI"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import useFormData from "Components/Admin/UseData/UseFormData"
import {
    DATA_CREATE,
    INITIAL_VALUES_DEFAULT,
    INITIAL_VALUES_LAPTOP_DEFAULT,
    TYPE_ADMIN_PAGE
} from "Constants/Data"
import {
    BRAND_LAPTOP,
    DATA_POST,
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
    TYPE_PRODUCT,
    TYPE_PRODUCT_RENDER
} from "Constants/Data"
import { VALIDATE_MESSAGES } from "Constants/Validate"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./AddEditPage.css"
const axios = require("axios")

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}

const AddEditPage = props => {
    const { productId } = useParams()
    const isAddMode = !productId

    const history = useHistory()
    const [form] = Form.useForm()

    const {
        info,
        spec,
        image,
        reLoadInitialValue,
        handleInputChange
    } = useFormData(isAddMode, TYPE_PRODUCT.LAPTOP, productId)
    console.log("🚀 ~ file: index.js ~ line 69 ~ image", image)
    console.log("🚀 ~ file: index.js ~ line 69 ~ spec", spec)
    console.log("🚀 ~ file: index.js ~ line 69 ~ info", info)

    useEffect(() => {
        form.resetFields()
    }, [reLoadInitialValue])

    // if (info) {
    //     form.resetFields()
    //     console.log("🚀 ~ file: index.js ~ line 61 ~ info", info)
    // }

    const onFinish = values => {
        const create = { info, spec, image }
        console.log("🚀 ~ file: index.js ~ line 68 ~ create", create)

        // ProductAPI.create(create).then(res => {
        //     console.log(res)
        // })
    }

    return (
        <div>
            <BreadcrumbField list={["ADMIN", "POST"]} />
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                {!isAddMode ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"}
            </h3>
            <Form
                form={form}
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={VALIDATE_MESSAGES}
                onFieldsChange={(_, allFields) => {
                    handleInputChange(allFields)
                }}
                // initialValues={info}
            >
                <Row>
                    <Col span={12}>
                        <SelectField
                            name={"type_id"}
                            label={"Loại sản phẩm"}
                            initialValue={info.type_id || ""}
                            options={TYPE_PRODUCT_RENDER}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"brand_id"}
                            label={"Hãng sản phẩm"}
                            initialValue={info.brand_id || ""}
                            options={BRAND_LAPTOP}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"name"}
                            label={"Tên sản phẩm"}
                            initialValue={info.name || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"img1"}
                            label={"Link Ảnh 1"}
                            initialValue={image.img1 || ""}
                            prefix={<LinkOutlined />}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"img2"}
                            label={"Link Ảnh 2"}
                            initialValue={image.img2 || ""}
                            prefix={<LinkOutlined />}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"img3"}
                            label={"Link Ảnh 3"}
                            initialValue={image.img3 || ""}
                            prefix={<LinkOutlined />}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.TEXTAREA}
                            name={"description"}
                            label={"Mô tả sản phẩm"}
                            initialValue={info.description || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"price"}
                            label={"Giá sản phẩm"}
                            initialValue={info.price || ""}
                            suffix={"VNĐ"}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT_NUMBER}
                            name={"guarantee"}
                            label={"Thời gian bảo hành (tháng)"}
                            initialValue={info.guarantee || ""}
                            rules={
                                !isAddMode
                                    ? []
                                    : [
                                          {
                                              required: true,
                                              type: "number",
                                              min: 0,
                                              max: 99
                                          }
                                      ]
                            }
                        />
                    </Col>
                    <Col span={12}>
                        <SelectField
                            name={"cpu_id"}
                            label={"Vi xử lí"}
                            initialValue={spec.cpu_id || ""}
                            options={SPEC_VALUE_LAPTOP_CPU}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"ram_id"}
                            label={"Ram"}
                            initialValue={spec.ram_id || ""}
                            options={SPEC_VALUE_LAPTOP_RAM}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"rom_id"}
                            label={"Lưu trữ"}
                            initialValue={spec.rom_id || ""}
                            options={SPEC_VALUE_LAPTOP_ROM}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"gpu_id"}
                            label={"Card đồ họa"}
                            initialValue={spec.gpu_id || ""}
                            options={SPEC_VALUE_LAPTOP_GPU}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"screen_id"}
                            label={"Kích thướt màn hình"}
                            initialValue={spec.screen_id || ""}
                            options={SPEC_VALUE_LAPTOP_SCREEN}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"port_id"}
                            label={"Kết nối chính"}
                            initialValue={spec.port_id || ""}
                            options={SPEC_VALUE_LAPTOP_PORT}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"battery_id"}
                            label={"PIN"}
                            initialValue={spec.battery_id || ""}
                            options={SPEC_VALUE_LAPTOP_BATTERY}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"weight_id"}
                            label={"Trọng lượng"}
                            initialValue={spec.weight_id || ""}
                            options={SPEC_VALUE_LAPTOP_WEIGHT}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"size_id"}
                            label={"Kích thước"}
                            initialValue={spec.size_id || ""}
                            options={SPEC_VALUE_LAPTOP_SIZE}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"os_id"}
                            label={"Hệ điều hành"}
                            initialValue={spec.os_id || ""}
                            options={SPEC_VALUE_LAPTOP_OS}
                            rules={[{ required: true }]}
                        />
                    </Col>
                    <Row
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Space size={"small"}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                icon={<SaveOutlined />}
                            >
                                Lưu
                            </Button>
                            <Button
                                text="Hủy"
                                htmlType="cancel"
                                icon={<CloseOutlined />}
                                onClick={history.goBack}
                            >
                                Hủy
                            </Button>
                        </Space>
                    </Row>
                </Row>
            </Form>
        </div>
    )
}
export default AddEditPage
