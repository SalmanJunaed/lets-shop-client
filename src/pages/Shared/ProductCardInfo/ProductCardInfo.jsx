import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";


const ProductCardInfo = ({product}) => {
    const {image, product_name, price, rating, brand, category, specification} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>Price: {price}</p>
                    <p>Brand: {brand}</p>
                    <p>Category: {category}</p>
                    <p>Specification:{specification}</p>
                    <Rating className="mx-auto"
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly/>
                    <div className="card-actions place-self-center">
                        <Link to="/details">
                        <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardInfo
