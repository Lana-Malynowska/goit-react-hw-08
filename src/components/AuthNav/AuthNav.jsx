import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="register">Sign up</NavLink>
    </div>
  );
};

export default AuthNav;
