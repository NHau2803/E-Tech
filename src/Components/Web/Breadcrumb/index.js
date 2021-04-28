const BreadcrumbComponent = props => {
    const { pageName } = props
    return (
        <div id="breadcrumb">
            <div class="container">
                <ul class="breadcrumb">
                    <li>
                        <a href={"/#"}>ETech</a>
                    </li>
                    <li class="active">{pageName}</li>
                </ul>
            </div>
        </div>
    )
}

export default BreadcrumbComponent
