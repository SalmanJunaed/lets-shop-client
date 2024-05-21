import { FaShippingFast } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";

const Service = () => {
    return (
        <div className="py-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl text-center font-bold uppercase text-yellow-500 py-6">Our Service!</h1>
                <h2 className="text-2xl text-center text-gray-500 font-bold">Exceptional Services, Just for You</h2>
                <p className="py-6 text-slate-500 text-center">At Lets Shop, we offer personalized support, fast shipping, and easy returns. Our dedicated team ensures a seamless shopping experience from start to finish, making your satisfaction our top priority. Enjoy shopping with confidence!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-6">
                {/* Card 1 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <FaShippingFast className="text-6xl hover:text-7xl duration-300"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Free Shipping & Returns</h2>
                        <p>For all orders over $99</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <MdHomeRepairService className="text-6xl hover:text-7xl duration-300"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Secure Payment</h2>
                        <p>We ensure secure payment</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <FaMoneyBillTransfer className="text-6xl hover:text-7xl duration-300"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Money Back Guarantee</h2>
                        <p>Any back within 30 days</p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <HiMiniChatBubbleLeftRight className="text-6xl hover:text-7xl duration-300"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Customer Support</h2>
                        <p>Call or email us 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
