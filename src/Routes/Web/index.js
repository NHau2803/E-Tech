import FooterComponent from "Components/Web/Common/Footer"
import HeaderMain from "Components/Web/Common/Header/HeaderMain"
import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import HeaderNav from "Components/Web/Common/Header/HeaderNav"
import React, { Suspense } from "react"
import { Route, Switch, useRouteMatch } from "react-router"
import { PATH } from "Constants/Path"
import { render } from "@testing-library/react"
import AboutPage from "Pages/Web/About"
import { BackTop } from "antd"

const HomePage = React.lazy(() => import("../../Pages/Web/Home"))
const ProductDetailPage = React.lazy(() =>
    import("../../Pages/Web/ProductDetail")
)
const CheckOut = React.lazy(() => import("../../Pages/Web/CheckOut"))
const ProductFilter = React.lazy(() => import("../../Pages/Web/ProductFilter"))

const RouteWeb = () => {
    const match = useRouteMatch()

    return (
        <div>
            <Suspense fallback={() => render(<LoaderComponent />)}>
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
                        path={`${match.url}/about`}
                        render={() => {
                            return <AboutPage />
                        }}
                    />
                    <Route
                        path={`${match.url}/checkout`}
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
            <BackTop></BackTop>
        </div>
    )
}
export default RouteWeb
