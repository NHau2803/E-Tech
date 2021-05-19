import { render } from "@testing-library/react"
import { BackTop } from "antd"
import GetOptionsAPI from "API/GetOptions"
import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import { PATH } from "Constants/Path"
import React, { Suspense, useEffect } from "react"
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom"
import { getOptionsLocalStorage, setOptionsLocalStorage } from "Utils/Converter"
import { emptyItemInLocalStorage } from "Utils/localStorageFunctions"
const AdminPage = React.lazy(() => import("../../Pages/Admin"))
const RouteAdmin = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const redirectLogin = () => history.push(PATH.LOGIN)
    const redirectNotFound = () => history.push("/not-found")
    const isEmptyItemInLocalStorage = emptyItemInLocalStorage("account")
    const isAdmin = () => {
        if (!isEmptyItemInLocalStorage) {
            if (getOptionsLocalStorage("account").admin === 1) {
                return true
            }
        }
        return false
    }

    useEffect(() => {
        GetOptionsAPI.getOptions()
            .then(res => {
                if (res.status === "Only admin can access") {
                    redirectNotFound()
                } else {
                    console.log(
                        "🚀 ~ file: index.js ~ line 18 ~ GetOptionsAPI.getOptions ~ res",
                        res
                    )
                    setOptionsLocalStorage("product_type", res.type)
                    /**Laptop**/
                    setOptionsLocalStorage("cpus", res.laptop.cpus)
                    setOptionsLocalStorage("gpus", res.laptop.gpus)
                    setOptionsLocalStorage("rams", res.laptop.rams)
                    setOptionsLocalStorage("roms", res.laptop.roms)
                    setOptionsLocalStorage("batteries", res.laptop.batteries)
                    setOptionsLocalStorage("laptop_brand", res.laptop.brands)
                    setOptionsLocalStorage("os", res.laptop.os)
                    setOptionsLocalStorage("ports", res.laptop.ports)
                    setOptionsLocalStorage("screens", res.laptop.screens)
                    setOptionsLocalStorage("sizes", res.laptop.sizes)
                    setOptionsLocalStorage("weights", res.laptop.weights)
                    setOptionsLocalStorage("rams", res.laptop.rams)
                    /**Drive**/
                    setOptionsLocalStorage("drive_brand", res.drive.brands)
                    setOptionsLocalStorage("caches", res.drive.caches)
                    setOptionsLocalStorage("capacities", res.drive.capacities)
                    setOptionsLocalStorage("connections", res.drive.connections)
                    setOptionsLocalStorage("dimensions", res.drive.dimensions)
                    setOptionsLocalStorage("reads", res.drive.reads)
                    setOptionsLocalStorage("rotations", res.drive.rotations)
                    setOptionsLocalStorage("types", res.drive.types)
                    setOptionsLocalStorage("writes", res.drive.writes)
                }
            })
            .catch(err => {
                redirectNotFound()
            })
    }, [])

    return (
        <div>
            <Suspense fallback={() => render(<LoaderComponent />)}></Suspense>
            <Switch>
                <Route
                    exact
                    path={isAdmin ? `${match.url}/add` : "/not-found"}
                    render={() => {
                        return <AdminPage />
                    }}
                />
                <Route
                    exact
                    path={isAdmin ? `${match.url}/:productType` : "/not-found"}
                    render={() => {
                        return <AdminPage />
                    }}
                />
                <Route
                    path={
                        isAdmin
                            ? `${match.url}/:productType/:productId`
                            : "/not-found"
                    }
                    render={() => {
                        return <AdminPage />
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
