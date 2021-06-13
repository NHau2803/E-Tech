// import RouteAdmin from "Routes/Admin"

import LoaderComponent from "Components/Web/Common/Loader"
import NotFoundComponent from "Components/Web/Common/NotFound"
import Authentication from "HOC/BaseAuth"
import LoginPage from "Pages/Common/LoginPage"
import SignupPage from "Pages/Common/SignUp"
import { Suspense } from "react"
import { Provider } from "react-redux"
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom"
import RouteAdmin from "Routes/Admin"
import RouteWeb from "Routes/Web"
import store from "./Redux/index"

function App() {
    return (
        <Provider store={store}>
            <div>
                <Suspense fallback={() => <LoaderComponent />}>
                    <Router>
                        <Switch>
                            <Redirect exact from="/" to="/etech" />

                            <Route
                                exact
                                path="/dang-nhap"
                                s
                                component={LoginPage}
                            />

                            <Route
                                exact
                                path="/dang-ky"
                                component={SignupPage}
                            />

                            <Route
                                path={"/admin"}
                                component={Authentication(
                                    RouteAdmin,
                                    true,
                                    true
                                )}
                            />

                            <Route path="/etech" component={RouteWeb} />

                            <Route
                                render={props => (
                                    <NotFoundComponent
                                        {...props}
                                        isFull={true}
                                    />
                                )}
                            />
                        </Switch>
                    </Router>
                </Suspense>
            </div>
        </Provider>
    )
}

export default App
