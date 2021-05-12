import { render } from "@testing-library/react"
import { BackTop } from "antd"
import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import { TYPE_ADMIN_PAGE } from "Constants/Data"
import React, { Suspense } from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"
const AdminPage = React.lazy(() => import("../../Pages/Admin"))
const RouteAdmin = () => {
    const match = useRouteMatch()
    return (
        <div>
            <Suspense fallback={() => render(<LoaderComponent />)}></Suspense>
            <Switch>
                <Route
                    exact
                    path={`${match.url}/add`}
                    render={() => {
                        return (
                            <AdminPage
                                typePage={TYPE_ADMIN_PAGE.ADD_EDIT}
                                selectedKey={"1"}
                            />
                        )
                    }}
                />
                <Route
                    exact
                    path={`${match.url}/:productType`}
                    render={() => {
                        return (
                            <AdminPage
                                typePage={TYPE_ADMIN_PAGE.DOSSIER}
                                selectedKey={"0"}
                            />
                        )
                    }}
                />
                <Route
                    path={`${match.url}/:productType/:productId`}
                    render={() => {
                        return (
                            <AdminPage
                                typePage={TYPE_ADMIN_PAGE.ADD_EDIT}
                                selectedKey={"1"}
                            />
                        )
                    }}
                />
                <Route
                    render={props => (
                        <NotFoundComponent {...props} isFull={true} />
                    )}
                />
            </Switch>
            <BackTop />
        </div>
    )
}

export default RouteAdmin
