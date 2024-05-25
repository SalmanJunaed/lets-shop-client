// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"

// import img1 from "../../../assets/Banner/Banner-1.png"
// import img2 from "../../../assets/Banner/Banner-2.png"

import { Link } from "react-router-dom"

import { MdStart } from "react-icons/md";

import { motion } from "framer-motion"


const Banner = () => {
    return (
        // <Carousel>
        //     <div>
        //         <img src={img1} />
        //     </div>
        //     <div>
        //         <img src={img2} />
        //     </div>
        // </Carousel>
        <div>
            <div className="flex pt-24 flex-col-reverse lg:flex-row lg:justify-evenly  lg:gap-8 w-full h-[600px] ">
                <div className="">
                    <motion.img 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{
                            delay:0.2, 
                            x:{type:"spring", stiffness:60 }, 
                            opacity:{duration:1.5 },
                            ease:"easeIn",
                            duration: 1, 
                        }}
                        src="/src/assets/img/img-5-287x400px.png" 
                        alt="Banner Image" 
                    />
                </div>
                <div className="w-1/2">
                    <motion.h1 
                        initial={{x: 100, opacity: 0 }}
                        whileInView={{x:0, opacity: 1 }}
                        transition={{
                            delay:0.2, 
                            x:{type:"spring", stiffness:60 }, 
                            opacity:{duration:1.5 },
                            ease:"easeIn",
                            duration: 1, 
                        }}
                        className="text-6xl font-bold pt-5 text-center text-yellow-500"
                    >
                        Shop The Best Deals
                    </motion.h1>
                    <motion.h3 
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
                        className=" text-center font-bold text-4xl py-8 text-green-700"
                    > 
                        Unbeatable Prices on Top Products
                    </motion.h3>
                    <motion.p
                        initial={{x: 100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1 }}
                        // viewport={{once: true}}
                        transition={{
                            delay:0.6, 
                            x:{type:"spring", stiffness: 60 }, 
                            opacity:{duration: 0.5 },
                            ease:"easeIn",
                            duration: 1, 
                        }} 
                        className="font-bold text-xl text-slate-500 py-6"
                    >
                        Find exclusive deals and discounts on your favorite products. Shop now for the best offers!
                    </motion.p>
                    <motion.div
                        initial={{y: 100, opacity: 0 }}
                        whileInView={{y: 0, opacity: 1 }}
                        // viewport={{once: true}}
                        transition={{
                            delay:0.2, 
                            x:{type:"spring", stiffness: 60 }, 
                            opacity:{duration: 1 },
                            ease:"easeIn",
                            duration: 1, 
                        }}
                    >
                        <Link to="/login" className="flex justify-center my-8 mt-16">
                            <button className="btn btn-primary"> Get Started <MdStart className="text-2xl"/> </button>
                        </Link>
                    </motion.div>
                    {/* <img className="self-center" src="/src/assets/img/img-4-400x200px.png" alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Banner
