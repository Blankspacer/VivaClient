import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Required for sending signed cookies
});

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
