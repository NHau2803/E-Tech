import { CloseOutlined, LinkOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Col, Form, notification, Row, Space } from "antd"
import HardDriveAPI from "API/HardDrive"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import useFormData from "Components/Admin/UseData/UseFormData"
import {
    LIST_RENDER_DEFAULT,
    TYPE_CUSTOM_FIELD,
    TYPE_DRIVE
} from "Constants/Data"
import { VALIDATE_MESSAGES } from "Constants/Validate"
import { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { checkDiveType } from "Utils/CheckType"
import { getOptionsLocalStorage } from "Utils/Converter"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}

const UpdateDrivePage = () => {
    const { productId, productType } = useParams()
    const isAddMode = !productId
    const history = useHistory()
    const redirectDrives = () => history.push("/admin/drives")
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
    console.log(
        "🚀 ~ file: index.js ~ line 49 ~ UpdateDrivePage ~ imageList",
        imageList
    )

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
        HardDriveAPI.update(update).then(res => {
            if (res && res.notify) {
                openNotification(
                    notify.type,
                    notify.title,
                    "Cập nhật thành công!"
                )
                redirectDrives()
            }
        })
    }

    return (
        <div>
            <BreadcrumbField list={["ADMIN", "POST"]} />
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                Cập Nhật Ổ Cứng
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
                            name={"drive_type_id"}
                            label={"Kiểu ổ cứng"}
                            initialValue={
                                !isAddMode ? spec.drive_type_id || "" : ""
                            }
                            options={
                                getOptionsLocalStorage("types") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"capacity_id"}
                            label={"Dung lượng"}
                            initialValue={
                                !isAddMode ? spec.capacity_id || "" : ""
                            }
                            options={
                                getOptionsLocalStorage("capacities") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"connect_id"}
                            label={"Kết nối"}
                            initialValue={
                                !isAddMode ? spec.connect_id || "" : ""
                            }
                            options={
                                getOptionsLocalStorage("connections") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"dimension_id"}
                            label={"Kích thướt"}
                            initialValue={
                                !isAddMode ? spec.dimension_id || "" : ""
                            }
                            options={
                                getOptionsLocalStorage("dimensions") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"read_id"}
                            label={"Tốc độ đọc"}
                            initialValue={!isAddMode ? spec.read_id || "" : ""}
                            options={
                                getOptionsLocalStorage("reads") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"write_id"}
                            label={"Tốc độ ghi"}
                            initialValue={!isAddMode ? spec.write_id || "" : ""}
                            options={
                                getOptionsLocalStorage("writes") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"rotation_id"}
                            label={"Tốc độ quay"}
                            initialValue={
                                !isAddMode ? spec.rotation_id || "" : ""
                            }
                            options={
                                getOptionsLocalStorage("rotations") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                            disabled={
                                checkDiveType(spec.drive_type_id) ===
                                TYPE_DRIVE.IS_SSD
                                    ? true
                                    : false
                            }
                        />
                        <SelectField
                            name={"cache_id"}
                            label={"Bộ nhớm đệm"}
                            initialValue={!isAddMode ? spec.cache_id || "" : ""}
                            options={
                                getOptionsLocalStorage("caches") ||
                                LIST_RENDER_DEFAULT
                            }
                            rules={[{ required: true }]}
                            disabled={
                                checkDiveType(spec.drive_type_id) ===
                                TYPE_DRIVE.IS_SSD
                                    ? true
                                    : false
                            }
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
export default UpdateDrivePage
