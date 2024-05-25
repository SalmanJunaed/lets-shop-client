import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

import slide1 from "../../../assets/category/Electronics.jpg"
import slide2 from "../../../assets/category/Fashion.jpg"
import slide3 from "../../../assets/category/Furniture.jpg"
import slide4 from "../../../assets/category/Kitchen.jpg"

import { motion } from "framer-motion"

const Category = () => {
    return (
        <div className="my-8 bg-red-50">
            <div className="max-w-4xl mx-auto px-4 ">
                <motion.h1
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
                    className="text-4xl text-center font-bold uppercase text-yellow-500 py-6"
                >
                    Product Categories
                </motion.h1>
                <motion.h2 
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
                    className="text-2xl text-center text-gray-500 font-bold"
                >
                    Explore Our Diverse Product Categories
                </motion.h2>
                <motion.p
                    initial={{y: 100, opacity: 0 }}
                    whileInView={{y: 0, opacity: 1 }}
                    // viewport={{once: true}}
                    transition={{
                        delay:0.2, 
                        x:{type:"spring", stiffness: 60 }, 
                        opacity:{duration: 0.8 },
                        ease:"easeIn",
                        duration: 1, 
                    }}
                    className="py-6 text-slate-500"
                >
                    At Lets Shop, we believe that shopping should be a delightful experience. Founded with a passion for providing high-quality products and exceptional customer service, Lets Shop is your go-to destination for all things Fashion, Kitchen, Electronics, and Furniture. Our mission is to offer a diverse selection of products that cater to your unique tastes and needs, making your shopping journey enjoyable and hassle-free. Whether you are looking to upgrade your wardrobe, enhance your kitchen, find the latest tech gadgets, or furnish your home, we have got you covered. Join us at Lets Shop and discover a world of endless possibilities.
                </motion.p>
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="pb-12">
                        <img className="rounded-2xl" src={slide1} alt="" />
                        <h3 className="md:text-4xl text-center md:-mt-12 font-bold hover:text-yellow-500 duration-300">
                            Electronics
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="pb-12">
                        <img className="rounded-2xl" src={slide2} alt="" />
                        <h3 className="md:text-4xl text-center md:-mt-12 font-bold hover:text-yellow-500 duration-300">
                            Fashion
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="pb-12">
                        <img className="rounded-2xl" src={slide3} alt="" />
                        <h3 className="md:text-4xl text-center md:-mt-12 font-bold hover:text-yellow-500 duration-300">
                            Furniture
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="pb-12">
                        <img className="rounded-2xl" src={slide4} alt="" />
                        <h3 className="md:text-4xl text-center md:-mt-12 font-bold hover:text-yellow-500 duration-300">
                            Kitchen
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Category
