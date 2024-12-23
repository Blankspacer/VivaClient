import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const axiosPublic = useAxiosPublic();

  // handle login
  const login = async (credentials) => {
    try {
      const { data } = await axiosPublic.post("/api/users/login", credentials);

      if (data.success) {
        // Save to localStorage
        localStorage.setItem("userData", JSON.stringify(data.data));
      }

      return data;
    } catch (error) {
      return error.response.data;
    }
  };

  // handle logout
  const logout = async () => {
    try {
      const { data } = await axiosPublic.post("/api/users/logout");

      if (data.success) {
        localStorage.removeItem("userData");
      }

      return data;
    } catch (error) {
      return error.response.data;
    }
  };

  // auth sate auto update every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      const user = JSON.parse(localStorage.getItem("userData"));
      if (user) {
        setAuth(user);
      } else {
        setAuth(null);
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
