import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    // const axiosPublic = useAxiosPublic();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name)
            .then(() =>{
                // const userInfo = {
                //     name: data.name,
                //     email: data.email,
                //     address: data.address,
                //     dob: data.dob,
                //     userType: data.userType,
                // }
                // console.log(userInfo);
                //axiosPublic.post('users', userInfo)
                // console.log('userProfile Info updated')
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate();
            })
            .catch(error => console.log(error))
        })
    };
    // console.log(watch("example"))
    return (
        <div>
            {/* Bredcrumb */}
            <div className="hero min-h-44 bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl text-center font-bold uppercase text-yellow-500 py-6">Register Now!</h1>
                        <p className="py-6 text-2xl">
                            <Link to="/"><span className="font-bold">Home</span></Link> / SignUp
                        </p>
                    </div>
                </div>
            </div>
            {/* Register form  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/src/assets/login&register/registration.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" {...register("name", { required: true })}  type="text" placeholder="Your Name" className="input input-bordered"/>
                                {errors.name && <span>Name field is required</span>}
                            </div>
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input name="address" {...register("address", { required: true })}  type="text" placeholder="Your Name" className="input input-bordered"/>
                                {errors.address && <span>Address field is required</span>}
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span>email field is required</span>}
                            </div>
                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })} type="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-500">
                                            Password is required
                                        </p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-500">
                                            Password must be 6 character
                                        </p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-500">
                                            Password must be within 20 character
                                        </p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-500">
                                            Password must be one upper case, one
                                            lower case and one special character
                                        </p>
                                    )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            {/* Date of Birth  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">date of birth</span>
                                </label>
                                <input name="dob" {...register("dob", { required: true })} type="date" placeholder="email" className="input input-bordered" />
                                {errors.dob && <span>Date of Birth is required</span>}
                            </div>
                            {/* User type */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">User Type</span>
                                </label>
                                <select defaultValue='default' {...register("userType", {required: true})} className="select select-bordered w-full my-6">
                                    <option value="">Customer</option>
                                    <option value="admin">Admin User</option>
                                </select>
                                {errors.userType && <span>User Type is required</span>}
                            </div>
                            {/* SignUp Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className='text-center py-3'>
                            <small>Already have Account? Then <Link  to='/login'><span className='font-bold text-blue-600'>Login</span></Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;