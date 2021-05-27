import { TYPE_PRODUCT } from "Constants/Data"
import { useParams } from "react-router"

const ProductSpec = props => {
    const { productType } = useParams()
    const { detail } = props
    const renderSpecLaptop = () => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Vi xử lí</strong>
                        </td>
                        <td>{detail.cpu}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Màn hình</strong>
                        </td>
                        <td>{detail.screen}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>RAM</strong>
                        </td>
                        <td>{detail.ram}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Lưu trữ</strong>
                        </td>
                        <td>{detail.rom}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Card đồ hoạ</strong>
                        </td>
                        <td>{detail.gpu}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Kết nối chính &nbsp; &nbsp;</strong>
                        </td>
                        <td>{detail.port}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Pin</strong>
                        </td>
                        <td>{detail.battery}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Kích thước</strong>
                        </td>
                        <td>{detail.size}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Trọng lượng</strong>
                        </td>
                        <td>{detail.weight}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Bảo hành</strong>
                        </td>
                        <td>{detail.guarantee}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const renderSpecDrive = () => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Loại ổ cứng</strong>
                        </td>
                        <td>{detail.type}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Lưu trữ</strong>
                        </td>
                        <td>{detail.capacity}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Kết nối </strong>
                        </td>
                        <td>{detail.connect}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Kích thước</strong>
                        </td>
                        <td>{detail.dimension}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Tốc độ đọc</strong>
                        </td>
                        <td>{detail.read}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Tốc độ ghi</strong>
                        </td>
                        <td>{detail.write}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Cache</strong>
                        </td>
                        <td>{detail.cache}</td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Tốc độ quay &nbsp; &nbsp;</strong>
                        </td>
                        <td>{detail.rotation}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Bảo hành</strong>
                        </td>
                        <td>{detail.guarantee}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const renderSpec = () => {
        if (productType === TYPE_PRODUCT.LAPTOP) {
            return renderSpecLaptop()
        } else {
            return renderSpecDrive()
        }
    }
    return renderSpec()
}
export default ProductSpec
