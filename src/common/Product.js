

const Product = ({title, price, imageSrc}) => {
    return (
        <div className="product">
                <img className="product-img" src={imageSrc} alt=""/>
            
            <div className="product-definition">
                <h2>{price}</h2>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Product


