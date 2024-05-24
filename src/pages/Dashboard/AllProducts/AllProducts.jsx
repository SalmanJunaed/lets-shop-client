import useProducts from "../../../hooks/useProducts"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const AllProducts = () => {
    const [products] = useProducts()
    return (
        <div>
            <h2 className="text-4xl text-center">All Products</h2>
            <h4 className="text-2xl text-center py-4">
                Total Products:{products.length}
            </h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            products.map((product, index) =><tr key={product._id}>
                            <th>
                                {index +1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={product.image}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>{product.rating}</td>
                            <td>{product.quantity}</td>
                            <th>
                                <button className="btn btn-outline btn-primary">
                                    <FaEdit className="text-2xl" />
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-outline btn-error">
                                    <RiDeleteBin6Fill className="text-2xl" />
                                </button>
                            </th>
                        </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllProducts
