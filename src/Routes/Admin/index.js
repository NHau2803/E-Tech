import { render } from "@testing-library/react"
import { BackTop } from "antd"
import GetOptionsAPI from "API/GetOptions"
import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import { PATH } from "Constants/Path"
import React, { Suspense, useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom"
import { setLS } from "Utils/Converter"
const AdminPage = React.lazy(() => import("../../Pages/Admin"))
const RouteAdmin = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const redirectLogin = () => history.push(PATH.LOGIN)
    const admin = useSelector(state => state.UserReducer.admin)
    const redirectNotFound = () => history.push("/not-found")
    // const isEmptyItemInLocalStorage = emptyItemInLocalStorage("account")
    // const admin===1 = () => {
    //     if (!isEmptyItemInLocalStorage) {
    //         if (getLS("account").admin&&admin === 1) {
    //             return true
    //         }
    //     }
    //     return false
    // }

    // useEffect(() => {
    //     GetOptionsAPI.getOptions()
    //         .then(res => {
    //             if (res.status === "Only admin can access") {
    //                 redirectNotFound()
    //             } else {
    //                 console.log(
    //                     "🚀 ~ file: index.js ~ line 18 ~ GetOptionsAPI.getOptions ~ res",
    //                     res
    //                 )
    //                 setLS("product_type", res.type)
    //                 /**Laptop**/
    //                 setLS("cpus", res.laptop.cpus)
    //                 setLS("gpus", res.laptop.gpus)
    //                 setLS("rams", res.laptop.rams)
    //                 setLS("roms", res.laptop.roms)
    //                 setLS("batteries", res.laptop.batteries)
    //                 setLS("laptop_brand", res.laptop.brands)
    //                 setLS("os", res.laptop.os)
    //                 setLS("ports", res.laptop.ports)
    //                 setLS("screens", res.laptop.screens)
    //                 setLS("sizes", res.laptop.sizes)
    //                 setLS("weights", res.laptop.weights)
    //                 setLS("rams", res.laptop.rams)
    //                 /**Drive**/
    //                 setLS("drive_brand", res.drive.brands)
    //                 setLS("caches", res.drive.caches)
    //                 setLS("capacities", res.drive.capacities)
    //                 setLS("connections", res.drive.connections)
    //                 setLS("dimensions", res.drive.dimensions)
    //                 setLS("reads", res.drive.reads)
    //                 setLS("rotations", res.drive.rotations)
    //                 setLS("types", res.drive.types)
    //                 setLS("writes", res.drive.writes)
    //             }
    //         })
    //         .catch(err => {
    //             redirectNotFound()
    //         })
    // }, [])

    return (
        <div>
            <Suspense fallback={() => render(<LoaderComponent />)}></Suspense>
            <Switch>
                <Route
                    exact
                    path={`${match.url}/add`}
                    render={() => {
                        return <AdminPage />
                    }}
                />
                <Route
                    exact
                    path={`${match.url}/:productType`}
                    render={() => {
                        return <AdminPage />
                    }}
                />
                <Route
                    path={`${match.url}/:productType/:productId`}
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
