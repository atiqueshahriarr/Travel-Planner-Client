import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="w-16 loading loading-spinner text-primary"></span>
        <span className="w-16 loading loading-spinner text-secondary"></span>
        <span className="w-16 loading loading-spinner text-accent"></span>
        <span className="w-16 loading loading-spinner text-neutral"></span>
        <span className="w-16 loading loading-spinner text-info"></span>
        <span className="w-16 loading loading-spinner text-success"></span>
        <span className="w-16 loading loading-spinner text-warning"></span>
        <span className="w-16 loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/logreg/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
