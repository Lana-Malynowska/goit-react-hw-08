import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="register">Sign up</NavLink>
    </>
  );
};

export default AuthNav;
