import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import img1 from "../../../assets/Banner/Banner-1.png"
import img2 from "../../../assets/Banner/Banner-2.png"

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            
            <div>
                <img src={img2} />
            </div>
        </Carousel>
    )
}

export default Banner
