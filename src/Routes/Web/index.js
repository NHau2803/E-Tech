import FooterComponent from "Components/Web/Common/Footer"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import React, { Suspense, useEffect, useState } from "react"
import { Route, Switch, useRouteMatch } from "react-router"
import { PATH } from "Constants/Path"
import { render } from "@testing-library/react"
import AboutPage from "Pages/Web/About"
import { BackTop } from "antd"
import PolicyTransport from "Pages/Web/Policy/Transport"
import Recruitment from "Pages/Web/Recruitment"
import { RENDER_CART } from "Constants/Data"
import { getOptionsLocalStorage, setOptionsLocalStorage } from "Utils/Converter"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"
import HeaderTop from "Components/Web/Common/Header/HeaderTop"

const HomePage = React.lazy(() => import("../../Pages/Web/Home"))
const ProductDetailPage = React.lazy(() =>
    import("../../Pages/Web/ProductDetail")
)
const CheckOut = React.lazy(() => import("../../Pages/Web/CheckOut"))
const ProductFilter = React.lazy(() => import("../../Pages/Web/ProductFilter"))

const RouteWeb = () => {
    const isEmptyItemInLocalStorage = emptyItemInLocalStorage("carts")
    const [carts, setCarts] = useState(
        isEmptyItemInLocalStorage ? [] : getOptionsLocalStorage("carts")
    )

    const match = useRouteMatch()
    if (emptyItemInLocalStorage("carts")) {
        setOptionsLocalStorage("carts", [])
    }

    return (
        <div>
            <Suspense fallback={() => render(<LoaderComponent />)}>
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
                        path={`${match.url}/tuyen-dung`}
                        render={() => {
                            return <Recruitment />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/thanh-toan`}
                        render={() => {
                            return <CheckOut />
                        }}
                    />
                    <Route
                        path={`${match.url}/:productType/:productId`}
                        render={() => {
                            return <ProductDetailPage />
                        }}
                    />
                    <Route
                        path={`${match.url}/:productType`}
                        render={() => {
                            return <ProductFilter />
                        }}
                    />

                    <Route
                        render={() => {
                            return <NotFoundComponent />
                        }}
                    />
                </Switch>
                <FooterComponent
                    logo={
                        "https://drive.google.com/uc?export=view&id=1Efe_zTMed_8-Ix0fgfbKVLXwtxdVb3UX"
                    }
                />
            </Suspense>
            <BackTop />
        </div>
    )
}
export default RouteWeb
