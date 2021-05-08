import {
    DeleteOutlined,
    FileSearchOutlined,
    FormOutlined,
    ReloadOutlined
} from "@ant-design/icons"
import { Layout, Table, Form, Space, Button, message, notification } from "antd"
import Search from "antd/lib/input/Search"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import MessageField from "Components/Admin/CustomFields/Message"
import {
    BRAND_LAPTOP_FILTER,
    DOSSIER_DATA,
    SPEC_VALUE_LAPTOP_RAM,
    SPEC_VALUE_LAPTOP_RAM_FILTER,
    SPEC_VALUE_LAPTOP_SCREEN_FILTER
} from "Constants/Data"
import { useState } from "react"
import { Link, useRouteMatch } from "react-router-dom"

const { Content } = Layout

const DossierData = () => {
    const [form] = Form.useForm()
    const [data, setData] = useState(DOSSIER_DATA)
    const [editingKey, setEditingKey] = useState("")

    const match = useRouteMatch()

    // ---------------------even---------------------

    const cancel = () => {
        setEditingKey("")
    }
    const handleSave = async key => {
        try {
            const row = await form.validateFields() // Get data

            //call api cap nhat data
        } catch (errInfo) {
            console.log({ errInfo })
        }
    }
    const handleDelete = key => {
        //Call api delete data
        console.log(key)
        return <MessageField />
    }
    // ---------------------table---------------------
    const columns = [
        {
            id: 1,
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: "12%"
        },
        {
            id: 2,
            title: "Hãng",
            dataIndex: "brand",
            filters: BRAND_LAPTOP_FILTER,
            onFilter: (value, record) => record.brand.includes(value),
            width: "8%"
        },
        {
            id: 3,
            title: "Vi xử lí",
            dataIndex: "cpu",
            filters: SPEC_VALUE_LAPTOP_SCREEN_FILTER,
            onFilter: (value, record) => record.screen.includes(value),
            width: "8%"
        },
        {
            id: 4,
            title: "Ram",
            dataIndex: "ram",
            filters: SPEC_VALUE_LAPTOP_RAM,
            onFilter: (id, record) => record.ram.includes(id),
            width: "6%"
        },
        {
            id: 5,
            title: "Lưu trữ",
            dataIndex: "rom",
            width: "8%"
        },
        {
            id: 6,
            title: "Mô tả sản phẩm",
            dataIndex: "shortDescription"
            // with: "10%"
        },
        {
            id: 7,
            title: "Chức năng",
            dataIndex: "action",
            width: "12%",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link
                        to={`${match.url.slice(0, -1)}/${record.id}`}
                        key={record.id}
                    >
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button icon={<FileSearchOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={any => handleDelete}
                        />
                    </Link>
                </Space>
            )
        }
    ]
    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra)
    }

    const openNotification = (title, message) => {
        notification.open({
            message: title,
            description: message,
            title
        })
    }

    return (
        <Layout className="site-layout">
            <BreadcrumbField list={["ADMIN", "LAPTOP"]} />
            <Content
                style={{
                    overflow: "initial"
                }}
            >
                <Button
                    type="primary"
                    style={{ marginBottom: 5, width: 80 }}
                    icon={<ReloadOutlined />}
                    onClick={() => openNotification()}
                />
                <Search
                    placeholder="Tìm kiếm tên sản phẩm"
                    style={{ width: 200, marginLeft: 5 }}
                    onSearch={value => console.log(value)}
                />

                <Form form={form} component={false}>
                    <Table
                        bordered
                        dataSource={data}
                        columns={columns}
                        //rowClassName="editable-row"
                        onChange={onChange}
                        pagination={{
                            current: 1,
                            pageSize: 6
                        }}
                        //scroll={{ y: 500 }}
                        // footer={() => "Footer"}
                    />
                </Form>
            </Content>
        </Layout>
    )
}
export default DossierData
