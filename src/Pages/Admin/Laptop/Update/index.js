import {
    BankFilled,
    CloseOutlined,
    LinkOutlined,
    SaveOutlined
} from "@ant-design/icons"
import { Form, Button, Space, Row, Col, notification } from "antd"
import { useForm } from "antd/lib/form/Form"
import axiosClient from "API/ClientAxios"
import GetOptionsAPI from "API/GetOptions"
import LaptopAPI from "API/Laptop"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import useFormData from "Components/Admin/UseData/UseFormData"
import { LIST_RENDER_DEFAULT, TYPE_CUSTOM_FIELD } from "Constants/Data"
import { VALIDATE_MESSAGES } from "Constants/Validate"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getOptionsLocalStorage } from "Utils/Converter"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}

const UpdateLaptopPage = () => {
    const { productId, productType } = useParams()
    const isAddMode = !productId
    const history = useHistory()
    const redirectLaptops = () => history.push("/admin/laptops")
    const [form] = Form.useForm()

    const {
        info,
        spec,
        imageList,
        notify,
        setNotify,
        reLoadInitialValue,
        handleInputChange,
        changeInitialValueSpec
    } = useFormData(isAddMode, productType, productId)

    //---------------------------HANDLE RELOAD INITIAL VALUE WHEN UPDATE---------------------
    // todo: reload when state have data from api. Because render firstly initialValue = "" => need reload
    useEffect(() => {
        form.resetFields()
    }, [spec])

    //---------------------------HANDLE RELOAD INITIAL VALUE WHEN ADD---------------------
    // todo: reload data of spec when change type

    const openNotification = (type, title, message) => {
        notification[type]({
            message: title,
            description: message,
            title
        })
    }

    const onFinish = values => {
        let imageArr = []
        let imageIds = []
        imageList.map(item => imageArr.push(item.img))
        imageList.map(item => imageIds.push(String(item.id)))
        let images = {}
        imageIds.forEach((key, i) => (images[key] = imageArr[i]))
        const update = { info, spec, images }
        console.log(
            "🚀 ~ file: index.js ~ line 89 ~ AddEditPage ~ update",
            update
        )
        // ========> SHOW MES
        LaptopAPI.update(update).then(res => {
            if (res && res.notify) {
                openNotification(
                    notify.type,
                    notify.title,
                    "Cập nhật thành công!"
                )
                redirectLaptops()
            }
        })
    }

    return (
        <div>
            <BreadcrumbField list={["ADMIN", "POST"]} />
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                Cập Nhật Laptop
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
            >
                <Row>
                    <Col span={12}>
                        <SelectField
                            name={"type_id"}
                            label={"Loại sản phẩm"}
                            disabled={!isAddMode ? true : false}
                            initialValue={info.type_id || ""}
                            options={
                                getOptionsLocalStorage("product_type") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"brand_id"}
                            label={"Hãng sản phẩm"}
                            initialValue={info.brand_id || ""}
                            options={
                                getOptionsLocalStorage("laptop_brand") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"name"}
                            label={"Tên sản phẩm"}
                            initialValue={info.name || ""}
                            rules={[{ required: true }]}
                        />
                        {imageList.map(item => (
                            <InputField
                                typeInput={TYPE_CUSTOM_FIELD.INPUT}
                                name={item.id}
                                label={"Link Ảnh"}
                                initialValue={item.img || ""}
                                prefix={<LinkOutlined />}
                                rules={[{ required: true }]}
                            />
                        ))}
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
                            options={
                                getOptionsLocalStorage("cpus") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"ram_id"}
                            label={"Ram"}
                            initialValue={spec.ram_id || ""}
                            options={
                                getOptionsLocalStorage("rams") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"rom_id"}
                            label={"Lưu trữ"}
                            initialValue={spec.rom_id || ""}
                            options={
                                getOptionsLocalStorage("roms") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"gpu_id"}
                            label={"Card đồ họa"}
                            initialValue={spec.gpu_id || ""}
                            options={
                                getOptionsLocalStorage("gpus") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"screen_id"}
                            label={"Kích thướt màn hình"}
                            initialValue={spec.screen_id || ""}
                            options={
                                getOptionsLocalStorage("sizes") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"port_id"}
                            label={"Kết nối chính"}
                            initialValue={spec.port_id || ""}
                            options={
                                getOptionsLocalStorage("ports") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"battery_id"}
                            label={"PIN"}
                            initialValue={spec.battery_id || ""}
                            options={
                                getOptionsLocalStorage("batteries") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"weight_id"}
                            label={"Trọng lượng"}
                            initialValue={spec.weight_id || ""}
                            options={
                                getOptionsLocalStorage("weights") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"size_id"}
                            label={"Kích thước"}
                            initialValue={spec.size_id || ""}
                            options={
                                getOptionsLocalStorage("sizes") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"os_id"}
                            label={"Hệ điều hành"}
                            initialValue={spec.os_id || ""}
                            options={
                                getOptionsLocalStorage("os") ||
                                LIST_RENDER_DEFAULT
                            }
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
export default UpdateLaptopPage
