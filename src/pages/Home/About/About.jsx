

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-8">
                    <img src="/src/assets/Banner/about-img.png" className="w-2/5 rounded-lg shadow-2xl" />
                    <div  className="w-1/2">
                        <h1 className="text-5xl text-center font-bold uppercase text-yellow-500 py-6">About Us</h1>
                        <h2 className="text-2xl text-center text-gray-500 font-bold">Welcome to Lets Shop <br />Your One-Stop Destination for All Your Needs</h2>
                        <p className="py-6 text-slate-500">At Lets Shop, we believe that shopping should be a delightful experience. Founded with a passion for providing high-quality products and exceptional customer service, Lets Shop is your go-to destination for all things Fashion, Kitchen, Electronics, and Furniture. Our mission is to offer a diverse selection of products that cater to your unique tastes and needs, making your shopping journey enjoyable and hassle-free. Whether you are looking to upgrade your wardrobe, enhance your kitchen, find the latest tech gadgets, or furnish your home, we have got you covered. Join us at Lets Shop and discover a world of endless possibilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;