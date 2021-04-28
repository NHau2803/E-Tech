import {
    DeleteOutlined,
    FileSearchOutlined,
    FormOutlined,
    ReloadOutlined
} from "@ant-design/icons"
import { Layout, Table, Form, Space, Button } from "antd"
import Search from "antd/lib/input/Search"
import BreadcrumbField from "Components/Admin/CustomFields/BreadcrumbField"
import {
    BRAND_LAPTOP_FILTER,
    DOSSIER_DATA,
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
    }
    // ---------------------table---------------------
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            width: "12%"
        },
        {
            title: "Hãng",
            dataIndex: "brand",
            filters: BRAND_LAPTOP_FILTER,
            onFilter: (value, record) => record.brand.includes(value),
            width: "5%"
        },
        {
            title: "Vi xử lí",
            dataIndex: "cpu",
            filters: SPEC_VALUE_LAPTOP_SCREEN_FILTER,
            onFilter: (value, record) => record.screen.includes(value),
            width: "8%"
        },
        {
            title: "Ram",
            dataIndex: "ram",
            filters: SPEC_VALUE_LAPTOP_RAM_FILTER,
            onFilter: (value, record) => record.ram.includes(value),
            width: "5%"
        },
        {
            title: "Lưu trữ",
            dataIndex: "rom",
            width: "8%"
        },
        {
            title: "Mô tả sản phẩm",
            dataIndex: "shortDescription"
            // with: "10%"
        },
        {
            title: "Chức năng",
            dataIndex: "action",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link to={`${match.url}/update/${record.id}`}>
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`}>
                        <Button icon={<FileSearchOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`}>
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

    return (
        <Layout className="site-layout">
            {/* <Header
                className="site-layout-background"
                style={{ padding: 0, height: "30px" }}
            /> */}
            <BreadcrumbField list={["ADMIN", "LAPTOP"]} />
            <Content
                style={{
                    margin: "24px 16px 0",
                    overflow: "initial",
                    paddingLeft: "10px"
                }}
            >
                <Button
                    type="primary"
                    style={{ marginBottom: 5, width: 80 }}
                    icon={<ReloadOutlined />}
                />
                <Search
                    placeholder="input search text"
                    style={{ width: 200, marginLeft: 5 }}
                    onSearch={value => console.log(value)}
                />
                <div
                    className="site-layout-background"
                    style={{ textAlign: "center" }}
                >
                    <Form form={form} component={false}>
                        <Table
                            bordered
                            dataSource={data}
                            columns={columns}
                            //rowClassName="editable-row"
                            onChange={onChange}
                            pagination={{
                                current: 1,
                                pageSize: 3
                            }}
                            // footer={() => "Footer"}
                        />
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}
export default DossierData
