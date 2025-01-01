import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.role === "admin") {
    return children;
  } else if (localStorage.getItem("userData")) {
    return "Loading.........";
  }

  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
