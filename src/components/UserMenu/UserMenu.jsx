import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { resetFilter } from "../../redux/filters/slice";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      dispatch(resetFilter());
    });
  };

  return (
    <div className={s.userMenu}>
      <h2>Welcome, {user.name}!</h2>
      <NavLink to="/contacts">Contacts</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
