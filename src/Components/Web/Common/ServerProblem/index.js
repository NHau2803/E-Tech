import { Link } from "react-router-dom"
import "./ServerProblem.css"
const ServerProblemComponent = props => {
    const { isFull } = props

    const renderFull = () => {
        return (
            <div className="container_status">
                <h2>Máy Chủ Không Phản Hồi</h2>
                <h1>500</h1>
                <p>Rất tiếc, bạn không thể truy cập</p>
                <Link to="/etech">Quay lại Trang Chủ</Link>
            </div>
        )
    }
    const renderComponent = () => {
        return (
            <div className="container">
                <h3 style={{ marginTop: "15px" }}>
                    500 | Máy chủ không phản hồi!
                </h3>
                <Link to="/etech">Quay lại Trang Chủ</Link>
            </div>
        )
    }

    const checkRender = () => {
        return isFull ? renderFull() : renderComponent()
    }

    return checkRender()
}

export default ServerProblemComponent
