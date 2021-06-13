import { Link } from "react-router-dom"

const BreadcrumbComponent = props => {
    const { pageName } = props
    return (
        <div id="breadcrumb">
            <div className="container">
                <ul className="breadcrumb">
                    <li>
                        <Link to={"/etech"}>ETECH</Link>
                    </li>
                    <li className="active">{pageName}</li>
                </ul>
            </div>
        </div>
    )
}

export default BreadcrumbComponent
