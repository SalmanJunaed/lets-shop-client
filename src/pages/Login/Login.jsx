import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Logged In Successfully",
                    showClass: {
                        popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                        `
                    },
                    hideClass: {
                        popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                        `
                    }
                });
                navigate(from, {replace: true});
            })
    }
    return (
        <div>
            {/* Bredcrumb */}
            <div className="hero min-h-44 bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl text-center font-bold uppercase text-yellow-500 py-6">User Login</h1>
                        <p className="py-6 text-2xl">
                            <Link to="/"><span className="font-bold">Home</span></Link> / Login
                        </p>
                    </div>
                </div>
            </div>

            {/* Login form  */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    {/* <h1 className="text-5xl text-center font-bold uppercase text-yellow-500 py-6">Login Now!</h1> */}
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/src/assets/login&register/login.png" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="text-center pb-6"><small >New Here? <Link className="font-bold text-blue-600" to="/register">Create an Account</Link> </small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
