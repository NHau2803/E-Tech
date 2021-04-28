import Layout from "antd/lib/layout/layout"
import DashboardComponent from "Components/Admin/Common/Dashboard"
import FooterComponent from "Components/Admin/Common/Footer"
import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import AddEditPage from "Pages/Admin/AddEdit"
import DossierData from "Pages/Admin/Dossier"
import Test from "Pages/Admin/Test"
import { Suspense } from "react"
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom"

const RouteAdmin = () => {
    const match = useRouteMatch()
    return (
        <div>
            <Switch>
                {/* <Route exact path={match.url} component={() => <h1>a</h1>} />
                <Route
                    exact
                    path={`${match.url}/laptop`}
                    component={() => <h1>b</h1>}
                /> */}
                <Route
                    path={`${match.url}`}
                    render={() => {
                        return <Test />
                    }}
                />
            </Switch>
        </div>
    )
}

export default RouteAdmin
