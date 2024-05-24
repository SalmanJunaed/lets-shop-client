import useUsersData from "../../../hooks/useUsersData"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

const AllUserInfo = () => {
    const [users] = useUsersData()
    return (
        <div>
            <h2 className="text-4xl text-center">All Users Info</h2>
            <h4 className="text-2xl text-center py-4">
                Total Users:{users.length}
            </h4>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Date of Birth</th>
                                <th>User type</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index)=><tr key={user._id}>
                                    <th> {index + 1} </th>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.address} </td>
                                    <td> {user.dob} </td>
                                    <td> {user.userType} </td>
                                    <th>
                                        <button className="btn btn-outline btn-success">
                                        <FaUserEdit className="text-2xl" />
                                        </button>
                                    </th>
                                    <th>
                                        <button className="btn btn-outline btn-error">
                                        <RiDeleteBin6Fill className="text-2xl" />
                                        </button>
                                    </th>
                                </tr>)
                            }
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUserInfo
