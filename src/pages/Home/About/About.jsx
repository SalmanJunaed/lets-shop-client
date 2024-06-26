import { motion } from "framer-motion"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-8">
                    <motion.img 
                        initial={{y:-100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{
                            delay:0.2, 
                            x:{type:"spring", stiffness:60 }, 
                            opacity:{duration:1.5 },
                            ease:"easeIn",
                            duration: 1, 
                        }}
                        src="/src/assets/Banner/about-img.png" 
                        className="w-2/5 rounded-lg shadow-2xl" 
                    />
                    <div className="w-1/2">
                        <motion.h1
                            initial={{x:100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration: 0.5 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="text-5xl text-center font-bold uppercase text-yellow-500 py-6"
                        >
                            About Us
                        </motion.h1>
                        <motion.h2
                            initial={{x:-100, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:0.7 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="text-2xl text-center text-gray-500 font-bold"
                        >
                            Welcome to Lets Shop <br />Your One-Stop Destination for All Your Needs
                        </motion.h2>
                        <motion.p 
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{
                                delay:0.2, 
                                x:{type:"spring", stiffness:60 }, 
                                opacity:{duration:0.8 },
                                ease:"easeIn",
                                duration: 1, 
                            }}
                            className="py-6 text-slate-500"
                        >
                            At Lets Shop, we believe that shopping should be a delightful experience. Founded with a passion for providing high-quality products and exceptional customer service, Lets Shop is your go-to destination for all things Fashion, Kitchen, Electronics, and Furniture. Our mission is to offer a diverse selection of products that cater to your unique tastes and needs, making your shopping journey enjoyable and hassle-free. Whether you are looking to upgrade your wardrobe, enhance your kitchen, find the latest tech gadgets, or furnish your home, we have got you covered. Join us at Lets Shop and discover a world of endless possibilities.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;