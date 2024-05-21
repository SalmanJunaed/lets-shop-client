import Banner from "../Home/Banner/Banner"
import About from "./About/About";
import CTA from "./CTA/CTA";
import Category from "./Category/Category";
import Contact from "./Contact/Contact";
import Service from "./Service/Service";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Category></Category>
            <About></About>
            <CTA></CTA>
            <Contact></Contact>
        </div>
    );
};

export default Home;