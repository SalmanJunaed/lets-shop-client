import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";


const ProductCardInfo = ({product}) => {
    const {image, product_name, price, rating, brand, category, specification,_id} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p className="text-lg"><span className="font-bold">Price: </span>{price}</p>
                    <p><span className="font-bold">Brand: </span>{brand}</p>
                    <p><span className="font-bold">Category: </span>{category}</p>
                    <p><span className="font-bold">Specification: </span>{specification}</p>
                    <Rating className="mx-auto"
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly/>
                    <div className="card-actions place-self-center">
                        <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardInfo
