import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useCustomRequest = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {refetch, data: customReq = []} = useQuery({
        queryKey: ['customReq', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/customReq?email=${user.email}`);
            return res.data
        }
    })
    return [customReq, refetch]
};

export default useCustomRequest;