import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

import { AiOutlineProduct } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { BsDatabaseAdd } from "react-icons/bs";



const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }
    return (
        <div className="flex">
            {/* Dashboard Side bar */}
            <div className="w-64 min-h-screen bg-yellow-600">
                <ul className="menu p-2">
                    <li>
                        <NavLink to="/dashboard/products"> <AiOutlineProduct /> All Products </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addProducts"> <BsDatabaseAdd /> Add Products </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/userProfile"><ImProfile />Home Page</NavLink>
                    </li>


                    {/* shared nav link  */}
                    <ul className="divider"></ul>
                    <li>
                        <NavLink to='/' ><FaHome /> Home Page</NavLink>
                    </li>
                    
                    {/* <li>
                        <p className="btn btn-sm my-4" onClick={handleLogOut}>logout</p>
                    </li> */}
                    <li>
                            {
                                user ? <>
                                    <span><img className="w-12 rounded-full" src={user?user.photoURL:""} alt="" /> <hr />
                                    {user.email}</span>
                                    <p className="btn btn-sm my-4" onClick={handleLogOut}>logout</p>
                                    
                                </>:<>
                                {/* // */}
                                </>
                            }
                    </li>
                </ul>
            </div>
            {/* Navigation contents */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;