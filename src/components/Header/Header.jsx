import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./Header.module.css";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.header}>
      <h2>CallSheet</h2>
      {isLoggedIn && <h2>Welcome, {user.name}</h2>}
      <nav className={s.navlinks}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={setActiveClass} to="/login">
              Login
            </NavLink>
            <NavLink className={setActiveClass} to="/register">
              Register
            </NavLink>
          </>
        )}

        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
