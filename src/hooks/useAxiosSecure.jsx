import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Required for sending signed cookies
});

const useAxiosSecure = () => {
  const { logout } = useAuth();

  // Axios Request Interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      // Modify config before request is sent
      return config;
    },

    (error) => {
      // Handle request errors
      return Promise.reject(error);
    }
  );

  // Axios Response Interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      // Handle successful responses
      return response;
    },

    async (error) => {
      const originalRequest = error.config;

      // Access Token is expired then run the code block
      if (error.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;

        try {
          // Refresh the access token
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/users/refresh`,
            {},
            { withCredentials: true }
          );

          // Retry the original request with refreshed token
          return axiosSecure(originalRequest);
        } catch (refreshError) {
          //
          if (
            error.response?.status === 401 ||
            error.response?.status === 403
          ) {
            logout();
          }

          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
