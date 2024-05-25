import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const MarqueeSlide = () => {
    return (
        <div>
            <Marquee className="bg-gray-200 py-4" pauseOnHover={true} speed={100}>
                <Link className="mr-4 text-2xl font-bold">Huge Savings on All Categories!</Link>
                <Link className="mr-4 text-2xl">New Arrivals Just Landed!</Link>
                <Link className="mr-4 text-2xl font-bold text-yellow-500">Limited Time Offer: Up to 50% Off!</Link>
                <Link className="mr-4 text-2xl font-light ">Shop Now and Enjoy Free Shipping!</Link>
                <Link className="mr-4 text-2xl font-mono text-blue-800"> <i>Exclusive Deals on Top Brands!</i></Link>
                <Link className="mr-4 text-2xl">Don’t Miss Out on Flash Sales!</Link>
            </Marquee>
        </div>
    );
};

export default MarqueeSlide;