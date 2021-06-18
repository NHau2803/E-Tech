import { BackTop, Result, Spin } from "antd"
import FooterComponent from "Components/Web/Common/Footer"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import HeaderTop from "Components/Web/Common/Header/HeaderTop"
import AboutPage from "Pages/Web/About"
import HistoryBill from "Pages/Web/HistoryBill"
import MyAccount from "Pages/Web/MyAccount"
import PolicyPay from "Pages/Web/Policy/Pay"
import PolicyTransport from "Pages/Web/Policy/Transport"
import Recruitment from "Pages/Web/Recruitment"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch, useRouteMatch } from "react-router"
import { setLS } from "Utils/Converter"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"

const HomePage = React.lazy(() => import("../../Pages/Web/Home"))
const ProductDetailPage = React.lazy(() =>
    import("../../Pages/Web/ProductDetail")
)
const CheckOut = React.lazy(() => import("../../Pages/Web/CheckOut"))
const ProductFilter = React.lazy(() => import("../../Pages/Web/ProductFilter"))
const RouteWeb = () => {
    const match = useRouteMatch()
    const loading = useSelector(state => state.SystemReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        if (emptyItemInLocalStorage("carts")) {
            setLS("carts", [])
        }
    }, [])
    return (
        <Spin spinning={loading} delay={200} tip="Đang tải..." size="large">
            <div>
                <HeaderTop />
                <HeaderMain />
                <HeaderNav />
                <Switch>
                    <Route
                        exact
                        path={match.url}
                        render={() => {
                            return <HomePage />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/gioi-thieu`}
                        render={() => {
                            return <AboutPage />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/chinh-sach-van-chuyen`}
                        render={() => {
                            return <PolicyTransport />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/chinh-sach-thanh-toan`}
                        render={() => {
                            return <PolicyPay />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/tuyen-dung`}
                        render={() => {
                            return <Recruitment />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/gio-hang`}
                        render={() => {
                            return <CheckOut />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/lich-su`}
                        render={() => {
                            return <HistoryBill />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/tai-khoan`}
                        render={() => {
                            return <MyAccount />
                        }}
                    />
                    <Route
                        path={`${match.url}/:productType/filter/:p`}
                        // key={document.location.href}
                        render={() => {
                            return <ProductFilter />
                        }}
                    />
                    <Route
                        path={`${match.url}/:productType/:productId`}
                        render={() => {
                            return <ProductDetailPage />
                        }}
                    />
                    <Route
                        render={() => (
                            <Result
                                status="404"
                                title="404"
                                subTitle="Xin lỗi, không tìm thấy trang"
                            />
                        )}
                    />
                </Switch>
                <FooterComponent />
                <BackTop />
            </div>
        </Spin>
    )
}
export default RouteWeb
