import { Breadcrumb } from "antd"

const BreadcrumbField = props => {
    const { list } = props
    return (
        <Breadcrumb
            style={{
                margin: "24px 40px",
                height: "0"
            }}
        >
            {list.map(item => (
                <Breadcrumb.Item>{item}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default BreadcrumbField
