import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import AddEditPage from "./AddEdit"
import DashboardComponent from "Components/Admin/Common/Dashboard"
import { TYPE_ADMIN_PAGE, TYPE_PRODUCT } from "Constants/Data"
import DossierData from "./Dossier"
import "./AdminPage.css"
import UpdateLaptopPage from "./Laptop/Update"
import { useHistory, useParams } from "react-router"
import UpdateDrivePage from "./Drive/Update"

const { Header, Content } = Layout

const AdminPage = props => {
    const { productId, productType } = useParams()
    console.log("🚀 ~ file: index.js ~ line 16 ~ productType", productType)
    const isAddMode = !productId
    const history = useHistory()
    const { typePage } = props
    const [toggle, setToggle] = useState(false)

    const renderContentComponent = () => {
        if (isAddMode && !productType) {
            return <AddEditPage />
        }
        if (
            !isAddMode &&
            productType === TYPE_PRODUCT.LAPTOP &&
            !isNaN(productId)
        ) {
            return <UpdateLaptopPage />
        }
        if (
            !isAddMode &&
            productType === TYPE_PRODUCT.DRIVE &&
            !isNaN(productId)
        ) {
            return <UpdateDrivePage />
        }
        // if (
        //     !isAddMode &&
        //     productType === TYPE_PRODUCT.DRIVE &&
        //     !isNaN(productId)
        // ) {
        //     return <UpdateLaptopPage />
        // }
        if (
            productType === TYPE_ADMIN_PAGE.DOSSIER_LAPTOP ||
            productType === TYPE_ADMIN_PAGE.DOSSIER_DRIVE
        ) {
            return <DossierData />
        }
    }

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
                    }}
                >
                    {renderContentComponent()}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AdminPage
