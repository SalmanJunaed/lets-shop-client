import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Link } from "react-router-dom";

import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";



const Details = () => {
    const [rating, setRating] = useState(3);
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

                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-[35%] h-[35%] mx-auto rounded-lg shadow-2xl px-6 py-6" />

                    
                    <div className="max-w-xl flex-1 px-6">
                        <h1 className=" text-xl md:text-2xl font-bold pt-6">Product Name:</h1>
                        <p className="py-1">Price: </p>
                        <p className="py-1">Category: </p>
                        <p className="py-1">Brand: </p>
                        <p className="py-1">Product Id:</p>
                        <p className="py-1">color:</p>
                        <p className="py-1">Size:</p>
                        <p className="py-1">Type:</p>
                        <p className="py-1">Rating:
                        
                        </p>
                        <p className="py-1">specification:</p>
                        <p className="py-1">Availability:</p>
                        <p className="py-1">Quantity:</p>
                        <div className="py-1 flex gap-6">Like / Dislike:
                            <span className="flex gap-6 py-">
                                <button><GrLike/></button>
                                <button><GrDislike /></button>
                            </span>
                        </div>
                        <button className="btn btn-primary my-8">Add to Cart</button>
                    </div>
                </div>
                <div>

                <p className="py-5 text-2xl px-6">Description:</p>
                <p className=" px-6">Descriptions ..... </p>
                </div>
                <div className="py-4 px-6">
                    <h4>Review</h4>
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    <p>comment</p>
                    <h4>Rating</h4>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Details;