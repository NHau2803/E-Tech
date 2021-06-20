import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, Layout, Result } from "antd"
import DashboardComponent from "Components/Admin/Common/Dashboard"
import { TYPE_PRODUCT } from "Constants/Data"
import React, { useState } from "react"
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"
import AddProductPage from "./AddPage"
import "./AdminPage.css"
import DossierData from "./Dossier"
import MyAccount from "./MyAccount"
import StatisticPage from "./Statistic"
import UpdatePage from "./UpadatePage"
import ViewManager from "./ViewManager"

const { Header, Content } = Layout

const AdminPage = () => {
    const { productId, productType, page } = useParams()
    const history = useHistory()
    const isAddMode = !productId
    const [toggle, setToggle] = useState(false)

    const renderContentComponent = () => {
        if (isAddMode && !productType && page === "home") {
            return <p>Home Page</p>
        }
        if (isAddMode && !productType && page === "add") {
            return <AddProductPage />
        }
        if (isAddMode && !productType && page === "statistic") {
            return <StatisticPage />
        }
        if (isAddMode && !productType && page === "view-manager") {
            return <ViewManager />
        }
        if (isAddMode && !productType && page === "my-account") {
            return <MyAccount />
        }
        if (
            !isAddMode &&
            (productType === TYPE_PRODUCT.LAPTOP ||
                productType === TYPE_PRODUCT.DRIVE) &&
            !isNaN(productId)
        ) {
            return <UpdatePage />
        }

        if (
            productType === TYPE_PRODUCT.LAPTOP ||
            productType === TYPE_PRODUCT.DRIVE
        ) {
            return <DossierData />
        } else {
            return (
                <Result
                    status="404"
                    title="404"
                    subTitle="Xin lỗi, không tìm thấy trang"
                    extra={
                        <Button
                            type="primary"
                            onClick={() => history.push("/admin/home")}
                        >
                            Trở lại trang chủ
                        </Button>
                    }
                />
            )
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
