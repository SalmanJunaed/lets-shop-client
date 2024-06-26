import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut(() => {})
        .catch(error => console.log(error));
    }
    const navOptions = <>
        <li>
            <div className="font-bold hover:text-white"><Link to='/'>Home</Link></div>
        </li>
        <li>
            <div className="font-bold hover:text-white"><Link to='/product'>Products</Link></div>
        </li>
        {/* <li>
            <div className=" btn btn-warning font-bold hover:text-white"><Link to='/dashboard/userProfile'>Dashboard</Link></div>
        </li> */}
        {
            user ? <>
                <li>
                <div className=" btn btn-warning font-bold hover:text-white"><Link to='/dashboard/userProfile'>Go To Dashboard</Link></div>
                </li>
            </>:<>
                
            </>
        }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-60 bg-slate-300 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src="/src/assets/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <img className="w-12 rounded-full" src={user?user.photoURL:""} alt="" /> <hr />
                            <span className="font-bold text-white"> {user.displayName} &nbsp;</span>
                            <button onClick={handleLogOut} className="btn btn-warning text-white">LogOut</button>
                        </>:<>
                            <Link to='/login'>
                                <p className="btn btn-active btn-primary">Login</p>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
