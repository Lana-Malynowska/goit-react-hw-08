import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header style={{ borderBottom: "1px solid #646cff" }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
