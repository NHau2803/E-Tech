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
import ProductAPI from "API/ProductAPI"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import useFormData from "Components/Admin/UseData/UseFormData"
import {
    LIST_RENDER_DEFAULT,
    BRAND_HARD_DRIVE,
    SPEC_VALUE_HARD_DRIVE_CACHE,
    SPEC_VALUE_HARD_DRIVE_CAPACITY,
    SPEC_VALUE_HARD_DRIVE_CONNECT,
    SPEC_VALUE_HARD_DRIVE_DIMENSION,
    SPEC_VALUE_HARD_DRIVE_READ_SPEED,
    SPEC_VALUE_HARD_DRIVE_RECORD_SPEED,
    SPEC_VALUE_HARD_DRIVE_ROTATION_SPEED,
    SPEC_VALUE_HARD_DRIVE_TYPE,
    TYPE_ADMIN_PAGE,
    TYPE_HARD_DRIVE
} from "Constants/Data"
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
    TYPE_PRODUCT,
    TYPE_PRODUCT_RENDER
} from "Constants/Data"
import { VALIDATE_MESSAGES } from "Constants/Validate"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { checkHardDiveType } from "Utils/CheckType"
import { getOptionsLocalStorage } from "Utils/Converter"
import saveOptionsFromAPI from "Utils/SaveToLocalStorage"
import "./AddEditPage.css"
const axios = require("axios")

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}

const AddEditPage = props => {
    const { productId, productType } = useParams()
    const isAddMode = !productId
    const history = useHistory()
    const [form] = Form.useForm()

    const {
        listOptions,
        info,
        spec,
        image,
        notify,
        setNotify,
        reLoadInitialValue,
        handleInputChange,
        changeInitialValueSpec
    } = useFormData(isAddMode, productType, productId)
    console.log("🚀 ~ file: index.js ~ line 78 ~ listOptions", listOptions)
    // console.log("🚀 ~ file: index.js ~ line 69 ~ image", image)
    // console.log("🚀 ~ file: index.js ~ line 69 ~ spec", spec)
    // console.log("🚀 ~ file: index.js ~ line 69 ~ info", info)

    //---------------------------SAVE OPTIONS-----------------------------------------------
    // useEffect(() => {
    //     saveOptionsFromAPI()

    // }, [])

    //---------------------------HANDLE RELOAD INITIAL VALUE WHEN UPDATE---------------------
    // todo: reload when state have data from api. Because render firstly initialValue = "" => need reload
    useEffect(() => {
        form.resetFields()
    }, [reLoadInitialValue])

    //---------------------------HANDLE RELOAD INITIAL VALUE WHEN ADD---------------------
    // todo: reload data of spec when change type
    useEffect(() => {
        changeInitialValueSpec()
    }, [info.type_id])

    const openNotification = (type, title, message) => {
        notification[type]({
            message: title,
            description: message,
            title
        })
    }

    const onFinish = values => {
        const create = { info, spec, image }
        console.log("🚀 ~ file: index.js ~ line 68 ~ create", create)
        openNotification(notify.type, notify.title, notify.message)
        // ProductAPI.create(create).then(res => {
        //     console.log(res)
        // })
        // LaptopAPI.create(create).then(res => {
        //     console.log(res)
        // })
    }
    //------------------------COMPONENT RENDER---------------------
    const renderSpecLaptop = () => {
        return (
            <Col span={12}>
                <SelectField
                    name={"cpu_id"}
                    label={"Vi xử lí"}
                    initialValue={spec.cpu_id || ""}
                    options={listOptions.cpus || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"ram_id"}
                    label={"Ram"}
                    initialValue={spec.ram_id || ""}
                    options={listOptions.rams || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rom_id"}
                    label={"Lưu trữ"}
                    initialValue={spec.rom_id || ""}
                    options={listOptions.roms || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"gpu_id"}
                    label={"Card đồ họa"}
                    initialValue={spec.gpu_id || ""}
                    options={listOptions.gpus || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"screen_id"}
                    label={"Kích thướt màn hình"}
                    initialValue={spec.screen_id || ""}
                    options={listOptions.screens || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"port_id"}
                    label={"Kết nối chính"}
                    initialValue={spec.port_id || ""}
                    options={listOptions.ports || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"battery_id"}
                    label={"PIN"}
                    initialValue={spec.battery_id || ""}
                    options={listOptions.batteries || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"weight_id"}
                    label={"Trọng lượng"}
                    initialValue={spec.weight_id || ""}
                    options={listOptions.weights || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"size_id"}
                    label={"Kích thước"}
                    initialValue={spec.size_id || ""}
                    options={listOptions.sizes || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"os_id"}
                    label={"Hệ điều hành"}
                    initialValue={spec.os_id || ""}
                    options={listOptions.os || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
            </Col>
        )
    }
    const renderSpecHardDrive = () => {
        return (
            <Col span={12}>
                <SelectField
                    name={"hard_drive_type_id"}
                    label={"Kiểu ổ cứng"}
                    initialValue={
                        !isAddMode ? spec.hard_drive_type_id || "" : ""
                    }
                    options={SPEC_VALUE_HARD_DRIVE_TYPE}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"capacity_id"}
                    label={"Dung lượng"}
                    initialValue={!isAddMode ? spec.capacity_id || "" : ""}
                    options={SPEC_VALUE_HARD_DRIVE_CAPACITY}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"connect_id"}
                    label={"Kết nối"}
                    initialValue={!isAddMode ? spec.connect_id || "" : ""}
                    options={SPEC_VALUE_HARD_DRIVE_CONNECT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"dimension_id"}
                    label={"Kích thướt"}
                    initialValue={!isAddMode ? spec.dimension_id || "" : ""}
                    options={SPEC_VALUE_HARD_DRIVE_DIMENSION}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"read_speed_id"}
                    label={"Tốc độ đọc"}
                    initialValue={!isAddMode ? spec.read_speed_id || "" : ""}
                    options={SPEC_VALUE_HARD_DRIVE_READ_SPEED}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"record_speed_id"}
                    label={"Tốc độ ghi"}
                    initialValue={!isAddMode ? spec.record_speed_id || "" : ""}
                    options={SPEC_VALUE_HARD_DRIVE_RECORD_SPEED}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rotation_speed_id"}
                    label={"Tốc độ quay"}
                    initialValue={
                        !isAddMode ? spec.rotation_speed_id || "" : ""
                    }
                    options={SPEC_VALUE_HARD_DRIVE_ROTATION_SPEED}
                    rules={[{ required: true }]}
                    disabled={
                        checkHardDiveType(spec.hard_drive_type_id) ===
                        TYPE_HARD_DRIVE.IS_SSD
                            ? true
                            : false
                    }
                />
                <SelectField
                    name={"cache_id"}
                    label={"Bộ nhớm đệm"}
                    initialValue={!isAddMode ? spec.cache_id || "" : ""}
                    options={SPEC_VALUE_HARD_DRIVE_CACHE}
                    rules={[{ required: true }]}
                    disabled={
                        checkHardDiveType(spec.hard_drive_type_id) ===
                        TYPE_HARD_DRIVE.IS_SSD
                            ? true
                            : false
                    }
                />
            </Col>
        )
    }

    //------------------------HANDLE RENDER------------------------
    const handleRenderSpec = () => {
        if (isAddMode && info !== undefined) {
            switch (info.type_id) {
                case 2:
                    return renderSpecLaptop()
                case 3:
                    return renderSpecHardDrive()
                default:
                    break
            }
        } else {
            switch (productType) {
                case TYPE_PRODUCT.LAPTOP:
                    return renderSpecLaptop()
                case TYPE_PRODUCT.HARD_DRIVE:
                    return renderSpecHardDrive()
                default:
                    break
            }
        }
    }

    const handleRenderBrand = () => {
        if (isAddMode && info !== undefined) {
            switch (info.type_id) {
                case 2:
                    return getOptionsLocalStorage("BRAND_LAPTOP")
                case 3:
                    return getOptionsLocalStorage("BRAND_HARD_DRIVE")
                default:
                    break
            }
        } else {
            switch (productType) {
                case TYPE_PRODUCT.LAPTOP:
                    return getOptionsLocalStorage("BRAND_LAPTOP")
                case TYPE_PRODUCT.HARD_DRIVE:
                    return getOptionsLocalStorage("BRAND_HARD_DRIVE")
                default:
                    break
            }
        }
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
            >
                <Row>
                    <Col span={12}>
                        <SelectField
                            name={"type_id"}
                            label={"Loại sản phẩm"}
                            disabled={!isAddMode ? true : false}
                            initialValue={info.type_id || ""}
                            options={
                                getOptionsLocalStorage("TYPE_PRODUCT_RENDER") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"brand_id"}
                            label={"Hãng sản phẩm"}
                            initialValue={info.brand_id || ""}
                            options={handleRenderBrand() || LIST_RENDER_DEFAULT}
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
                    {/* render col right */}
                    {handleRenderSpec()}
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
