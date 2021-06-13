import { BackTop, Button, Result, Spin } from "antd"
import React from "react"
import { useSelector } from "react-redux"
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom"
const AdminPage = React.lazy(() => import("../../Pages/Admin"))
const RouteAdmin = () => {
    const match = useRouteMatch()
    const loading = useSelector(state => state.SystemReducer.loading)
    const history = useHistory()
    return (
        <Spin spinning={loading} delay={200} tip="Đang tải..." size="large">
            <div>
                <Switch>
                    <Route
                        exact
                        path={`${match.url}/:page`}
                        render={() => {
                            return <AdminPage />
                        }}
                    />
                    <Route
                        exact
                        path={`${match.url}/products/:productType`}
                        render={() => {
                            return <AdminPage />
                        }}
                    />
                    <Route
                        path={`${match.url}/products/:productType/:productId`}
                        render={() => {
                            return <AdminPage />
                        }}
                    />
                    <Route
                        render={() => (
                            <Result
                                status="404"
                                title="404"
                                subTitle="Xin lỗi, không tìm thấy trang"
                                extra={
                                    <Button
                                        type="primary"
                                        onClick={() =>
                                            history.push("/admin/home")
                                        }
                                    >
                                        Trở lại trang chủ
                                    </Button>
                                }
                            />
                        )}
                    />
                </Switch>
                <BackTop />
            </div>
        </Spin>
    )
}

export default RouteAdmin
