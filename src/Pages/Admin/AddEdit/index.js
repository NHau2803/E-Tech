import { CloseOutlined, LinkOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Col, Form, notification, Row, Space } from "antd"
import HardDriveAPI from "API/HardDrive"
import LaptopAPI from "API/Laptop"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import useFormData from "Components/Admin/UseData/UseFormData"
import {
    LIST_RENDER_DEFAULT,
    TYPE_CUSTOM_FIELD,
    TYPE_DRIVE,
    TYPE_PRODUCT
} from "Constants/Data"
import { VALIDATE_MESSAGES } from "Constants/Validate"
import { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { checkDiveType } from "Utils/CheckType"
import { getLS } from "Utils/Converter"
import "./AddEditPage.css"

const axios = require("axios")

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}

const AddEditPage = () => {
    const { productId, productType } = useParams()
    const isAddMode = !productId
    const [form] = Form.useForm()
    const history = useHistory()
    const redirectLaptops = () => history.push("/admin/laptops")
    const redirectDrives = () => history.push("/admin/drives")

    const {
        listOptions,
        info,
        spec,
        imageList,
        notify,
        setNotify,
        reLoadInitialValue,
        handleInputChange,
        changeInitialValueSpec,
        handleChooseIdSSD
    } = useFormData(isAddMode, productType, productId)
    // console.log("🚀 ~ file: index.js ~ line 78 ~ listOptions", listOptions)
    // console.log("🚀 ~ file: index.js ~ line 69 ~ imageList", imageList)
    console.log("🚀 ~ file: index.js ~ line 69 ~ spec", spec)
    // console.log("🚀 ~ file: index.js ~ line 69 ~ info", info)

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
        let imageArr = []
        imageList.map(item => imageArr.push(item.img))
        const images = {
            img1: imageArr[0],
            img2: imageArr[1],
            img3: imageArr[2]
        }

        if (
            info.type_id === 2 &&
            checkDiveType(spec.drive_type_id) === TYPE_DRIVE.IS_SSD
        ) {
            handleChooseIdSSD()
        }

        const create = { info, spec, images }

        console.log(
            "🚀 ~ file: index.js ~ line 89 ~ AddEditPage ~ create",
            create
        )
        switch (info.type_id) {
            case 1:
                LaptopAPI.create(create).then(res => {
                    if (res && res.notify) {
                        openNotification(
                            notify.type,
                            notify.title,
                            notify.message
                        )
                        redirectLaptops()
                    }
                })
                break
            case 2:
                HardDriveAPI.create(create).then(res => {
                    if (res && res.notify) {
                        openNotification(
                            notify.type,
                            notify.title,
                            notify.message
                        )
                        redirectDrives()
                    }
                })
                break
            default:
                break
        }
    }
    //------------------------COMPONENT RENDER---------------------
    const renderSpecLaptop = () => {
        return (
            <Col span={12}>
                <SelectField
                    name={"cpu_id"}
                    label={"Vi xử lí"}
                    initialValue={spec.cpu || ""}
                    options={getLS("cpus") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"ram_id"}
                    label={"Ram"}
                    initialValue={spec.ram || ""}
                    options={getLS("rams") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rom_id"}
                    label={"Lưu trữ"}
                    initialValue={spec.rom || ""}
                    options={getLS("roms") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"gpu_id"}
                    label={"Card đồ họa"}
                    initialValue={spec.gpu || ""}
                    options={getLS("gpus") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"screen_id"}
                    label={"Kích thướt màn hình"}
                    initialValue={spec.screen || ""}
                    options={getLS("sizes") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"port_id"}
                    label={"Kết nối chính"}
                    initialValue={spec.port || ""}
                    options={getLS("ports") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"battery_id"}
                    label={"PIN"}
                    initialValue={spec.battery || ""}
                    options={getLS("batteries") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"weight_id"}
                    label={"Trọng lượng"}
                    initialValue={spec.weight || ""}
                    options={getLS("weights") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"size_id"}
                    label={"Kích thước"}
                    initialValue={spec.size || ""}
                    options={getLS("sizes") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"os_id"}
                    label={"Hệ điều hành"}
                    initialValue={spec.os || ""}
                    options={getLS("os") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
            </Col>
        )
    }
    const renderSpecDrive = () => {
        return (
            <Col span={12}>
                <SelectField
                    name={"drive_type_id"}
                    label={"Kiểu ổ cứng"}
                    initialValue={!isAddMode ? spec.drive_type_id || "" : ""}
                    options={getLS("types") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"capacity_id"}
                    label={"Dung lượng"}
                    initialValue={!isAddMode ? spec.capacity_id || "" : ""}
                    options={getLS("capacities") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"connect_id"}
                    label={"Kết nối"}
                    initialValue={!isAddMode ? spec.connect_id || "" : ""}
                    options={getLS("connections") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"dimension_id"}
                    label={"Kích thướt"}
                    initialValue={!isAddMode ? spec.dimension_id || "" : ""}
                    options={getLS("dimensions") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"read_id"}
                    label={"Tốc độ đọc"}
                    initialValue={!isAddMode ? spec.read_id || "" : ""}
                    options={getLS("reads") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"write_id"}
                    label={"Tốc độ ghi"}
                    initialValue={!isAddMode ? spec.write_id || "" : ""}
                    options={getLS("writes") || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rotation_id"}
                    label={"Tốc độ quay"}
                    initialValue={!isAddMode ? spec.rotation_id || "" : ""}
                    options={getLS("rotations") || LIST_RENDER_DEFAULT}
                    rules={
                        checkDiveType(spec.drive_type_id) === TYPE_DRIVE.IS_SSD
                            ? []
                            : [{ required: true }]
                    }
                    disabled={
                        checkDiveType(spec.drive_type_id) === TYPE_DRIVE.IS_SSD
                            ? true
                            : false
                    }
                />
                <SelectField
                    name={"cache_id"}
                    label={"Bộ nhớm đệm"}
                    initialValue={!isAddMode ? spec.cache_id || "" : ""}
                    options={getLS("caches") || LIST_RENDER_DEFAULT}
                    rules={
                        checkDiveType(spec.drive_type_id) === TYPE_DRIVE.IS_SSD
                            ? []
                            : [{ required: true }]
                    }
                    disabled={
                        checkDiveType(spec.drive_type_id) === TYPE_DRIVE.IS_SSD
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
                case 1:
                    return renderSpecLaptop()
                case 2:
                    return renderSpecDrive()
                default:
                    break
            }
        } else {
            switch (productType) {
                case TYPE_PRODUCT.LAPTOP:
                    return renderSpecLaptop()
                case TYPE_PRODUCT.DRIVE:
                    return renderSpecDrive()
                default:
                    break
            }
        }
    }

    const handleRenderBrand = () => {
        if (isAddMode && info !== undefined) {
            switch (info.type_id) {
                case 1:
                    return getLS("laptop_brand")
                case 2:
                    return getLS("drive_brand")
                default:
                    break
            }
        } else {
            switch (productType) {
                case TYPE_PRODUCT.LAPTOP:
                    return getLS("laptop_brand")
                case TYPE_PRODUCT.DRIVE:
                    return getLS("drive_brand")
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
                                getLS("product_type") || LIST_RENDER_DEFAULT
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
