import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

// import { useEffect, useState } from "react"

import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'

import useReview from "../../../hooks/useReview"

const Testimonial = () => {
    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch("review.json")
    //         .then((res) => res.json())
    //         .then((data) => setReviews(data))
    // }, [])
    
    const [reviews] = useReview() 
    return (
        <section className="py-12 pb-6 bg-red-50">
            <div className="">
                <h1 className="text-4xl text-center font-bold uppercase text-yellow-500 py-2">
                    Heading Review
                </h1>
                <h3 className="text-2xl text-center text-gray-500 font-bold">
                    Title
                </h3>
            </div>
            <div className="mt-4 py-10 bg-slate-300 rounded-3xl mx-4">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.productId}>
                            <div className="text-center">
                                <h3 className="text-2xl  my-4">
                                    {review.userName}
                                </h3>
                                <Rating className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
