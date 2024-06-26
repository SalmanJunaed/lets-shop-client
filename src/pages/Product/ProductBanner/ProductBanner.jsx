import { motion } from "framer-motion"

const ProductBanner = () => {
    return (
        <div>
            {/* <div
                className="hero h-full w-full py-24"
                style={{ backgroundImage: "url(https://i.ibb.co/jwpXHj2/product-Banner.jpg)", }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content flex">
                    <div className=" flex-1"></div>
                    <div className="max-w-lg flex-1">
                        <h1 className="mb-5 text-4xl font-bold">Shop Now, Save Big</h1>
                        <p className="mb-5">
                        Join Lets Shop today for exclusive deals and unbeatable savings on all your favorite products!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            <div
                className="hero min-h-[600px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/jwpXHj2/product-Banner.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content flex">
                    <div className=" flex-1"></div>
                    <div className="max-w-3xl lg:flex-1">
                        <motion.h1 
                            initial={{x: 100, opacity: 0 }}
                            whileInView={{x: 0, opacity: 1 }}
                            // viewport={{once: true}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness: 60 }, 
                                opacity:{duration: 0.8 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="mb-5 text-5xl font-bold"
                        >
                            Explore Our <br /> Top Products
                        </motion.h1>
                        <br />
                        <motion.p 
                            initial={{x: -100, opacity: 0 }}
                            whileInView={{x: 0, opacity: 1 }}
                            // viewport={{once: true}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness: 60 }, 
                                opacity:{duration: 0.8 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="mb-5 text-xl"
                        >
                            Discover the best products in electronics, fashion, kitchen, and furniture. Shop now for quality and value.
                        </motion.p>
                        <br />
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBanner
