import { Link } from "react-router-dom"

const BreadcrumbComponent = props => {
    const { pageName } = props
    return (
        <div id="breadcrumb">
            <div class="container">
                <ul class="breadcrumb">
                    <li>
                        <Link to={"/etech"}>ETech</Link>
                    </li>
                    <li class="active">{pageName}</li>
                </ul>
            </div>
        </div>
    )
}

export default BreadcrumbComponent
