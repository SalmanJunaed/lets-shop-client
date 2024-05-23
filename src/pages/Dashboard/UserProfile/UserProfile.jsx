import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-6xl text-center">User Profile</h2>
            {
                user ? <>
                    <div className="hero lg:h-80 bg-base-200 lg:mb-16">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={user?user.photoURL:""} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold text-center">Name: {user?.displayName}</h1>
                                <p className="py-6 font-bold text-center">{user.email}</p>
                            </div>
                        </div>
                    </div>
                </>:<>
                </>
            }
        </div>
    );
};

export default UserProfile;