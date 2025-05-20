import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { GridLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <GridLoader color="#646cff" size={30} />;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
