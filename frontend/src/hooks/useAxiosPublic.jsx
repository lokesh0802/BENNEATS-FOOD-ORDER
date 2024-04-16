import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://benneats-food-order.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
