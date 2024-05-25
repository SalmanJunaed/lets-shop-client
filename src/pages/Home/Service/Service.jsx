import { FaShippingFast } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";

import { motion } from "framer-motion"

const Service = () => {
    return (
        <div className="py-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{x: -100, opacity: 0 }}
                    whileInView={{x: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay:0.2, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 0.6 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                    className="py-6 text-4xl text-center font-bold uppercase text-yellow-500 "
                >
                    Exceptional Services, Just for You
                </motion.h1>
                {/* <h2 className="text-2xl text-center text-gray-500 font-bold">Exceptional Services, Just for You</h2> */}
                <motion.p
                    initial={{x: 100, opacity: 0 }}
                    whileInView={{x: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay:0.2, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 1 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                    className="pb-6 text-slate-500 text-center"
                >
                    At Lets Shop, we offer personalized support, fast shipping, and easy returns. Our dedicated team ensures a seamless shopping experience from start to finish, making your satisfaction our top priority. Enjoy shopping with confidence!
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-6">
                {/* Card 1 */}
                <motion.div 
                    className="card  bg-base-100 shadow-xl"
                    initial={{y: 100, opacity: 0 }}
                    whileInView={{y: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay:0.1, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 1 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                >
                    <figure>
                        <FaShippingFast className="text-6xl hover:text-7xl duration-300 text-gray-400 hover:text-black"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl text-center text-yellow-500 font-bold">Free Shipping & Returns</h2>
                        <p className="text-center">For all orders over $99</p>
                    </div>
                </motion.div>
                {/* Card 2 */}
                <motion.div 
                    initial={{y: 100, opacity: 0 }}
                    whileInView={{y: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay:0.3, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 1 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                    className="card  bg-base-100 shadow-xl"
                >
                    <figure>
                        <MdHomeRepairService className="text-6xl hover:text-7xl duration-300 text-gray-400 hover:text-black"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl text-center text-yellow-500 font-bold">Secure Payment</h2>
                        <p className="text-center">We ensure secure payment</p>
                    </div>
                </motion.div>
                {/* Card 3 */}
                <motion.div 
                    initial={{y: 100, opacity: 0 }}
                    whileInView={{y: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay:0.5, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 1 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                    className="card  bg-base-100 shadow-xl"
                >
                    <figure>
                        <FaMoneyBillTransfer className="text-6xl hover:text-7xl duration-300 text-gray-400 hover:text-black"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl text-center text-yellow-500 font-bold">Money Back Guarantee</h2>
                        <p className="text-center">Any back within 30 days</p>
                    </div>
                </motion.div>
                {/* Card 4 */}
                <motion.div 
                    className="card  bg-base-100 shadow-xl"
                    initial={{y: 100, opacity: 0 }}
                    whileInView={{y: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay: 0.7, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 1 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                >
                    <figure>
                        <HiMiniChatBubbleLeftRight className="text-6xl hover:text-7xl duration-300 text-gray-400 hover:text-black"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl text-center text-yellow-500 font-bold">Customer Support</h2>
                        <p className="text-center">Call or email us 24/7</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Service
