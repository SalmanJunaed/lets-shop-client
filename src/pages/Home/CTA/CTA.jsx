import { motion } from "framer-motion"

const CTA = () => {
    return (
        <div>
            <div
                className="hero min-h-80 bg-fixed"
                style={{ backgroundImage: "url(https://i.ibb.co/b587wK5/Tech-bg.jpg)", }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <motion.h1 
                            initial={{y: -100, opacity: 0 }}
                            whileInView={{y: 0, opacity: 1 }}
                            // viewport={{once: true}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness: 60 }, 
                                opacity:{duration: 0.8 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="mb-5 text-4xl font-bold"
                        >
                            Shop Now, Save Big
                        </motion.h1>
                        <motion.p 
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
                            className="mb-5"
                        >
                        Join Lets Shop today for exclusive deals and unbeatable savings on all your favorite products!
                        </motion.p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
