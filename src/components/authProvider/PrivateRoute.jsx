import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/logreg/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
