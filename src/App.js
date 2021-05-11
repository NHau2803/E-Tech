import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom"
import { Suspense } from "react"
import RouteWeb from "Routes/Web"
// import RouteAdmin from "Routes/Admin"
import LoaderComponent from "Components/Web/Common/Loader"
import LoginPage from "Pages/Common/LoginPage"
import SignupPage from "Pages/Common/SignUp"
import RouteAdmin from "Routes/Admin"
import TestAPI from "Pages/Admin/Test"
import NotFoundComponent from "Components/Web/Common/NotFound"
function App() {
    return (
        <div>
            <Suspense fallback={() => <LoaderComponent />}>
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/etech" />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route path="/admin" component={RouteAdmin} />
                        <Route path="/etech" component={RouteWeb} />
                        <Route path="/test-api" component={TestAPI} />
                        <Route
                            render={props => (
                                <NotFoundComponent {...props} isFull={true} />
                            )}
                        />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    )
}

export default App
