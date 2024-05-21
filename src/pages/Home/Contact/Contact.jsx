

const Contact = () => {
    return (
        <div>
            <h1 className='py-8 mt-12 text-4xl text-center font-bold uppercase text-green-600'> Get in Touch with Us </h1>
            <section id="contact" className="my-8">
            <div className="hero min-h-fit bg-blue-200 py-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-1 text-center lg:text-left px-12">
                        <h1 className="text-5xl font-bold text-center text-yellow-500">Contact us!</h1>
                        <p className="py-6 font-bold text-slate-500">
                        We are here to help! Whether you have questions about our products, need assistance with your order, or just want to provide feedback, our team at Lets Shop is ready to assist you. Reach out to us through any of the following methods, and we will get back to you as soon as possible. Your satisfaction is our top priority, and we look forward to connecting with you!
                        </p>
                        <p className="py-2 text-center text-xl font-bold text-blue-600">
                            Thank you. 
                        </p>
                    </div>
                    <div className=" flex-1 card w-full shadow-2xl bg-base-100 px-12">
                        <form  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input name="user_name" type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input name="user_email" type="email" placeholder="Your Email Address" className="input input-bordered" required />
                            </div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Your bio</span>
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type your message.........."></textarea>
                            </label>
                            <div className="form-control mt-6">
                                <button type="submit" value="Send" className="btn btn-primary">
                                    Send Massage
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Contact;