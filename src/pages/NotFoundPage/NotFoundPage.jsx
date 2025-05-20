import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notfound}>
      <h2>Page is not found...</h2>
      <NavLink to="/">Return to main page</NavLink>
    </div>
  );
};

export default NotFoundPage;
