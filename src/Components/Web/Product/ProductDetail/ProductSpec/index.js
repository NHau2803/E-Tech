const ProductSpec = props => {
    const { detail } = props
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
                        <strong>Lưu trữ&nbsp;</strong>
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
                        <strong>Kết nối chính &nbsp;</strong>
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
export default ProductSpec
