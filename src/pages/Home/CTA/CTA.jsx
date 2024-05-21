const CTA = () => {
    return (
        <div>
            <div
                className="hero min-h-80"
                style={{ backgroundImage: "url(https://i.ibb.co/b587wK5/Tech-bg.jpg)", }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Shop Now, Save Big</h1>
                        <p className="mb-5">
                        Join Lets Shop today for exclusive deals and unbeatable savings on all your favorite products!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
