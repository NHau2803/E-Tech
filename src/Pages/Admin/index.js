import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import AddEditPage from "./AddEdit"
import DashboardComponent from "Components/Admin/Common/Dashboard"
import { TYPE_ADMIN_PAGE } from "Constants/Data"
import DossierData from "./Dossier"
import "./AdminPage.css"

const { Header, Content } = Layout

const AdminPage = props => {
    const { typePage } = props
    const [toggle, setToggle] = useState(false)

    return (
        <Layout>
            <DashboardComponent toggle={toggle} />
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        toggle ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setToggle(!toggle)
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 10
                        //minHeight: "625px"
                    }}
                >
                    {typePage === TYPE_ADMIN_PAGE.ADD_EDIT ? (
                        <AddEditPage />
                    ) : (
                        <DossierData />
                    )}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AdminPage
