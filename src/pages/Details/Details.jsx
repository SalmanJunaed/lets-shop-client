import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";



const Details = () => {
    const details = useLoaderData();
    const {image, product_name, price, category, brand, productId, color, size, rating, type, quantity, description, availability, specification} = details;
    const [rate, setRate] = useState(3);
    return (
        <div>
            {/* Bredcrumb */}
            <div className="hero min-h-72 bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-center font-bold uppercase text-yellow-500 py-6">Details Page</h1>
                        <p className="py-6 text-2xl">
                            <Link to="/"><span className="font-bold">Home</span></Link> / Details Page
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-base-200 py-16">
                <div className="flex flex-col lg:flex-row justify-evenly">

                    <img src={image} className="w-[35%] h-[35%] mx-auto rounded-lg shadow-2xl px-6 py-6" />

                    
                    <div className="max-w-xl flex-1 px-6">
                        <h1 className=" text-xl md:text-2xl font-bold pt-6">Product Name:{product_name}</h1>
                        <p className="py-1"><span className="font-bold">Price:</span> ${price}</p>
                        <p className="py-1"><span className="font-bold">Category:</span> {category}</p>
                        <p className="py-1"><span className="font-bold">Brand:</span> {brand}</p>
                        <p className="py-1"><span className="font-bold">Product Id:</span> {productId}</p>
                        <p className="py-1"><span className="font-bold">color:</span> {color}</p>
                        <p className="py-1"><span className="font-bold">Size:</span> {size}</p>
                        <p className="py-1"><span className="font-bold">Type:</span> {type}</p>
                        <div className="py-1"><span className="font-bold">Rating:</span>
                            <Rating style={{ maxWidth: 180 }} value={rating} readOnly/>
                        </div>
                        <p className="py-1"><span className="font-bold">Specification:</span> {specification}</p>
                        <p className="py-1"><span className="font-bold">Availability:</span> {availability}</p>
                        <p className="py-1"><span className="font-bold">Quantity:</span> {quantity}</p>
                        <div className="py-1 flex gap-6"> <span className="font-bold"></span>Like / Dislike:
                            <span className="flex gap-6 py-">
                                <button><GrLike/></button>
                                <button><GrDislike /></button>
                            </span>
                        </div>
                        <button className="btn btn-primary my-8">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <p className="py-2 text-2xl px-6">Description:</p>
                    <p className=" px-6">{description}</p>
                </div>
                <div className="py-4 px-6">
                    <h4><span className="font-bold">Review:</span></h4>
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    <p>comment.....</p>
                    <h4><span className="font-bold">Rate Product:</span></h4>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rate}
                        onChange={setRate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Details;