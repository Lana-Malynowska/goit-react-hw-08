import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <NavLink to="/contacts">Contacts</NavLink>
      <h2>Welcome, {user.name}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};

export default UserMenu;
