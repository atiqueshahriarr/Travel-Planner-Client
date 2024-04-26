import PropTypes from "prop-types";
import { createContext } from "react";

const AuthProvider = ({children}) => {
  const AuthContext = createContext(null);

  const authValue = {
    name: "Atique",
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
