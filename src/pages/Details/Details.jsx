import { Link } from "react-router-dom";


const Details = () => {
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
        </div>
    );
};

export default Details;