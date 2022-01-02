// Libs
import { useParams } from "react-router-dom";

// Components
import { Product } from "../common";

// Data
import data from "../Data/data";

function Products() {
    let { category } = useParams();
    return (
        <div className="container page-regions">
            <div className="products">
            {
                data.products.filter(product => product.categorie === category)
                             .map((product, index) => (
                                <Product key={index} title={product.title} price={product.price} imageSrc={product.imageSrc} />
                                ))
            }
            </div>
        </div>
    )
}

export default Products
