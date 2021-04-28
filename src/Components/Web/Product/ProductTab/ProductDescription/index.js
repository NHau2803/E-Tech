const ProductDescription = props => {
    const { description } = props
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>{description}</h3>
            <p>{description}</p>
        </div>
    )
}
export default ProductDescription
