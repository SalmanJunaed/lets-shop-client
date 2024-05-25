import Banner from "../Home/Banner/Banner"
import About from "./About/About";
import CTA from "./CTA/CTA";
import Category from "./Category/Category";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import Marquee from "./Marquee/Marquee";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquee></Marquee>
            <Service></Service>
            <Category></Category>
            <Featured></Featured>
            <About></About>
            <Testimonial></Testimonial>
            <CTA></CTA>
            <Contact></Contact>
        </div>
    );
};

export default Home;