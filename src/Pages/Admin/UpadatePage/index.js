import { CloseOutlined, LinkOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Col, Form, notification, Row, Space } from "antd"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import InputField from "Components/Admin/CustomFields/InputField"
import SelectField from "Components/Admin/CustomFields/SelectField"
import {
    LIST_RENDER_DEFAULT,
    TYPE_CUSTOM_FIELD,
    TYPE_PRODUCT
} from "Constants/Data"
import { VALIDATE_MESSAGES } from "Constants/Validate"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { setIsSSDForCreateDrive } from "Redux/Admin/Product/ProductAdmin.reducer"
import {
    getProductApi,
    getSpecListApi,
    updateProductsApi
} from "Redux/Admin/Product/ProductAdmin.thunk"
import "../AddEditPage.css"
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}

const UpdatePage = () => {
    const { productType, productId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    // const [indexForm, setIndexForm] = useState(1)
    const filterAll = useSelector(state => state.ProductAdminReducer.filterAll)

    const isSSDForCreateDrive = useSelector(
        state => state.ProductAdminReducer.isSSDForCreateDrive
    )
    const [productUpdating, setProductUpdating] = useState(null)
    const [cancel, setCancel] = useState(false)

    //----------------------GET DATA FOR UPDATE-----------------------
    useEffect(() => {
        dispatch(getSpecListApi())
        dispatch(getProductApi(productType, productId)).then(res => {
            if (res && res.info) {
                setProductUpdating(res)
            } else {
                history.push("/admin/not-found")
            }
        })
    }, [])

    //----------------------RELOAD FORM---------------------------
    // useEffect(() => {
    //     setIndexForm(indexForm + 1)
    // }, [productTypeIdForCreate])

    //------------------------NOTIFY-----------------------------
    const openNotify = (type, title, message) => {
        notification[type]({
            message: title,
            description: message
        })
    }

    //------------------------SUBMIT------------------------------
    const onCancel = () => {
        setCancel(true)
        window.history.back()
    }
    const onFinish = values => {
        if (!cancel) {
            if (productUpdating && productUpdating.info.type_id === 1) {
                const imgs = {}
                productUpdating.image &&
                    productUpdating.image.forEach(item => {
                        imgs[item.id] = values[item.id]
                    })

                const bodyLaptop = {
                    info: {
                        id: productUpdating.info.id,
                        name: values.name,
                        description: values.description,
                        guarantee: Number(values.guarantee),
                        price: Number(values.price),
                        brand_id: Number(values.brand_id),
                        type_id: Number(values.type_id)
                    },
                    spec: {
                        cpu_id: Number(values.cpu_id),
                        gpu_id: Number(values.gpu_id),
                        ram_id: Number(values.ram_id),
                        size_id: Number(values.size_id),
                        rom_id: Number(values.rom_id),
                        screen_id: Number(values.screen_id),
                        port_id: Number(values.port_id),
                        os_id: Number(values.os_id),
                        battery_id: Number(values.battery_id),
                        weight_id: Number(values.weight_id)
                    },
                    images: imgs
                }

                dispatch(updateProductsApi("laptop", bodyLaptop)).then(notify =>
                    openNotify(notify.type, notify.title, notify.message)
                )
                window.history.back()
            }
            if (productUpdating && productUpdating.info.type_id === 2) {
                const imgs = {}
                productUpdating.image &&
                    productUpdating.image.forEach(item => {
                        imgs[item.id] = values[item.id]
                    })

                const bodyDrive = {
                    info: {
                        id: productUpdating.info.id,
                        name: values.name,
                        description: values.description,
                        guarantee: Number(values.guarantee),
                        price: Number(values.price),
                        brand_id: Number(values.brand_id),
                        type_id: Number(values.type_id)
                    },
                    spec: {
                        capacity_id: Number(values.capacity_id),
                        cache_id: isSSDForCreateDrive
                            ? 1
                            : Number(values.cache_id),
                        connect_id: Number(values.connect_id),
                        write_id: Number(values.write_id),
                        read_id: Number(values.read_id),
                        dimension_id: Number(values.dimension_id),
                        rotation_id: isSSDForCreateDrive
                            ? 1
                            : Number(values.rotation_id),
                        drive_type_id: Number(values.drive_type_id)
                    },
                    images: imgs
                }

                dispatch(updateProductsApi("drive", bodyDrive)).then(notify =>
                    openNotify(notify.type, notify.title, notify.message)
                )
                window.history.back()
            }
            if (
                !productUpdating.info.type_id === 1 ||
                !productUpdating.info.type_id === 2
            ) {
                openNotify(
                    "info",
                    "Thêm chưa thành công!",
                    "Tính năng đang cập nhật"
                )
            }
        }
    }

    //------------------------COMPONENT RENDER---------------------
    const renderSpecLaptop = () => {
        return (
            <Col span={12}>
                <SelectField
                    name={"cpu_id"}
                    label={"Vi xử lí"}
                    initialValue={
                        productUpdating && productUpdating.spec.cpu_id
                    }
                    options={
                        (filterAll && filterAll.laptop.cpus) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"ram_id"}
                    label={"Ram"}
                    initialValue={
                        productUpdating && productUpdating.spec.ram_id
                    }
                    options={
                        (filterAll && filterAll.laptop.rams) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rom_id"}
                    label={"Lưu trữ"}
                    initialValue={
                        productUpdating && productUpdating.spec.rom_id
                    }
                    options={
                        (filterAll && filterAll.laptop.roms) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"gpu_id"}
                    label={"Card đồ họa"}
                    initialValue={
                        productUpdating && productUpdating.spec.gpu_id
                    }
                    options={
                        (filterAll && filterAll.laptop.gpus) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"screen_id"}
                    label={"Kích thướt màn hình"}
                    initialValue={
                        productUpdating && productUpdating.spec.screen_id
                    }
                    options={
                        (filterAll && filterAll.laptop.screens) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"port_id"}
                    label={"Kết nối chính"}
                    initialValue={
                        productUpdating && productUpdating.spec.port_id
                    }
                    options={
                        (filterAll && filterAll.laptop.ports) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"battery_id"}
                    label={"PIN"}
                    initialValue={
                        productUpdating && productUpdating.spec.battery_id
                    }
                    options={
                        (filterAll && filterAll.laptop.batteries) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"weight_id"}
                    label={"Trọng lượng"}
                    initialValue={
                        productUpdating && productUpdating.spec.weight_id
                    }
                    options={
                        (filterAll && filterAll.laptop.weights) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"size_id"}
                    label={"Kích thước"}
                    initialValue={
                        productUpdating && productUpdating.spec.size_id
                    }
                    options={
                        (filterAll && filterAll.laptop.sizes) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"os_id"}
                    label={"Hệ điều hành"}
                    initialValue={productUpdating && productUpdating.spec.os_id}
                    options={
                        (filterAll && filterAll.laptop.os) ||
                        LIST_RENDER_DEFAULT
                    }
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
                    initialValue={
                        productUpdating && productUpdating.spec.drive_type_id
                    }
                    options={
                        (filterAll && filterAll.drive.types) ||
                        LIST_RENDER_DEFAULT
                    }
                    onChange={value => {
                        dispatch(
                            setIsSSDForCreateDrive(
                                value % 2 === 0 ? true : false
                            )
                        )
                    }}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"capacity_id"}
                    label={"Dung lượng"}
                    initialValue={
                        productUpdating && productUpdating.spec.capacity_id
                    }
                    options={
                        (filterAll && filterAll.drive.capacities) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"connect_id"}
                    label={"Kết nối"}
                    initialValue={
                        productUpdating && productUpdating.spec.connect_id
                    }
                    options={
                        (filterAll && filterAll.drive.connections) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"dimension_id"}
                    label={"Kích thướt"}
                    initialValue={
                        productUpdating && productUpdating.spec.dimension_id
                    }
                    options={
                        (filterAll && filterAll.drive.dimensions) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"read_id"}
                    label={"Tốc độ đọc"}
                    initialValue={
                        productUpdating && productUpdating.spec.read_id
                    }
                    options={
                        (filterAll && filterAll.drive.reads) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"write_id"}
                    label={"Tốc độ ghi"}
                    initialValue={
                        productUpdating && productUpdating.spec.write_id
                    }
                    options={
                        (filterAll && filterAll.drive.writes) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"rotation_id"}
                    label={"Tốc độ quay"}
                    initialValue={
                        productUpdating && productUpdating.spec.rotation_id
                    }
                    options={
                        (filterAll && filterAll.drive.rotations) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={isSSDForCreateDrive ? [] : [{ required: true }]}
                    disabled={isSSDForCreateDrive}
                />
                <SelectField
                    name={"cache_id"}
                    label={"Bộ nhớm đệm"}
                    initialValue={
                        productUpdating && productUpdating.spec.cache_id
                    }
                    options={
                        (filterAll && filterAll.drive.caches) ||
                        LIST_RENDER_DEFAULT
                    }
                    rules={isSSDForCreateDrive ? [] : [{ required: true }]}
                    disabled={isSSDForCreateDrive}
                />
            </Col>
        )
    }

    //------------------------HANDLE RENDER------------------------

    const handleRenderInfo = () => {
        return (
            <Col span={12}>
                <SelectField
                    name={"type_id"}
                    label={"Loại sản phẩm"}
                    initialValue={
                        productUpdating && productUpdating.info.type_id
                    }
                    options={
                        (filterAll && filterAll.type) || LIST_RENDER_DEFAULT
                    }
                    // onChange={value => {
                    //     dispatch(setProductTypeIdForCreate(value))
                    // }}
                    disabled={true}
                    rules={[{ required: true }]}
                />
                <SelectField
                    name={"brand_id"}
                    label={"Hãng sản phẩm"}
                    initialValue={
                        productUpdating && productUpdating.info.brand_id
                    }
                    options={handleRenderBrand() || LIST_RENDER_DEFAULT}
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.INPUT}
                    name={"name"}
                    label={"Tên sản phẩm"}
                    initialValue={productUpdating && productUpdating.info.name}
                    rules={[{ required: true }]}
                />

                {productUpdating.image &&
                    productUpdating.image.map(item => {
                        return (
                            <InputField
                                typeInput={TYPE_CUSTOM_FIELD.INPUT}
                                name={item.id}
                                label={"Link Ảnh"}
                                initialValue={item.img}
                                prefix={<LinkOutlined />}
                                rules={[{ required: true }]}
                            />
                        )
                    })}
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.TEXTAREA}
                    name={"description"}
                    label={"Mô tả sản phẩm"}
                    initialValue={
                        productUpdating && productUpdating.info.description
                    }
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.INPUT}
                    name={"price"}
                    label={"Giá sản phẩm"}
                    initialValue={productUpdating && productUpdating.info.price}
                    suffix={"VNĐ"}
                    rules={[{ required: true }]}
                />
                <InputField
                    typeInput={TYPE_CUSTOM_FIELD.INPUT_NUMBER}
                    name={"guarantee"}
                    label={"Thời gian bảo hành (tháng)"}
                    initialValue={
                        productUpdating && productUpdating.info.guarantee
                    }
                    rules={[
                        {
                            required: true,
                            type: "number",
                            min: 0,
                            max: 99
                        }
                    ]}
                />
            </Col>
        )
    }
    const handleRenderSpec = () => {
        switch ((productUpdating && productUpdating.info.type_id) || 0) {
            case 1:
                return renderSpecLaptop()
            case 2:
                return renderSpecDrive()
            default:
                return <p>Hệ thống đang cập nhật</p>
        }
    }

    const handleRenderBrand = () => {
        switch ((productUpdating && productUpdating.info.type_id) || 0) {
            case 1:
                return filterAll && filterAll.laptop.brands
            case 2:
                return filterAll && filterAll.drive.brands
            default:
                break
        }
    }
    return (
        <div>
            <BreadcrumbField
                list={[
                    "Admin",
                    productType === TYPE_PRODUCT.LAPTOP
                        ? "Cập nhật Laptop"
                        : "Cập nhật Ổ Cứng"
                ]}
            />
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                {"Cập nhật sản phẩm"}
            </h3>
            <Form
                // form={form}
                // key={indexForm}
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={VALIDATE_MESSAGES}
                // onFieldsChange={(_, allFields) => {
                //     handleInputChange(allFields)
                // }}
            >
                <Row>
                    {/* RENDER WHEN HAVE DATA */}
                    {productUpdating && productUpdating.info
                        ? handleRenderInfo()
                        : ""}
                    {/* RENDER SPEC */}
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
                                Cập nhật
                            </Button>
                            <Button
                                text="Hủy"
                                htmlType="cancel"
                                icon={<CloseOutlined />}
                                onClick={() => onCancel()}
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

export default UpdatePage
