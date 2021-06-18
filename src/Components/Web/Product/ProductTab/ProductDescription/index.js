import { Markup } from "interweave"

const ProductDescription = props => {
    const { description } = props

    return (
        <div>
            <Markup content={description} />
        </div>
    )
}
export default ProductDescription
