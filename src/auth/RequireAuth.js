import { Navigate } from "react-router-dom";
import { isAuth } from "./isAuth";

function RequireAuth({ children }) {
  const authed = isAuth();
  return authed === true ? children : <Navigate to="/" replace />;
}

export default RequireAuth;
