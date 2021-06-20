import { PATH } from "Constants/Path"
import { Link } from "react-router-dom"
import "./NotFound.css"
const NotFoundComponent = props => {
    const { isFull } = props

    const renderFull = () => {
        return (
            <div className="container_status">
                <h2>Không tìm thấy trang</h2>
                <h1>404</h1>
                <p>Rất tiếc, bạn không thể truy cập</p>
                <Link to={PATH.HOME}>Quay lại Trang Chủ</Link>
            </div>
        )
    }
    const renderComponent = () => {
        return (
            <div className="container">
                <h3 style={{ marginTop: "15px" }}>404 | Không tìm thấy!</h3>
                <Link to={PATH.HOME}>Quay lại Trang Chủ</Link>
            </div>
        )
    }

    const checkRender = () => {
        return isFull ? renderFull() : renderComponent()
    }

    return checkRender()
}

export default NotFoundComponent
