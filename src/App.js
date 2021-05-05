import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom"
import { Suspense } from "react"
import RouteWeb from "Routes/Web"
// import RouteAdmin from "Routes/Admin"
import NotFoundComponent from "Components/Web/Common/NotFound"
import LoaderComponent from "Components/Web/Common/Loader"
import LoginPage from "Pages/Common/LoginPage"
import SignupPage from "Pages/Common/SignUp"
import RouteAdmin from "Routes/Admin"
import TestAPI from "Pages/Admin/Test"
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
                        <Route component={NotFoundComponent} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    )
}

export default App
