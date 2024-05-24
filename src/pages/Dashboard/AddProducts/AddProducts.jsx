import { useForm } from "react-hook-form"


const AddProducts = () => {
    const { register, handleSubmit, } = useForm()
    return (
        <div>
            <h2 className="text-6xl text-center">Add Products</h2>
            <div className=" mx-16 min-h-screen bg-base-200">
                <div className=" flex-col">
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit()} className="card-body">
                            <div className="flex gap-4">
                                {/* Product name input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input name="product_name" {...register("product_name", )}  type="text" placeholder="Product Name" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                                {/* Price input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name="price" {...register("price", )}  type="number" placeholder="Product Price" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                {/* Category Selection */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select defaultValue='default' {...register("category", )} className="select select-bordered w-full my-2">
                                        <option disabled value='default'> Select a type *</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Kitchen">Kitchen</option>
                                    </select>
                                </div>
                                {/* Availability Selection */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Availability</span>
                                    </label>
                                    <select defaultValue='default' {...register("availability", )} className="select select-bordered w-full my-2">
                                        <option disabled value='default'> Select a type *</option>
                                        <option value="In Stock">In Stock</option>
                                        <option value="Limited Stock">Limited Stock</option>
                                        <option value="Out Of Stock">Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                {/* Product ID input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Product ID</span>
                                    </label>
                                    <input name="productId" {...register("productId", )}  type="text" placeholder="Product ID" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                                {/* Brand Name input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input name="brand" {...register("brand", )}  type="text" placeholder="Product brand" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                {/* Product Color input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Product Color</span>
                                    </label>
                                    <input name="color" {...register("color", )}  type="text" placeholder="Product Color" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                                {/* Product Size input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Product Size</span>
                                    </label>
                                    <input name="size" {...register("size", )}  type="text" placeholder="Product Size" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {/* Category Selection */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Product Type</span>
                                    </label>
                                    <select defaultValue='default' {...register("type", )} className="select select-bordered w-full">
                                        <option disabled value='default'> Select a type *</option>
                                        <option value="Featured">Featured</option>
                                        <option value="NewArrival">New Arrival</option>
                                        <option value="BestSale">Best Sale</option>
                                        <option value="MostPopular">Most Popular</option>
                                    </select>
                                </div>
                                {/* Rating Selection */}
                                {/* <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <select defaultValue='default' {...register("rating", )} className="select select-bordered w-full my-2">
                                        <option disabled value='default'> Select a type *</option>
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                        <option value="3.5">3.5</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                    </select>
                                </div> */}
                                {/* Specification input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input name="description" {...register("description", )}  type="text" placeholder="Product Description" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                            </div>




                            <div className="flex gap-4">
                                {/* Product Quantity input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Product Quantity</span>
                                    </label>
                                    <input name="quantity" {...register("quantity", )}  type="number" placeholder="Product Quantity" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                                {/* Specification input */}
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Specification</span>
                                    </label>
                                    <input name="specification" {...register("specification", )}  type="text" placeholder="Product Specification" className="input input-bordered"/>
                                    {/* {errors.assetName && <span>Asset Name field is required</span>} */}
                                </div>
                            </div>

                            {/* Image input */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Select Product Image File</span>
                                </label>
                                <input name="imgAsset" {...register("imgAsset", )}  type="file" className="file-input w-full max-w-xs" />
                                {/* {errors.imgAsset && <span>Asset Image field is required</span>} */}
                            </div>
                            
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Add Product
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;